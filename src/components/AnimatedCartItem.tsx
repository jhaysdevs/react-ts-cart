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
      className={`cart-item-card ${isRemoving ? 'removing' : ''} ${isUpdating ? 'updating' : ''}`}
      style={{
        transition: 'all 0.3s ease',
        transform: isRemoving ? 'translateX(-100%)' : 'translateX(0)',
        opacity: isRemoving ? 0 : 1,
      }}>
      <Card.Body>
        <Stack direction='horizontal' gap={3} className='d-flex align-items-center'>
          <div
            className='product-image-container'
            style={{
              width: '120px',
              height: '120px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'transform 0.2s ease',
            }}
            onClick={handleProductClick}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
            }}>
            <img
              src={product.image}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              alt={product.name}
            />
          </div>

          <div
            className='me-auto product-details'
            style={{ cursor: 'pointer' }}
            onClick={handleProductClick}>
            <h6 className='mb-1 product-name'>{product.name}</h6>
            <p className='text-muted mb-1' style={{ fontSize: '0.9rem' }}>
              {formatCurrency(product.price)} each
            </p>
            <div className='quantity-controls d-flex align-items-center gap-2'>
              <Button
                variant='outline-secondary'
                size='sm'
                onClick={(e) => {
                  e.stopPropagation()
                  handleDecrease()
                }}
                disabled={quantity <= 1}
                className='quantity-btn'>
                −
              </Button>
              <span className='quantity-display'>{quantity}</span>
              <Button
                variant='outline-secondary'
                size='sm'
                onClick={(e) => {
                  e.stopPropagation()
                  handleIncrease()
                }}
                className='quantity-btn'>
                +
              </Button>
            </div>
          </div>

          <div className='price-section text-end'>
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
              className='remove-btn mt-2'>
              Remove
            </Button>
          </div>
        </Stack>
      </Card.Body>
    </Card>
  )
}
