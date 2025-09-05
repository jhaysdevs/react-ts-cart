import { ReactNode, createContext, useContext } from 'react'

import { Product, useProducts } from '../hooks/useProducts'

type ProductsContextType = {
  products: Product[]
  loading: boolean
  error: string | null
  refetch: () => void
}

const ProductsContext = createContext<ProductsContextType | undefined>(undefined)

type ProductsProviderProps = {
  children: ReactNode
}

export function ProductsProvider({ children }: ProductsProviderProps) {
  const productsData = useProducts()

  return <ProductsContext.Provider value={productsData}>{children}</ProductsContext.Provider>
}

export function useProductsContext() {
  const context = useContext(ProductsContext)
  if (context === undefined) {
    throw new Error('useProductsContext must be used within a ProductsProvider')
  }
  return context
}
