import { useShoppingCart } from '../context/ShoppingCartContext'
import { useCallback, useEffect, useState, useRef } from 'react'

export type Product = {
  id: string
  name: string
  price: number
  image: string
  description: string
  manufacturer: string
  product_category: {
    id: string
    name: string
    created_at: string
    updated_at: string
  }
  created_at: string
  updated_at: string
}

type UseProductsReturn = {
  products: Product[]
  loading: boolean
  error: string | null
  refetch: () => void
  loadMore: () => void
  hasMore: boolean
  isLoadingMore: boolean
  isRetrying: boolean
}

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isRetrying, setIsRetrying] = useState(false)
  const itemsPerPage = 12 // Display 12 items per batch for better UX
  const { cartItems } = useShoppingCart()
  const apiProductsRef = useRef<Product[]>([])
  const initialFetchCompleteRef = useRef(false)
  const hasFetchedRef = useRef(false)

  const fetchProductsFromAPI = useCallback(async (isRetry = false) => {
    // Prevent multiple calls on initial load, but allow retries
    if (hasFetchedRef.current && !isRetry) return

    try {
      if (isRetry) {
        setIsRetrying(true)
      } else {
        setLoading(true)
      }
      setError(null)
      hasFetchedRef.current = true

      // Fetch all products once on app load
      const response = await fetch('https://jsonfakery.com/products')

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      // Handle different response structures
      let fetchedProducts = []
      if (Array.isArray(data)) {
        fetchedProducts = data
      } else if (data && Array.isArray(data.data)) {
        fetchedProducts = data.data
      } else if (data && Array.isArray(data.products)) {
        fetchedProducts = data.products
      } else if (data && Array.isArray(data.items)) {
        fetchedProducts = data.items
      } else {
        fetchedProducts = []
      }

      // Ensure we always have an array
      if (!Array.isArray(fetchedProducts)) {
        fetchedProducts = []
      }

      // Store all products in ref for progressive display
      apiProductsRef.current = fetchedProducts

      // Process cart items during initial fetch (only once)
      const cartProducts = (cartItems || [])
        .filter((item) => item.product && item.product.id)
        .map((item) => item.product)

      let allProducts = fetchedProducts
      if (cartProducts.length > 0) {
        // Remove cart products from fetched products to avoid duplicates
        const cartProductIds = new Set(cartProducts.map((p) => p.id))
        const uniqueFetchedProducts = fetchedProducts.filter(
          (p: Product) => !cartProductIds.has(p.id)
        )

        // Prepend cart products to the beginning of the product list
        allProducts = [...cartProducts, ...uniqueFetchedProducts]
      }

      // Display first batch of products (12 items)
      const firstBatch = allProducts.slice(0, itemsPerPage)
      setProducts(firstBatch)

      // Set hasMore based on whether there are more products to show
      setHasMore(allProducts.length > itemsPerPage)

      // Mark initial fetch as complete
      initialFetchCompleteRef.current = true
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching products')
      setProducts([])
    } finally {
      if (isRetry) {
        setIsRetrying(false)
      } else {
        setLoading(false)
      }
    }
  }, [itemsPerPage, cartItems])

  const retryFetch = useCallback(() => {
    fetchProductsFromAPI(true)
  }, [fetchProductsFromAPI])

  // For pagination, we need to track if we've reached the end
  const [hasMore, setHasMore] = useState(true)

  const loadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) {
      return
    }
    setIsLoadingMore(true)

    // Minimal delay for smooth animation
    setTimeout(() => {
      try {
        // Get all available products (including cart items)
        const cartProducts = (cartItems || [])
          .filter((item) => item.product && item.product.id)
          .map((item) => item.product)

        let allProducts = apiProductsRef.current
        if (cartProducts.length > 0) {
          // Remove cart products from fetched products to avoid duplicates
          const cartProductIds = new Set(cartProducts.map((p) => p.id))
          const uniqueFetchedProducts = apiProductsRef.current.filter(
            (p: Product) => !cartProductIds.has(p.id)
          )

          // Prepend cart products to the beginning of the product list
          allProducts = [...cartProducts, ...uniqueFetchedProducts]
        }

        // Calculate next batch of products to show
        const currentDisplayedCount = products.length
        const nextBatch = allProducts.slice(
          currentDisplayedCount,
          currentDisplayedCount + itemsPerPage
        )

        if (nextBatch.length > 0) {
          setProducts((prev) => [...prev, ...nextBatch])

          // Check if we've reached the end
          if (currentDisplayedCount + nextBatch.length >= allProducts.length) {
            setHasMore(false)
          }
        } else {
          // No more products available
          setHasMore(false)
        }
      } catch (err) {
        console.error('Error in loadMore:', err)
      } finally {
        setIsLoadingMore(false)
      }
    }, 50) // Much faster loading - reduced from 300ms to 50ms
  }, [isLoadingMore, hasMore, products.length, itemsPerPage, cartItems])

  // Fetch products from API only once on mount
  useEffect(() => {
    fetchProductsFromAPI()
  }, [fetchProductsFromAPI])

  // Only process cart items when explicitly requested (no automatic processing)
  // This prevents double refresh issues

  return {
    products,
    loading,
    error,
    refetch: retryFetch,
    loadMore,
    hasMore,
    isLoadingMore,
    isRetrying,
  }
}
