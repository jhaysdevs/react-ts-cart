import { Alert, Button, Card, Col, Container, Row, Spinner } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

import { useProductsContext } from '../context/ProductsContext'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'

export function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { products, loading, error } = useProductsContext()
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart()

  // Convert numeric ID back to string format to find the product
  const productIdString = id ? parseInt(id).toString(16).padStart(8, '0') : ''
  const product = products.find((p) => p.id.replace(/-/g, '').substring(0, 8) === productIdString)

  const quantity = id ? getItemQuantity(parseInt(id)) : 0

  if (loading) {
    return (
      <Container
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '400px' }}>
        <div className='text-center'>
          <Spinner animation='border' role='status' />
          <div className='mt-3'>Loading product details...</div>
        </div>
      </Container>
    )
  }

  if (error) {
    return (
      <Container
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '400px' }}>
        <Alert variant='danger' className='text-center' style={{ maxWidth: '500px' }}>
          <Alert.Heading>Error Loading Product</Alert.Heading>
          <p>{error}</p>
        </Alert>
      </Container>
    )
  }

  if (!product) {
    return (
      <Container
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '400px' }}>
        <Alert variant='warning' className='text-center' style={{ maxWidth: '500px' }}>
          <Alert.Heading>Product Not Found</Alert.Heading>
          <p>The product you're looking for doesn't exist or has been removed.</p>
          <hr />
          <div className='d-flex justify-content-center gap-2'>
            <Button variant='outline-primary' onClick={() => navigate('/store')}>
              Back to Store
            </Button>
            <Button variant='primary' onClick={() => navigate('/')}>
              Go Home
            </Button>
          </div>
        </Alert>
      </Container>
    )
  }

  return (
    <Container className='py-4'>
      <Row>
        <Col md={6}>
          <Card className='h-100'>
            <Card.Img
              variant='top'
              src={product.image}
              style={{
                objectFit: 'cover',
                height: '400px',
                width: '100%',
              }}
            />
          </Card>
        </Col>
        <Col md={6}>
          <Card className='h-100'>
            <Card.Body className='d-flex flex-column'>
              <Card.Title className='h2 mb-3'>{product.name}</Card.Title>

              <div className='mb-3'>
                <h4 className='text-primary'>{formatCurrency(product.price)}</h4>
              </div>

              <div className='mb-3'>
                <h6>Description</h6>
                <p className='text-muted'>{product.description}</p>
              </div>

              <div className='mb-3'>
                <h6>Manufacturer</h6>
                <p className='text-muted'>{product.manufacturer}</p>
              </div>

              <div className='mb-4'>
                <h6>Category</h6>
                <span className='badge bg-secondary'>{product.product_category.name}</span>
              </div>

              <div className='mt-auto'>
                {quantity === 0 ? (
                  <Button
                    className='w-100'
                    size='lg'
                    onClick={() => increaseCartQuantity(parseInt(id!))}>
                    + Add To Cart
                  </Button>
                ) : (
                  <div
                    className='d-flex align-items-center justify-content-between flex-column'
                    style={{ gap: '1rem' }}>
                    <div
                      className='d-flex align-items-center justify-content-center'
                      style={{ gap: '1rem' }}>
                      <Button size='lg' onClick={() => decreaseCartQuantity(parseInt(id!))}>
                        -
                      </Button>
                      <span className='fs-4 text-center' style={{ minWidth: '120px' }}>
                        {quantity} in cart
                      </span>
                      <Button size='lg' onClick={() => increaseCartQuantity(parseInt(id!))}>
                        +
                      </Button>
                    </div>
                    <Button
                      onClick={() => removeFromCart(parseInt(id!))}
                      variant='danger'
                      size='lg'
                      className='w-100'>
                      Remove from Cart
                    </Button>
                  </div>
                )}
              </div>

              <div className='mt-3 d-flex gap-2'>
                <Button
                  variant='outline-secondary'
                  onClick={() => navigate('/store')}
                  className='flex-fill'>
                  Back to Store
                </Button>
                <Button
                  variant='outline-primary'
                  onClick={() => navigate('/')}
                  className='flex-fill'>
                  Go Home
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
