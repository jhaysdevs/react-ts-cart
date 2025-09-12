import { useState } from 'react'

import { Button, Card, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useShoppingCart } from '../context/ShoppingCartContext'
import { Product } from '../hooks/useProducts'
import '../styles/pages/Cart.scss'
import { formatCurrency } from '../utilities/formatCurrency'

type AnimatedCartItemProps = {
  product: Product
  quantity: number
}

export function AnimatedCartItem({ product, quantity }: AnimatedCartItemProps) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart()
  const navigate = useNavigate()
  const [isRemoving, setIsRemoving] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  // Convert product ID to numeric for navigation (keeping compatibility with existing routes)
  const numericId = parseInt(product.id.replace(/-/g, '').substring(0, 8), 16)

  const handleProductClick = () => {
    navigate(`/product/${numericId}`)
  }

  const handleRemove = () => {
    setIsRemoving(true)
    setTimeout(() => {
      removeFromCart(product.id)
    }, 300)
  }

  const handleIncrease = () => {
    setIsUpdating(true)
    increaseCartQuantity(product)
    setTimeout(() => setIsUpdating(false), 25)
  }

  const handleDecrease = () => {
    setIsUpdating(true)
    decreaseCartQuantity(product.id)
    setTimeout(() => setIsUpdating(false), 25)
  }

  return (
    <Card
      className={`cart-item-card ${isRemoving ? 'removing' : ''} ${isUpdating ? 'updating' : ''}`}>
      <Card.Body>
        <Stack direction='horizontal' gap={3} className='d-flex align-items-stretch'>
          <div className='product-image-container' onClick={handleProductClick}>
            <img src={product.image} alt={product.name} />
          </div>

          <div className='me-auto product-details' onClick={handleProductClick}>
            <h6 className='mb-1 product-name'>{product.name}</h6>
            <p className='text-muted mb-1 price-text'>
              <strong>{formatCurrency(product.price)}</strong> × {quantity}
            </p>
            <div className='quantity-controls d-flex align-items-end gap-2'>
              <Button
                variant='outline-primary'
                size='md'
                onClick={(e) => {
                  e.stopPropagation()
                  handleDecrease()
                }}
                disabled={quantity <= 1}
                className='rounded-circle'>
                −
              </Button>
              <span className='quantity-display'>{quantity}</span>
              <Button
                variant='outline-primary'
                size='md'
                onClick={(e) => {
                  e.stopPropagation()
                  handleIncrease()
                }}
                className='rounded-circle'>
                +
              </Button>
            </div>
          </div>

          <div className='price-section h-auto text-center d-flex flex-column align-items-center justify-end'>
            <div className='item-total fw-bold fs-5'>
              {formatCurrency(product.price * quantity)}
            </div>
            <Button
              variant='outline-danger'
              size='sm'
              onClick={(e) => {
                e.stopPropagation()
                handleRemove()
              }}
              className='remove-btn'>
              Remove
            </Button>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  )
}
