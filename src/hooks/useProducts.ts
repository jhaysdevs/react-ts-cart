import { useEffect, useState } from 'react'

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

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch('https://jsonfakery.com/products')

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setProducts(data || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while fetching products')
      setProducts([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return {
    products,
    loading,
    error,
    refetch: fetchProducts,
  }
}
