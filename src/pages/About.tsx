export function About() {
  const currentYear = new Date().getFullYear()
  const foundingYear = currentYear - 3

  return (
    <div className='container py-5 px-4'>
      {/* Company Story Section */}
      <div className='row mb-5'>
        <div className='col-lg-8 mx-auto text-center'>
          <h1 className='h2 mb-4 px-3'>Our Story</h1>
          <p className='h5 mb-4 px-4'>
            Founded in {foundingYear}, we set out with a simple mission: to provide our customers
            with exceptional products and an unmatched shopping experience.
          </p>
          <p className='small text-muted px-4'>
            What started as a small online store has grown into a trusted destination for quality
            products. Our journey has been driven by our commitment to customer satisfaction and our
            passion for delivering excellence.
          </p>
        </div>
      </div>

      {/* Mission and Values */}
      <div className='row mb-5 g-4'>
        <div className='col-md-6'>
          <div className='card h-100 border-0 shadow-sm'>
            <div className='card-body p-4'>
              <h2 className='h5 mb-3 px-2'>Our Mission</h2>
              <p className='small text-muted px-2'>
                To provide our customers with the highest quality products while ensuring a seamless
                and enjoyable shopping experience. We believe in building lasting relationships with
                our customers through transparency, reliability, and exceptional service.
              </p>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div className='card h-100 border-0 shadow-sm'>
            <div className='card-body p-4'>
              <h2 className='h5 mb-3 px-2'>Our Values</h2>
              <ul className='list-unstyled small text-muted px-2'>
                <li className='mb-2'>✓ Quality First</li>
                <li className='mb-2'>✓ Customer Satisfaction</li>
                <li className='mb-2'>✓ Innovation</li>
                <li className='mb-2'>✓ Sustainability</li>
                <li>✓ Community Impact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div className='row'>
        <div className='col-lg-8 mx-auto text-center'>
          <h2 className='h5 mb-4 px-3'>Our Commitment to You</h2>
          <p className='small text-muted px-4'>
            We are dedicated to providing you with the best shopping experience possible. From our
            carefully curated product selection to our responsive customer service, every aspect of
            our business is designed with you in mind. We value your trust and are committed to
            maintaining the highest standards in everything we do.
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className='row mt-5'>
        <div className='col-lg-8 mx-auto text-center'>
          <h2 className='h5 mb-4 px-3'>Ready to Shop?</h2>
          <p className='small text-muted mb-4 px-4'>
            Explore our carefully curated collection of products and discover why our customers love
            shopping with us.
          </p>
          <a href='/store' className='btn btn-primary px-4 py-2'>
            Start Shopping
          </a>
        </div>
      </div>
    </div>
  )
}
