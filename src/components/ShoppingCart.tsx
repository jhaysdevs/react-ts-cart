import { Offcanvas, Stack } from 'react-bootstrap'

import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'
import { CartItem } from './CartItem'

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart()

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems
            .filter((item) => item.product && item.product.id) // Filter out any malformed items
            .map((item) => (
              <CartItem key={item.product.id} product={item.product} quantity={item.quantity} />
            ))}
          <div className='ms-auto fw-bold fs-5'>
            Total{' '}
            {formatCurrency(
              cartItems
                .filter((item) => item.product && item.product.id)
                .reduce((total, cartItem) => {
                  return total + cartItem.product.price * cartItem.quantity
                }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
