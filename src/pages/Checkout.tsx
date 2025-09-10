import { useState, useEffect } from 'react'
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Form, 
  Button, 
  Alert, 
  Spinner,
  Badge
} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'
import { validateCheckoutForm, formatCardNumber, formatExpiryDate, formatPhoneNumber } from '../utilities/validation'
import { CheckoutFormData, CheckoutFormErrors, OrderSummary, CheckoutStep } from '../types/checkout'
import '../styles/pages/Checkout.scss'

export function Checkout() {
  const navigate = useNavigate()
  const { cartItems, cartQuantity } = useShoppingCart()
  
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    saveInfo: false,
    newsletter: false,
    giftWrap: false,
    specialInstructions: ''
  })

  const [errors, setErrors] = useState<CheckoutFormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [orderSummary, setOrderSummary] = useState<OrderSummary | null>(null)

  // Redirect if cart is empty
  useEffect(() => {
    if (cartQuantity === 0) {
      navigate('/cart')
    }
  }, [cartQuantity, navigate])

  // Calculate order summary
  useEffect(() => {
    if (cartItems.length > 0) {
      const subtotal = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      const tax = subtotal * 0.08 // 8% tax
      const shipping = subtotal > 50 ? 0 : 9.99 // Free shipping over $50
      const giftWrap = formData.giftWrap ? 5.99 : 0
      const total = subtotal + tax + shipping + giftWrap

      setOrderSummary({
        subtotal,
        tax,
        shipping,
        giftWrap,
        total,
        itemCount: cartQuantity
      })
    }
  }, [cartItems, cartQuantity, formData.giftWrap])

  const steps: CheckoutStep[] = [
    { id: 'shipping', title: 'Shipping', description: 'Delivery information', completed: currentStep > 1, active: currentStep === 1 },
    { id: 'payment', title: 'Payment', description: 'Payment details', completed: currentStep > 2, active: currentStep === 2 },
    { id: 'review', title: 'Review', description: 'Confirm order', completed: currentStep > 3, active: currentStep === 3 }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    let formattedValue = value

    // Format specific fields
    if (name === 'cardNumber') {
      formattedValue = formatCardNumber(value)
    } else if (name === 'expiryDate') {
      formattedValue = formatExpiryDate(value)
    } else if (name === 'phone') {
      formattedValue = formatPhoneNumber(value)
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : formattedValue
    }))

    // Clear error when user starts typing
    if (errors[name as keyof CheckoutFormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const validateStep = (step: number): boolean => {
    const stepErrors: CheckoutFormErrors = {}

    if (step === 1) {
      // Validate shipping information
      if (!formData.firstName.trim()) stepErrors.firstName = 'First name is required'
      if (!formData.lastName.trim()) stepErrors.lastName = 'Last name is required'
      if (!formData.email.trim()) stepErrors.email = 'Email is required'
      if (!formData.phone.trim()) stepErrors.phone = 'Phone is required'
      if (!formData.address.trim()) stepErrors.address = 'Address is required'
      if (!formData.city.trim()) stepErrors.city = 'City is required'
      if (!formData.state.trim()) stepErrors.state = 'State is required'
      if (!formData.zipCode.trim()) stepErrors.zipCode = 'ZIP code is required'
      if (!formData.country.trim()) stepErrors.country = 'Country is required'
    } else if (step === 2) {
      // Validate payment information
      if (!formData.cardNumber.trim()) stepErrors.cardNumber = 'Card number is required'
      if (!formData.expiryDate.trim()) stepErrors.expiryDate = 'Expiry date is required'
      if (!formData.cvv.trim()) stepErrors.cvv = 'CVV is required'
      if (!formData.cardholderName.trim()) stepErrors.cardholderName = 'Cardholder name is required'
    }

    setErrors(stepErrors)
    return Object.keys(stepErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const allErrors = validateCheckoutForm(formData)
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors)
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate success/failure (90% success rate)
      const isSuccess = Math.random() > 0.1
      
      if (isSuccess) {
        // Clear cart and redirect to success page
        navigate('/checkout/success', { 
          state: { 
            orderNumber: `ORD-${Date.now()}`,
            orderSummary 
          } 
        })
      } else {
        setErrors({ general: 'Payment processing failed. Please try again.' })
      }
    } catch (error) {
      setErrors({ general: 'An error occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (cartQuantity === 0) {
    return null // Will redirect to cart
  }

  return (
    <div className='checkout-page'>
      <Container className='py-4'>
        {/* Header */}
        <div className='checkout-header text-center mb-4'>
          <h1 className='checkout-title'>Checkout</h1>
          <p className='checkout-subtitle'>Complete your purchase</p>
        </div>

        {/* Progress Steps */}
        <Card className='mb-4'>
          <Card.Body>
            <div className='checkout-steps'>
              {steps.map((step, index) => (
                <div key={step.id} className={`step ${step.active ? 'active' : ''} ${step.completed ? 'completed' : ''}`}>
                  <div className='step-number'>
                    {step.completed ? '✓' : index + 1}
                  </div>
                  <div className='step-content'>
                    <div className='step-title'>{step.title}</div>
                    <div className='step-description'>{step.description}</div>
                  </div>
                  {index < steps.length - 1 && <div className='step-connector' />}
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>

        <Row>
          {/* Checkout Form */}
          <Col lg={8}>
            <Form onSubmit={handleSubmit}>
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <Card>
                  <Card.Header>
                    <h3>Shipping Information</h3>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>First Name *</Form.Label>
                          <Form.Control
                            type='text'
                            name='firstName'
                            value={formData.firstName}
                            onChange={handleInputChange}
                            isInvalid={!!errors.firstName}
                            placeholder='Enter your first name'
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.firstName}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>Last Name *</Form.Label>
                          <Form.Control
                            type='text'
                            name='lastName'
                            value={formData.lastName}
                            onChange={handleInputChange}
                            isInvalid={!!errors.lastName}
                            placeholder='Enter your last name'
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.lastName}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>Email Address *</Form.Label>
                          <Form.Control
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            isInvalid={!!errors.email}
                            placeholder='Enter your email'
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>Phone Number *</Form.Label>
                          <Form.Control
                            type='tel'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            isInvalid={!!errors.phone}
                            placeholder='(555) 123-4567'
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.phone}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                      <Form.Label>Address *</Form.Label>
                      <Form.Control
                        type='text'
                        name='address'
                        value={formData.address}
                        onChange={handleInputChange}
                        isInvalid={!!errors.address}
                        placeholder='Enter your street address'
                      />
                      <Form.Control.Feedback type='invalid'>
                        {errors.address}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Row>
                      <Col md={4}>
                        <Form.Group className='mb-3'>
                          <Form.Label>City *</Form.Label>
                          <Form.Control
                            type='text'
                            name='city'
                            value={formData.city}
                            onChange={handleInputChange}
                            isInvalid={!!errors.city}
                            placeholder='Enter city'
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.city}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className='mb-3'>
                          <Form.Label>State *</Form.Label>
                          <Form.Control
                            type='text'
                            name='state'
                            value={formData.state}
                            onChange={handleInputChange}
                            isInvalid={!!errors.state}
                            placeholder='Enter state'
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.state}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group className='mb-3'>
                          <Form.Label>ZIP Code *</Form.Label>
                          <Form.Control
                            type='text'
                            name='zipCode'
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            isInvalid={!!errors.zipCode}
                            placeholder='12345'
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.zipCode}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                      <Form.Label>Country *</Form.Label>
                      <Form.Select
                        name='country'
                        value={formData.country}
                        onChange={handleInputChange}
                        isInvalid={!!errors.country}
                      >
                        <option value='United States'>United States</option>
                        <option value='Canada'>Canada</option>
                        <option value='United Kingdom'>United Kingdom</option>
                        <option value='Australia'>Australia</option>
                      </Form.Select>
                      <Form.Control.Feedback type='invalid'>
                        {errors.country}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Check
                        type='checkbox'
                        name='saveInfo'
                        checked={formData.saveInfo}
                        onChange={handleInputChange}
                        label='Save this information for next time'
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>
              )}

              {/* Step 2: Payment Information */}
              {currentStep === 2 && (
                <Card>
                  <Card.Header>
                    <h3>Payment Information</h3>
                  </Card.Header>
                  <Card.Body>
                    <Form.Group className='mb-3'>
                      <Form.Label>Cardholder Name *</Form.Label>
                      <Form.Control
                        type='text'
                        name='cardholderName'
                        value={formData.cardholderName}
                        onChange={handleInputChange}
                        isInvalid={!!errors.cardholderName}
                        placeholder='Name on card'
                      />
                      <Form.Control.Feedback type='invalid'>
                        {errors.cardholderName}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                      <Form.Label>Card Number *</Form.Label>
                      <Form.Control
                        type='text'
                        name='cardNumber'
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        isInvalid={!!errors.cardNumber}
                        placeholder='1234 5678 9012 3456'
                        maxLength={19}
                      />
                      <Form.Control.Feedback type='invalid'>
                        {errors.cardNumber}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Row>
                      <Col md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>Expiry Date *</Form.Label>
                          <Form.Control
                            type='text'
                            name='expiryDate'
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            isInvalid={!!errors.expiryDate}
                            placeholder='MM/YY'
                            maxLength={5}
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.expiryDate}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className='mb-3'>
                          <Form.Label>CVV *</Form.Label>
                          <Form.Control
                            type='text'
                            name='cvv'
                            value={formData.cvv}
                            onChange={handleInputChange}
                            isInvalid={!!errors.cvv}
                            placeholder='123'
                            maxLength={4}
                          />
                          <Form.Control.Feedback type='invalid'>
                            {errors.cvv}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Alert variant='info' className='mb-3'>
                      <small>
                        <strong>Security:</strong> Your payment information is encrypted and secure. 
                        We never store your card details.
                      </small>
                    </Alert>
                  </Card.Body>
                </Card>
              )}

              {/* Step 3: Review & Confirm */}
              {currentStep === 3 && (
                <Card>
                  <Card.Header>
                    <h3>Review Your Order</h3>
                  </Card.Header>
                  <Card.Body>
                    <div className='order-review'>
                      <h5>Shipping Address</h5>
                      <p className='mb-3'>
                        {formData.firstName} {formData.lastName}<br />
                        {formData.address}<br />
                        {formData.city}, {formData.state} {formData.zipCode}<br />
                        {formData.country}
                      </p>

                      <h5>Payment Method</h5>
                      <p className='mb-3'>
                        **** **** **** {formData.cardNumber.slice(-4)}<br />
                        Expires: {formData.expiryDate}
                      </p>

                      <h5>Order Items</h5>
                      <div className='order-items'>
                        {cartItems.map((item) => (
                          <div key={item.product.id} className='order-item'>
                            <div className='item-info'>
                              <span className='item-name'>{item.product.name}</span>
                              <span className='item-quantity'>Qty: {item.quantity}</span>
                            </div>
                            <span className='item-price'>
                              {formatCurrency(item.product.price * item.quantity)}
                            </span>
                          </div>
                        ))}
                      </div>

                      <Form.Group className='mb-3'>
                        <Form.Label>Special Instructions (Optional)</Form.Label>
                        <Form.Control
                          as='textarea'
                          name='specialInstructions'
                          value={formData.specialInstructions}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder='Any special delivery instructions...'
                        />
                      </Form.Group>

                      <Form.Group className='mb-3'>
                        <Form.Check
                          type='checkbox'
                          name='newsletter'
                          checked={formData.newsletter}
                          onChange={handleInputChange}
                          label='Subscribe to our newsletter for updates and offers'
                        />
                      </Form.Group>
                    </div>
                  </Card.Body>
                </Card>
              )}

              {/* Error Display */}
              {errors.general && (
                <Alert variant='danger' className='mt-3'>
                  {errors.general}
                </Alert>
              )}

              {/* Navigation Buttons */}
              <div className='checkout-navigation mt-4'>
                <div className='d-flex justify-content-between'>
                  <Button
                    variant='outline-secondary'
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                  >
                    Previous
                  </Button>
                  
                  {currentStep < 3 ? (
                    <Button variant='primary' onClick={handleNext}>
                      Next
                    </Button>
                  ) : (
                    <Button
                      type='submit'
                      variant='success'
                      disabled={isSubmitting}
                      className='checkout-submit-btn'
                    >
                      {isSubmitting ? (
                        <>
                          <Spinner animation='border' size='sm' className='me-2' />
                          Processing...
                        </>
                      ) : (
                        `Complete Order - ${orderSummary ? formatCurrency(orderSummary.total) : ''}`
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </Form>
          </Col>

          {/* Order Summary Sidebar */}
          <Col lg={4}>
            <Card className='order-summary-card'>
              <Card.Header>
                <h4>Order Summary</h4>
              </Card.Header>
              <Card.Body>
                {orderSummary && (
                  <>
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
                        {orderSummary.shipping === 0 ? (
                          <Badge bg='success'>FREE</Badge>
                        ) : (
                          formatCurrency(orderSummary.shipping)
                        )}
                      </span>
                    </div>
                    {formData.giftWrap && (
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

                    {orderSummary.subtotal > 50 && (
                      <Alert variant='success' className='mt-3'>
                        <small>🎉 You qualify for free shipping!</small>
                      </Alert>
                    )}
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
