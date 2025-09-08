import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
  const { cartQuantity } = useShoppingCart()
  const navigate = useNavigate()
  return (
    <NavbarBs sticky='top' className='bg-white shadow-sm'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link to='/' as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to='/store' as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to='/about' as={NavLink}>
            About
          </Nav.Link>
          <Nav.Link to='/privacy' as={NavLink}>
            Privacy
          </Nav.Link>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={() => navigate('/cart')}
            style={{
              width: '3rem',
              height: '3rem',
              position: 'relative',
            }}
            variant='primary'
            className='d-flex rounded-circle'>
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='#fff'>
              <title>cart</title>
              <path d='M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z'></path>
              <path d='M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z'></path>
              <path d='M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z'></path>
            </svg>
            <div
              className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
              style={{
                color: 'white',
                minWidth: '1.2rem',
                minHeight: '1.2rem',
                padding: '0.15rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(25%, 25%)',
                fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
                lineHeight: 1,
                aspectRatio: '1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  )
}
