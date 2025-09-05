import { Button, Stack } from 'react-bootstrap'

import { useProductsContext } from '../context/ProductsContext'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'

type CartItemProps = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart()
  const { products } = useProductsContext()

  // Convert numeric ID back to string format to find the product
  const productIdString = id.toString(16).padStart(8, '0')
  const product = products.find((p) => p.id.replace(/-/g, '').substring(0, 8) === productIdString)

  if (product === null || product === undefined) return null

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-start'>
      <div
        className='d-flex align-items-start'
        style={{
          width: '125px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <img src={product.image} style={{ width: '125px', height: '75px', objectFit: 'cover' }} />
      </div>
      <div className='me-auto'>
        <div>
          {product.name}{' '}
          {quantity > 1 && (
            <span className='text-muted' style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className='text-muted' style={{ fontSize: '.75rem' }}>
          {formatCurrency(product.price)}
        </div>
      </div>
      <div> {formatCurrency(product.price * quantity)}</div>
      <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(id)}>
        &times;
      </Button>
    </Stack>
  )
}
