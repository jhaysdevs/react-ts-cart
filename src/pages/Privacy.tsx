import { Container } from 'react-bootstrap'

export function Privacy() {
  return (
    <Container className="py-4">
      <h1 className="mb-4">Privacy Policy</h1>
      
      <section className="mb-4">
        <h2>1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, including when you:</p>
        <ul>
          <li>Create an account</li>
          <li>Make a purchase</li>
          <li>Sign up for our newsletter</li>
          <li>Contact our customer service</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Process your orders and payments</li>
          <li>Communicate with you about your orders</li>
          <li>Send you marketing communications (with your consent)</li>
          <li>Improve our website and services</li>
          <li>Prevent fraud and enhance security</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>3. Information Sharing</h2>
        <p>We do not sell your personal information. We may share your information with:</p>
        <ul>
          <li>Service providers who assist in our operations</li>
          <li>Payment processors to complete transactions</li>
          <li>Law enforcement when required by law</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>4. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate information</li>
          <li>Request deletion of your information</li>
          <li>Opt-out of marketing communications</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2>5. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Email: privacy@example.com</p>
      </section>

      <section className="mb-4">
        <h2>6. Updates to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
      </section>
    </Container>
  )
} 