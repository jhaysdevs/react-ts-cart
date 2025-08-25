import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

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
  const quantity = getItemQuantity(id)

  return (
    <Card className='d-flex justify-content-end'>
      <Card.Img variant='top' src={imgUrl} width='100%' style={{ objectFit: 'cover' }} />
      <Card.Body className='d-flex flex-column justify-content-start'>
        <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
          {name}
        </Card.Title>{' '}
        {/* Display the item name */}
        <Card.Text>Price: {formatCurrency(price)}</Card.Text> {/* Display the item price */}
        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button className='w-100' onClick={() => increaseCartQuantity(id)}>
              + Add To Cart
            </Button>
          ) : (
            <div
              className='d-flex align-items-center justify-content-between flex-row'
              style={{ gap: '.5rem' }}>
              <div
                className='d-flex align-items-center justify-content-between'
                style={{ gap: '.5rem' }}>
                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                <span className='fs-3 text-center' style={{ minWidth: '120px' }}>
                  {quantity} in cart
                </span>
                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              </div>
              <div
                className='d-flex align-items-center justify-content-center'
                style={{ gap: '.5rem' }}>
                <Button
                  onClick={() => removeFromCart(id)}
                  variant='danger'
                  size='md'
                  style={{ height: '100%' }}>
                  Remove
                </Button>
              </div>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
