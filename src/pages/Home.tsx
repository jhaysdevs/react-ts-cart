import { useEffect } from 'react'

import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  return (
    <div className='home-page'>
      {/* Hero Section - Full Width Background */}
      <div className='hero-section'>
        <div className='hero-content'>
          <Container className='home-hero-container'>
            <Row className='justify-content-center text-center'>
              <Col lg={10}>
                <div className='hero-badge mb-3'>
                  <Badge bg='primary' className='px-3 py-2'>
                    🎉 New Arrivals Daily
                  </Badge>
                </div>
                <h1 className='hero-title mb-4'>
                  Discover Amazing Products
                  <br />
                  <span className='text-gradient'>At Unbeatable Prices</span>
                </h1>
                <p className='hero-subtitle mb-5'>
                  Shop from our curated collection of premium products with fast shipping, secure
                  payments, and exceptional customer service. Your satisfaction is our priority.
                </p>
                <div className='hero-buttons'>
                  <Link to='/store'>
                    <Button variant='primary' size='lg' className='me-3 hero-btn'>
                      🛍️ Start Shopping
                    </Button>
                  </Link>
                  <Link to='/about'>
                    <Button variant='outline-light' size='lg' className='hero-btn mt-4 mt-md-0'>
                      Learn More
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      {/* Features Section */}
      <Container className='home-features-container py-5'>
        <Row className='text-center mb-5'>
          <Col>
            <h2 className='section-title mb-3'>Why Choose Us?</h2>
            <p className='section-subtitle'>
              We're committed to providing the best shopping experience possible
            </p>
          </Col>
        </Row>

        <Row className='g-4 mb-5'>
          <Col md={4}>
            <Card className='feature-card h-100 border-0'>
              <Card.Body className='text-center p-4'>
                <div className='feature-icon mb-3'>🏆</div>
                <h3 className='h5 mb-3'>Premium Quality</h3>
                <p className='text-muted'>
                  Every product is carefully selected and tested to meet our high quality standards.
                  We partner with trusted brands to bring you the best.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='feature-card h-100 border-0'>
              <Card.Body className='text-center p-4'>
                <div className='feature-icon mb-3'>🚚</div>
                <h3 className='h5 mb-3'>Lightning Fast Shipping</h3>
                <p className='text-muted'>
                  Get your orders delivered quickly with our efficient shipping network. Most orders
                  arrive within 2-3 business days.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='feature-card h-100 border-0'>
              <Card.Body className='text-center p-4'>
                <div className='feature-icon mb-3'>🔒</div>
                <h3 className='h5 mb-3'>Secure & Safe</h3>
                <p className='text-muted'>
                  Your data and payments are protected with bank-level security. Shop with
                  confidence knowing your information is safe.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className='g-4 mb-5'>
          <Col md={3}>
            <Card className='stat-card border-0 text-center'>
              <Card.Body className='p-4'>
                <div className='stat-number'>10K+</div>
                <div className='stat-label'>Happy Customers</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className='stat-card border-0 text-center'>
              <Card.Body className='p-4'>
                <div className='stat-number'>500+</div>
                <div className='stat-label'>Products</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className='stat-card border-0 text-center'>
              <Card.Body className='p-4'>
                <div className='stat-number'>24/7</div>
                <div className='stat-label'>Support</div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className='stat-card border-0 text-center'>
              <Card.Body className='p-4'>
                <div className='stat-number'>99%</div>
                <div className='stat-label'>Satisfaction</div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Quick Links Section */}
        <Row className='mb-5'>
          <Col>
            <Card
              className='quick-links-card border-0'
              role='region'
              aria-labelledby='quick-links-heading'>
              <Card.Body className='p-5 text-center'>
                <h2 id='quick-links-heading' className='h3 mb-4'>
                  Explore Our Store
                </h2>
                <p className='mb-4' style={{ opacity: 0.95 }}>
                  Discover everything we have to offer and learn more about our company
                </p>
                <Row
                  className='g-4 justify-content-center'
                  role='group'
                  aria-label='Quick navigation links'>
                  <Col md={4} sm={6}>
                    <Link to='/store' className='text-decoration-none'>
                      <Button
                        variant='outline-primary'
                        className='w-100 quick-link-btn'
                        aria-label='Browse our product catalog'
                        data-emoji='🛒'
                        style={{ '--button-index': 0 } as React.CSSProperties}>
                        Browse Products
                      </Button>
                    </Link>
                  </Col>
                  <Col md={4} sm={6}>
                    <Link to='/about' className='text-decoration-none'>
                      <Button
                        variant='outline-success'
                        className='w-100 quick-link-btn'
                        aria-label='Learn about our company story'
                        data-emoji='📖'
                        style={{ '--button-index': 1 } as React.CSSProperties}>
                        Our Story
                      </Button>
                    </Link>
                  </Col>
                  <Col md={4} sm={6}>
                    <Link to='/privacy' className='text-decoration-none'>
                      <Button
                        variant='outline-info'
                        className='w-100 quick-link-btn'
                        aria-label='Read our privacy policy'
                        data-emoji='🔒'
                        style={{ '--button-index': 2 } as React.CSSProperties}>
                        Privacy Policy
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Newsletter Section */}
        <Row className='justify-content-center'>
          <Col lg={8}>
            <Card className='newsletter-card border-0'>
              <Card.Body className='p-5 text-center'>
                <h2 className='h3 mb-3'>Stay Updated</h2>
                <p className='text-muted mb-4'>
                  Get the latest updates on new products, exclusive deals, and special offers
                </p>
                <div className='newsletter-form'>
                  <div className='input-group mb-3'>
                    <input
                      type='email'
                      className='form-control'
                      placeholder='Enter your email address'
                    />
                    <Button variant='primary' className='newsletter-btn'>
                      Subscribe
                    </Button>
                  </div>
                  <small className='text-muted'>
                    We respect your privacy. Unsubscribe at any time.
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
