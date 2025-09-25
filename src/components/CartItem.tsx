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
      <div className='d-flex align-items-start cart-item-image-container'>
        {product.image ? (
          <img
            src={product.image}
            className='cart-item-image'
            onClick={handleProductClick}
            alt={product.name}
          />
        ) : (
          <div className='cart-item-placeholder' onClick={handleProductClick}>
            📦
          </div>
        )}
      </div>
      <div className='me-auto cart-item-details' onClick={handleProductClick}>
        <div>
          {product.name}{' '}
          {quantity > 1 && <span className='text-muted cart-item-quantity-badge'>x{quantity}</span>}
        </div>
        <div className='text-muted cart-item-price'>{formatCurrency(product.price)}</div>
      </div>
      <div> {formatCurrency(product.price * quantity)}</div>
      <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(product.id)}>
        &times;
      </Button>
    </Stack>
  )
}
