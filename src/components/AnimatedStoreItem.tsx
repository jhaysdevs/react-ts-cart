import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useShoppingCart } from '../context/ShoppingCartContext'
import { Product } from '../hooks/useProducts'
import '../styles/pages/Store.scss'
import { formatCurrency } from '../utilities/formatCurrency'

type AnimatedStoreItemProps = {
  product: Product
  index?: number
  gridPosition?: { row: number; col: number }
}

export function AnimatedStoreItem({ product, index = 0, gridPosition }: AnimatedStoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart()
  const navigate = useNavigate()
  const quantity = getItemQuantity(product.id)
  const [isUpdating, setIsUpdating] = useState(false)

  // Convert product ID to numeric for navigation (keeping compatibility with existing routes)
  const numericId = parseInt(product.id.replace(/-/g, '').substring(0, 8), 16)

  const handleProductClick = () => {
    navigate(`/product/${numericId}`)
  }

  const handleAddToCart = () => {
    setIsUpdating(true)
    increaseCartQuantity(product)
    setTimeout(() => setIsUpdating(false), 25)
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

  const handleRemove = () => {
    setIsUpdating(true)
    removeFromCart(product.id)
    setTimeout(() => setIsUpdating(false), 25)
  }

  // Calculate animation delay based on grid position
  const getAnimationDelay = () => {
    if (gridPosition) {
      // Animate from left to right, with slight row delay
      return gridPosition.row * 0.05 + gridPosition.col * 0.02
    }
    // Fallback to index-based delay
    return index * 0.01
  }

  return (
    <Card
      className={`h-100 d-flex flex-column store-item-card ${isUpdating ? 'updating' : ''}`}
      style={{
        animationDelay: `${getAnimationDelay()}s`,
        transition: 'all 0.15s ease',
      }}>
      <div
        className='product-image-container'
        style={{
          height: '200px',
          width: '100%',
          overflow: 'hidden',
          cursor: 'pointer',
          position: 'relative',
        }}
        onClick={handleProductClick}>
        <Card.Img
          variant='top'
          src={product.image}
          style={{
            objectFit: 'cover',
            height: '100%',
            width: '100%',
            transition: 'transform 0.3s ease',
          }}
          alt={product.name}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
        />
        <div className='image-overlay'>
          <div className='overlay-content'>
            <span>View Details</span>
          </div>
        </div>

        {/* Cart indicator badge */}
        {quantity > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              backgroundColor: '#28a745',
              color: 'white',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '12px',
              fontWeight: 'bold',
              zIndex: 2,
            }}
            title={`${quantity} in cart`}>
            {quantity}
          </div>
        )}
      </div>

      <Card.Body className='d-flex flex-column flex-grow-1 p-3'>
        <Card.Title
          className='h6 mb-2 text-truncate product-title'
          style={{
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            lineHeight: '1.3',
          }}
          onClick={handleProductClick}
          title={product.name}>
          {product.name}
        </Card.Title>

        <Card.Text
          className='mb-3 text-primary fw-bold product-price'
          style={{
            cursor: 'pointer',
            fontSize: '1.1rem',
          }}
          onClick={handleProductClick}>
          {formatCurrency(product.price)}
        </Card.Text>

        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button
              className='w-100 add-to-cart-btn'
              size='sm'
              onClick={handleAddToCart}
              variant='primary'>
              + Add To Cart
            </Button>
          ) : (
            <div
              className='d-flex align-items-center justify-content-between flex-column'
              style={{ gap: '1rem' }}>
              <div
                className='d-flex align-items-center justify-content-center quantity-controls'
                style={{ gap: '1rem' }}>
                <Button
                  size='sm'
                  onClick={handleDecrease}
                  className='quantity-btn'
                  variant='outline-primary'>
                  −
                </Button>
                <span className='fs-6 text-center quantity-display'>
                  <strong>{quantity}</strong> in cart
                </span>
                <Button
                  size='sm'
                  onClick={handleIncrease}
                  className='quantity-btn'
                  variant='outline-primary'>
                  +
                </Button>
              </div>
              <Button
                onClick={handleRemove}
                variant='danger'
                size='sm'
                className='w-100 remove-btn'>
                Remove from Cart
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
