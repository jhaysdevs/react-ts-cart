import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart()
  const navigate = useNavigate()
  const quantity = getItemQuantity(id)

  const handleProductClick = () => {
    navigate(`/product/${id}`)
  }

  return (
    <Card className='h-100 d-flex flex-column'>
      <Card.Img
        variant='top'
        src={imgUrl}
        style={{
          objectFit: 'cover',
          cursor: 'pointer',
          height: '200px',
          width: '100%',
        }}
        onClick={handleProductClick}
        alt={name}
      />
      <Card.Body className='d-flex flex-column flex-grow-1 p-3'>
        <Card.Title
          className='h6 mb-2 text-truncate'
          style={{
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '600',
            lineHeight: '1.3',
          }}
          onClick={handleProductClick}
          title={name}>
          {name}
        </Card.Title>

        <Card.Text
          className='mb-3 text-primary fw-bold'
          style={{
            cursor: 'pointer',
            fontSize: '1.1rem',
          }}
          onClick={handleProductClick}>
          {formatCurrency(price)}
        </Card.Text>

        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button className='w-100' size='sm' onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className='d-flex align-items-center justify-content-between flex-column'
              style={{ gap: '1rem' }}>
              <div
                className='d-flex align-items-center justify-content-center'
                style={{ gap: '1rem' }}>
                <Button size='sm' onClick={() => decreaseCartQuantity(id)}>
                  -
                </Button>
                <span className='fs-6 text-center'>
                  <strong>{quantity}</strong> in cart
                </span>
                <Button size='sm' onClick={() => increaseCartQuantity(id)}>
                  +
                </Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                variant='danger'
                size='sm'
                className='w-100'>
                Remove from Cart
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
