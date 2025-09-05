import { Offcanvas, Stack } from 'react-bootstrap'

import { useShoppingCart } from '../context/ShoppingCartContext'
import { useProductsContext } from '../context/ProductsContext'
import { formatCurrency } from '../utilities/formatCurrency'
import { CartItem } from './CartItem'

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()
  const { products } = useProductsContext()
  
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className='ms-auto fw-bold fs-5'>
            Total{' '}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                // Convert numeric ID back to string format to find the product
                const productIdString = cartItem.id.toString(16).padStart(8, '0')
                const product = products.find((p) => 
                  p.id.replace(/-/g, '').substring(0, 8) === productIdString
                )
                return total + (product?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
