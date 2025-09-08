import { useEffect, useMemo } from 'react'

import { Button, Col, Container, Row, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { AnimatedCartItem } from '../components/AnimatedCartItem'
import { useShoppingCart } from '../context/ShoppingCartContext'
import '../styles/pages/Cart.scss'
import { formatCurrency } from '../utilities/formatCurrency'

export function Cart() {
  const { cartItems } = useShoppingCart()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  // Consolidate cart items by ID to get unique items with total quantities
  const consolidatedCartItems = useMemo(() => {
    return cartItems
      .filter((item) => item.product && item.product.id) // Filter out any malformed items
      .reduce(
        (acc, cartItem) => {
          const existingItem = acc.find((item) => item.product.id === cartItem.product.id)
          if (existingItem) {
            existingItem.quantity += cartItem.quantity
          } else {
            acc.push({ ...cartItem })
          }
          return acc
        },
        [] as typeof cartItems
      )
  }, [cartItems])

  // Calculate totals
  const totalItems = useMemo(() => {
    return cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity
    }, 0)
  }, [cartItems])

  // Calculate total price
  const total = useMemo(() => {
    return consolidatedCartItems.reduce((total, cartItem) => {
      return total + cartItem.product.price * cartItem.quantity
    }, 0)
  }, [consolidatedCartItems])

  // Display all consolidated cart items at once

  if (consolidatedCartItems.length === 0) {
    return (
      <Container className='py-5'>
        <Row className='justify-content-center'>
          <Col md={8} className='text-center'>
            <div className='cart-empty-animation'>
              <div className='empty-cart-icon mb-4'>🛒</div>
              <h2 className='mb-3'>Your cart is empty</h2>
              <p className='text-muted mb-4'>
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button
                variant='primary'
                size='lg'
                onClick={() => navigate('/store')}
                className='bounce-in'>
                Start Shopping
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    <Container className='py-4'>
      <Row>
        <Col>
          <div className='cart-header slide-in-down'>
            <h1 className='mb-4'>Shopping Cart</h1>
            {totalItems > 0 && (
              <p className='text-muted mb-4'>
                <strong>{totalItems}</strong> item{totalItems > 1 ? 's' : ''} in your cart
              </p>
            )}
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={8}>
          <div className='cart-items-container'>
            <Stack gap={3}>
              {consolidatedCartItems.map((item, index) => (
                <div
                  key={item.product.id}
                  className='cart-item-wrapper'
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}>
                  <AnimatedCartItem product={item.product} quantity={item.quantity} />
                </div>
              ))}
            </Stack>
          </div>
        </Col>

        <Col lg={4}>
          <div className='cart-summary slide-in-right'>
            <div className='card'>
              <div className='card-header'>
                <h5 className='mb-0'>Order Summary</h5>
              </div>
              <div className='card-body'>
                <div className='d-flex justify-content-between mb-2'>
                  <span>
                    Items (<strong>{totalItems}</strong>)
                  </span>
                  <span>{formatCurrency(total)}</span>
                </div>
                <div className='d-flex justify-content-between mb-2'>
                  <span>Shipping</span>
                  <span className='text-success'>Free</span>
                </div>
                <hr />
                <div className='d-flex justify-content-between mb-3'>
                  <strong>Total</strong>
                  <strong>{formatCurrency(total)}</strong>
                </div>
                <Button
                  variant='success'
                  size='lg'
                  className='w-100 mb-2'
                  onClick={() => navigate('/checkout')}>
                  Proceed to Checkout
                </Button>
                <Button
                  variant='outline-primary'
                  size='lg'
                  className='w-100'
                  onClick={() => navigate('/store')}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
