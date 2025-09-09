import { useEffect } from 'react'

import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import '../styles/pages/About.scss'

export function About() {
  const navigate = useNavigate()
  const currentYear = new Date().getFullYear()
  const foundingYear = currentYear - 3

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const values = [
    {
      icon: '⭐',
      title: 'Quality First',
      description:
        'We never compromise on quality, ensuring every product meets our high standards.',
    },
    {
      icon: '😊',
      title: 'Customer Satisfaction',
      description: 'Your happiness is our priority. We go above and beyond to exceed expectations.',
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We continuously evolve and improve to bring you the latest and greatest.',
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices and sustainable business operations.',
    },
    {
      icon: '🤝',
      title: 'Community Impact',
      description: 'We believe in giving back and making a positive difference in our communities.',
    },
  ]

  const stats = [
    { number: '10K+', label: 'Happy Customers', icon: '👥' },
    { number: '50K+', label: 'Products Sold', icon: '📦' },
    { number: '99%', label: 'Satisfaction Rate', icon: '⭐' },
    { number: '24/7', label: 'Customer Support', icon: '🛟' },
  ]

  return (
    <div className='about-page'>
      {/* Hero Section - Full Width Background */}
      <div className='about-hero'>
        <div className='hero-content'>
          <Container>
            <Row className='justify-content-center text-center'>
              <Col lg={8}>
                <div className='about-icon mb-3'>
                  🏪
                </div>
                <h1 className='fw-bold mb-3'>About Us</h1>
                <p className='lead mb-0'>
                  Discover our story, mission, and the values that drive us to deliver exceptional
                  shopping experiences.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Container className='my-4'>
        {/* Company Story Section */}
        <Row className='my-4'>
          <Col lg={10} className='mx-auto'>
            <Card className='fade-in mb-4 shadow-sm border-0 story-card'>
              <Card.Body className='p-4'>
                <div className='text-center'>
                  <div className='story-icon mb-3'>
                    📖
                  </div>
                  <h2 className='mb-3'>Our Story</h2>
                  <Badge bg='primary' className='mb-3'>
                    Founded in {foundingYear}
                  </Badge>
                </div>
                <Row className='align-items-center'>
                  <Col lg={6}>
                    <p className='h5 mb-4 text-primary'>
                      We set out with a simple mission: to provide our customers with exceptional
                      products and an unmatched shopping experience.
                    </p>
                    <p className='text-muted mb-0'>
                      What started as a small online store has grown into a trusted destination for
                      quality products. Our journey has been driven by our commitment to customer
                      satisfaction and our passion for delivering excellence.
                    </p>
                  </Col>
                  <Col lg={6}>
                    <div className='story-visual text-center mt-4'>
                      <div className='timeline-item mb-3'>
                        <div
                          className='timeline-icon bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center'>
                          {foundingYear}
                        </div>
                        <h6 className='mt-2 mb-1'>Founded</h6>
                        <small className='text-muted'>Started our journey</small>
                      </div>
                      <div
                        className='timeline-line bg-primary'></div>
                      <div className='timeline-item mt-3'>
                        <div
                          className='timeline-icon bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center'>
                          {currentYear}
                        </div>
                        <h6 className='mt-2 mb-1'>Today</h6>
                        <small className='text-muted'>Trusted by thousands</small>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className='mb-5'>
          <Col lg={10} className='mx-auto'>
            <div className='stats-section text-center mb-5'>
              <h3 className='mb-4'>Our Impact</h3>
              <Row className='g-4'>
                {stats.map((stat, index) => (
                  <Col md={3} key={index}>
                    <div className='stat-card p-4 rounded-3 h-100'>
                      <div className='stat-icon mb-3'>
                        {stat.icon}
                      </div>
                      <h4 className='h2 fw-bold text-primary mb-2'>{stat.number}</h4>
                      <p className='text-muted mb-0'>{stat.label}</p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>

        {/* Mission and Values */}
        <Row className='mb-5'>
          <Col lg={10} className='mx-auto'>
            <Row className='g-4'>
              <Col lg={6}>
                <Card className='h-100 border-0 shadow-sm mission-card'>
                  <Card.Body className='p-4'>
                    <div className='d-flex align-items-center mb-3'>
                      <div className='me-3 mission-icon'>
                        🎯
                      </div>
                      <h3 className='mb-0 h4'>Our Mission</h3>
                    </div>
                    <p className='text-muted mb-3'>
                      To provide our customers with the highest quality products while ensuring a
                      seamless and enjoyable shopping experience. We believe in building lasting
                      relationships with our customers through transparency, reliability, and
                      exceptional service.
                    </p>
                    <div className='mission-details'>
                      <div className='mb-3'>
                        <h6 className='text-primary mb-2'>🚀 Modern Technology Stack</h6>
                        <p className='text-muted small mb-0'>
                          Built with cutting-edge web technologies including React, TypeScript, and
                          modern CSS frameworks to deliver lightning-fast performance and responsive
                          design across all devices.
                        </p>
                      </div>
                      <div className='mb-3'>
                        <h6 className='text-success mb-2'>🔒 Enterprise-Grade Security</h6>
                        <p className='text-muted small mb-0'>
                          Implementing the strictest security standards with end-to-end encryption,
                          secure payment processing, and comprehensive data protection protocols to
                          safeguard your personal information.
                        </p>
                      </div>
                      <div>
                        <h6 className='text-info mb-2'>✨ Intuitive User Experience</h6>
                        <p className='text-muted small mb-0'>
                          Designed with user-centered principles featuring smart search,
                          personalized recommendations, and streamlined checkout processes that make
                          shopping effortless and enjoyable.
                        </p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className='h-100 border-0 shadow-sm values-card'>
                  <Card.Body className='p-4'>
                    <div className='d-flex align-items-center mb-3'>
                      <div className='me-3 values-icon'>
                        💎
                      </div>
                      <h3 className='mb-0 h4'>Our Values</h3>
                    </div>
                    <div className='values-grid'>
                      {values.map((value, index) => (
                        <div key={index} className='value-item mb-3'>
                          <div className='d-flex align-items-start'>
                            <span className='me-2 value-item-icon'>
                              {value.icon}
                            </span>
                            <div>
                              <h6 className='mb-1'>{value.title}</h6>
                              <small className='text-muted'>{value.description}</small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Commitment Section */}
        <Row className='mb-5'>
          <Col lg={8} className='mx-auto'>
            <Card className='border-0 shadow-sm commitment-card'>
              <Card.Body className='p-5 text-center'>
                <div className='commitment-icon mb-4'>
                  🤝
                </div>
                <h3 className='mb-4'>Our Commitment to You</h3>
                <p className='text-muted mb-4'>
                  We are dedicated to providing you with the best shopping experience possible. From
                  our carefully curated product selection to our responsive customer service, every
                  aspect of our business is designed with you in mind. We value your trust and are
                  committed to maintaining the highest standards in everything we do.
                </p>
                <div className='commitment-features row g-3'>
                  <div className='col-md-4'>
                    <div className='feature-item p-3 bg-light rounded h-100'>
                      <div className='text-primary mb-2 feature-icon'>
                        🛡️
                      </div>
                      <h6 className='mb-1'>Secure Shopping</h6>
                      <small className='text-muted'>Your data is protected</small>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='feature-item p-3 bg-light rounded h-100'>
                      <div className='text-success mb-2 feature-icon'>
                        🚚
                      </div>
                      <h6 className='mb-1'>Fast Delivery</h6>
                      <small className='text-muted'>Quick and reliable shipping</small>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='feature-item p-3 bg-light rounded h-100'>
                      <div className='text-info mb-2 feature-icon'>
                        💬
                      </div>
                      <h6 className='mb-1'>24/7 Support</h6>
                      <small className='text-muted'>Always here to help</small>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Call to Action Section */}
        <Row>
          <Col lg={8} className='mx-auto'>
            <Card className='bg-primary text-white border-0 shadow cta-card'>
              <Card.Body className='p-5 text-center'>
                <div className='cta-icon mb-4 d-flex justify-content-center'>
                  <div
                    className='cart-icon-wrapper d-flex align-items-center justify-content-center'
                    onClick={() => navigate('/cart')}>
                    🛒
                  </div>
                </div>
                <h3 className='mb-3'>Ready to Shop?</h3>
                <p className='mb-4 opacity-75'>
                  Explore our carefully curated collection of products and discover why our
                  customers love shopping with us.
                </p>
                <Button
                  variant='light'
                  size='lg'
                  className='px-5 py-3 cta-button'
                  onClick={() => navigate('/store')}>
                  Start Shopping Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
