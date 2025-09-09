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
}

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { cartItems } = useShoppingCart()
  const hasFetchedRef = useRef(false)

  // Debug products state changes
  useEffect(() => {
    console.log('Products state changed:', products.length, 'items')
  }, [products])

  const fetchProductsFromAPI = useCallback(async (isRetry = false) => {
    // Prevent multiple calls on initial load, but allow retries
    if (hasFetchedRef.current && !isRetry) return

    try {
      console.log('Starting API fetch...')
      setLoading(true)
      setError(null)
      hasFetchedRef.current = true

      // Fetch all products once on app load
      console.log('Fetching from: https://jsonfakery.com/products')
      const response = await fetch('https://jsonfakery.com/products')
      console.log('Response received, status:', response.status, 'ok:', response.ok)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('API Response received, type:', typeof data, 'isArray:', Array.isArray(data), 'length:', Array.isArray(data) ? data.length : 'N/A')

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
      
      console.log('Processed products count:', fetchedProducts.length)

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

      console.log('Final products count being set:', allProducts.length)
      // Load all products at once
      setProducts(allProducts)
    } catch (err) {
      console.error('Error fetching products:', err)
      setError(err instanceof Error ? err.message : 'An error occurred while fetching products')
      setProducts([])
    } finally {
      console.log('API fetch completed, setting loading to false')
      setLoading(false)
    }
  }, [cartItems])

  const retryFetch = useCallback(() => {
    fetchProductsFromAPI(true)
  }, [fetchProductsFromAPI])

  // Fetch products from API only once on mount
  useEffect(() => {
    console.log('useProducts useEffect triggered, calling fetchProductsFromAPI')
    fetchProductsFromAPI()
  }, [fetchProductsFromAPI])

  return {
    products,
    loading,
    error,
    refetch: retryFetch,
  }
}
