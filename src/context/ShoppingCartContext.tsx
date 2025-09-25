import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { ShoppingCart } from '../components/ShoppingCart'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { Product } from '../hooks/useProducts'

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  product: Product
  quantity: number
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (productId: string) => number
  increaseCartQuantity: (product: Product) => void
  decreaseCartQuantity: (productId: string) => void
  removeFromCart: (productId: string) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', [])
  const location = useLocation()

  const isOnCartPage = location.pathname === '/cart'

  // Utility function to consolidate duplicate items
  const consolidateItems = (items: CartItem[]): CartItem[] => {
    return items.reduce((acc, item) => {
      const existingItem = acc.find((existing) => existing.product.id === item.product.id)
      if (existingItem) {
        existingItem.quantity += item.quantity
      } else {
        acc.push({ ...item })
      }
      return acc
    }, [] as CartItem[])
  }

  // Migrate old cart data and clean up duplicates on mount
  useEffect(() => {
    // Check if we have old format cart items (with numeric id instead of product object)
    const hasOldFormat = cartItems.some((item) => 'id' in item && typeof item.id === 'number')

    if (hasOldFormat) {
      // Clear old format cart items - they can't be migrated without product data
      console.log('Cart data format updated - clearing old cart items for compatibility')
      setCartItems([])
      return
    }

    // Clean up any duplicate items
    const uniqueItems = consolidateItems(cartItems)

    // Only update if there were duplicates
    if (uniqueItems.length !== cartItems.length) {
      setCartItems(uniqueItems)
    }
  }, []) // Only run on mount

  const cartQuantity = useMemo(() => {
    return cartItems.reduce((quantity, item) => item.quantity + quantity, 0)
  }, [cartItems])

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  function getItemQuantity(productId: string) {
    return cartItems.find((item) => item.product.id === productId)?.quantity || 0
  }

  function increaseCartQuantity(product: Product) {
    setCartItems((currItems) => {
      // First, consolidate any existing duplicates
      const consolidatedItems = consolidateItems(currItems)

      // Then add or increment the item
      const existingItem = consolidatedItems.find((item) => item.product.id === product.id)
      if (existingItem == null) {
        return [...consolidatedItems, { product, quantity: 1 }]
      } else {
        return consolidatedItems.map((item) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseCartQuantity(productId: string) {
    setCartItems((currItems) => {
      // First, consolidate any existing duplicates
      const consolidatedItems = consolidateItems(currItems)

      // Then decrement or remove the item
      const existingItem = consolidatedItems.find((item) => item.product.id === productId)
      if (existingItem?.quantity === 1) {
        return consolidatedItems.filter((item) => item.product.id !== productId)
      } else {
        return consolidatedItems.map((item) => {
          if (item.product.id === productId) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(productId: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.product.id !== productId)
    })
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}>
      {children}
      {isOnCartPage && <ShoppingCart isOpen={isOpen} />}
    </ShoppingCartContext.Provider>
  )
}
