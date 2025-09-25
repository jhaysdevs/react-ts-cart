import { useEffect, useState } from 'react'
import { Container, Card, Button, Alert, Row, Col } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'

import { useShoppingCart } from '../context/ShoppingCartContext'
import { OrderSummary } from '../types/checkout'
import { formatCurrency } from '../utilities/formatCurrency'

export function CheckoutSuccess() {
  const location = useLocation()
  const navigate = useNavigate()
  const { cartItems } = useShoppingCart()

  const [orderNumber, setOrderNumber] = useState<string>('')
  const [orderSummary, setOrderSummary] = useState<OrderSummary | null>(null)

  useEffect(() => {
    // Get order data from navigation state
    if (location.state) {
      setOrderNumber(location.state.orderNumber || '')
      setOrderSummary(location.state.orderSummary || null)
    } else {
      // If no state, redirect to home
      navigate('/')
    }
  }, [location.state, navigate])

  const handleContinueShopping = () => {
    navigate('/store')
  }

  const handleViewOrder = () => {
    // In a real app, this would navigate to an order details page
    alert('Order details page would open here')
  }

  if (!orderNumber) {
    return null // Will redirect to home
  }

  return (
    <div className='checkout-success-page'>
      <Container className='py-5'>
        <div className='text-center mb-5'>
          <div className='success-icon mb-4'>
            <div className='checkmark'>✓</div>
          </div>
          <h1 className='success-title'>Order Confirmed!</h1>
          <p className='success-subtitle'>
            Thank you for your purchase. Your order has been successfully placed.
          </p>
          <Alert variant='success' className='d-inline-block'>
            <strong>Order Number:</strong> {orderNumber}
          </Alert>
        </div>

        <Row className='justify-content-center'>
          <Col lg={8}>
            <Card>
              <Card.Header>
                <h4>Order Details</h4>
              </Card.Header>
              <Card.Body>
                {orderSummary && (
                  <>
                    <div className='order-summary'>
                      <div className='summary-line'>
                        <span>Items ({orderSummary.itemCount})</span>
                        <span>{formatCurrency(orderSummary.subtotal)}</span>
                      </div>
                      <div className='summary-line'>
                        <span>Tax</span>
                        <span>{formatCurrency(orderSummary.tax)}</span>
                      </div>
                      <div className='summary-line'>
                        <span>Shipping</span>
                        <span>
                          {orderSummary.shipping === 0
                            ? 'FREE'
                            : formatCurrency(orderSummary.shipping)}
                        </span>
                      </div>
                      {orderSummary.giftWrap > 0 && (
                        <div className='summary-line'>
                          <span>Gift Wrap</span>
                          <span>{formatCurrency(orderSummary.giftWrap)}</span>
                        </div>
                      )}
                      <hr />
                      <div className='summary-line total'>
                        <strong>Total</strong>
                        <strong>{formatCurrency(orderSummary.total)}</strong>
                      </div>
                    </div>
                  </>
                )}

                <div className='order-items mt-4'>
                  <h5>Items Ordered</h5>
                  {cartItems.map((item) => (
                    <div key={item.product.id} className='order-item'>
                      <div className='item-image'>
                        {item.product.image ? (
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className='img-fluid'
                          />
                        ) : (
                          <div
                            style={{
                              width: '100%',
                              height: '80px',
                              backgroundColor: '#f8f9fa',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#6c757d',
                              fontSize: '1.5rem',
                            }}>
                            📦
                          </div>
                        )}
                      </div>
                      <div className='item-details'>
                        <h6>{item.product.name}</h6>
                        <p className='text-muted mb-1'>Quantity: {item.quantity}</p>
                        <p className='text-muted'>
                          Price: {formatCurrency(item.product.price)} each
                        </p>
                      </div>
                      <div className='item-total'>
                        {formatCurrency(item.product.price * item.quantity)}
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>

            <div className='success-actions text-center mt-4'>
              <Button variant='primary' size='lg' onClick={handleContinueShopping} className='me-3'>
                Continue Shopping
              </Button>
              <Button variant='outline-secondary' size='lg' onClick={handleViewOrder}>
                View Order Details
              </Button>
            </div>

            <Card className='mt-4'>
              <Card.Body>
                <h5>What's Next?</h5>
                <ul className='list-unstyled'>
                  <li className='mb-2'>📧 You'll receive an email confirmation shortly</li>
                  <li className='mb-2'>📦 Your order will be processed within 1-2 business days</li>
                  <li className='mb-2'>🚚 You'll get tracking information once your order ships</li>
                  <li className='mb-0'>📞 Contact us if you have any questions</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
