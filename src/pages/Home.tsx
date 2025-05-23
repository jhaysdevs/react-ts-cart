import { Link } from 'react-router-dom'

export function Home() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <h1 className="display-4 mb-4">Welcome to Our Store</h1>
        <p className="lead">
          Discover our curated collection of premium products at unbeatable prices.
          Shop with confidence and enjoy a seamless shopping experience.
        </p>
      </div>

      {/* Features Section */}
      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="h5 mb-3">Quality Products</h3>
              <p className="text-muted">
                We carefully select each item to ensure the highest quality standards
                for our customers.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="h5 mb-3">Fast Shipping</h3>
              <p className="text-muted">
                Enjoy quick and reliable delivery to your doorstep with our
                efficient shipping service.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center">
              <h3 className="h5 mb-3">Secure Shopping</h3>
              <p className="text-muted">
                Shop with peace of mind knowing your transactions are protected
                with advanced security measures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="row justify-content-center mb-5">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-5 text-center">
              <h2 className="h3 mb-4">Our Story</h2>
              <p className="text-muted mb-4">
                Founded with a passion for quality and customer satisfaction, we've grown from a small local shop 
                to a trusted online destination for premium products. Our commitment to excellence and 
                customer-first approach drives everything we do.
              </p>
              <Link to="/about" className="btn btn-outline-primary">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Link to="/store" className="text-decoration-none">
          <h2 className="h4 mb-4 text-primary">Ready to Start Shopping 🛒?</h2>
        </Link>
        <p className="text-muted mb-4">
          Browse our extensive collection of products and find exactly what you're looking for.
        </p>
      </div>
    </div>
  )
}