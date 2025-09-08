import { Button, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useShoppingCart } from '../context/ShoppingCartContext'
import { Product } from '../hooks/useProducts'
import { formatCurrency } from '../utilities/formatCurrency'

type CartItemProps = {
  product: Product
  quantity: number
}

export function CartItem({ product, quantity }: CartItemProps) {
  const { removeFromCart, closeCart } = useShoppingCart()
  const navigate = useNavigate()

  // Convert product ID to numeric for navigation (keeping compatibility with existing routes)
  const numericId = parseInt(product.id.replace(/-/g, '').substring(0, 8), 16)

  const handleProductClick = () => {
    closeCart()
    navigate(`/product/${numericId}`)
  }

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
        <img
          src={product.image}
          style={{ width: '125px', height: '75px', objectFit: 'cover', cursor: 'pointer' }}
          onClick={handleProductClick}
          alt={product.name}
        />
      </div>
      <div className='me-auto' style={{ cursor: 'pointer' }} onClick={handleProductClick}>
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
      <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(product.id)}>
        &times;
      </Button>
    </Stack>
  )
}
