import { useEffect } from 'react'

import { Badge, Card, Col, Container, Row } from 'react-bootstrap'

export function Privacy() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const sections = [
    {
      id: 1,
      title: 'Information We Collect',
      icon: '📊',
      description: 'We collect information that you provide directly to us, including when you:',
      items: [
        'Create an account',
        'Make a purchase',
        'Sign up for our newsletter',
        'Contact our customer service',
      ],
      color: 'primary',
    },
    {
      id: 2,
      title: 'How We Use Your Information',
      icon: '🔧',
      description: 'We use the information we collect to:',
      items: [
        'Process your orders and payments',
        'Communicate with you about your orders',
        'Send you marketing communications (with your consent)',
        'Improve our website and services',
        'Prevent fraud and enhance security',
      ],
      color: 'success',
    },
    {
      id: 3,
      title: 'Information Sharing',
      icon: '🤝',
      description: 'We do not sell your personal information. We may share your information with:',
      items: [
        'Service providers who assist in our operations',
        'Payment processors to complete transactions',
        'Law enforcement when required by law',
      ],
      color: 'warning',
    },
    {
      id: 4,
      title: 'Your Rights',
      icon: '⚖️',
      description: 'You have the right to:',
      items: [
        'Access your personal information',
        'Correct inaccurate information',
        'Request deletion of your information',
        'Opt-out of marketing communications',
      ],
      color: 'info',
    },
    {
      id: 5,
      title: 'Contact Us',
      icon: '📧',
      description: 'If you have any questions about this Privacy Policy, please contact us at:',
      items: ['Email: privacy@example.com'],
      color: 'secondary',
    },
    {
      id: 6,
      title: 'Updates to This Policy',
      icon: '🔄',
      description:
        'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.',
      items: [`Last updated: ${new Date().toLocaleDateString()}`],
      color: 'dark',
    },
  ]

  return (
    <div className='privacy-page'>
      {/* Hero Section - Full Width Background */}
      <div className='privacy-hero'>
        <div className='hero-content'>
          <Container>
            <Row className='justify-content-center text-center'>
              <Col lg={8}>
                <div className='privacy-icon mb-3' style={{ fontSize: '4rem' }}>
                  🛡️
                </div>
                <h1 className='fw-bold mb-3'>Privacy Policy</h1>
                <p className='lead mb-0'>
                  Your privacy is important to us. Learn how we collect, use, and protect your
                  information.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Container className='pb-5'>
        <Row>
          <Col lg={8} className='mx-auto'>
            {/* Privacy Overview Card */}
            <Card className='my-4 shadow-sm border-0 fade-in'>
              <Card.Body className='p-4'>
                <div className='d-flex align-items-center mb-3'>
                  <div className='me-3' style={{ fontSize: '2rem' }}>
                    🔒
                  </div>
                  <div>
                    <h3 className='mb-1'>Your Privacy Matters</h3>
                    <p className='text-muted mb-0'>
                      We are committed to protecting your personal information
                    </p>
                  </div>
                </div>
                <div className='row g-3'>
                  <div className='col-md-4'>
                    <div className='text-center p-3 bg-light rounded'>
                      <div className='text-primary mb-2' style={{ fontSize: '1.5rem' }}>
                        🔐
                      </div>
                      <h6 className='mb-1'>Secure</h6>
                      <small className='text-muted'>Data encryption</small>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='text-center p-3 bg-light rounded'>
                      <div className='text-success mb-2' style={{ fontSize: '1.5rem' }}>
                        ✅
                      </div>
                      <h6 className='mb-1'>Transparent</h6>
                      <small className='text-muted'>Clear policies</small>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='text-center p-3 bg-light rounded'>
                      <div className='text-info mb-2' style={{ fontSize: '1.5rem' }}>
                        🎯
                      </div>
                      <h6 className='mb-1'>Focused</h6>
                      <small className='text-muted'>Minimal data use</small>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Privacy Sections */}
            <div className='privacy-sections'>
              {sections.map((section, index) => (
                <Card
                  key={section.id}
                  className={`mb-4 shadow-sm border-0 privacy-card fade-in`}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    borderLeft: `4px solid var(--bs-${section.color}) !important`,
                  }}>
                  <Card.Body className='p-4'>
                    <div className='d-flex align-items-start'>
                      <div className='privacy-section-icon me-3 mt-1' style={{ fontSize: '2rem' }}>
                        {section.icon}
                      </div>
                      <div className='flex-grow-1'>
                        <div className='d-flex align-items-center mb-3'>
                          <Badge
                            bg={section.color}
                            className='me-2'
                            style={{ fontSize: '0.75rem' }}>
                            {section.id}
                          </Badge>
                          <h3 className='mb-0 h4'>{section.title}</h3>
                        </div>
                        <p className='text-muted mb-3'>{section.description}</p>
                        <ul className='list-unstyled'>
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className='mb-2 d-flex align-items-start'>
                              <span className='me-2 text-success' style={{ fontSize: '0.8rem' }}>
                                ✓
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>

            {/* Contact CTA */}
            <Card className='mt-5 bg-primary text-white border-0 shadow'>
              <Card.Body className='p-4 text-center'>
                <div className='mb-3' style={{ fontSize: '2.5rem' }}>
                  💬
                </div>
                <h4 className='mb-3'>Questions About Your Privacy?</h4>
                <p className='mb-4 opacity-75'>
                  We're here to help. Contact our privacy team for any questions or concerns.
                </p>
                <a
                  href='mailto:privacy@example.com'
                  className='btn btn-light btn-lg px-4'
                  style={{ borderRadius: '25px' }}>
                  Contact Privacy Team
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
