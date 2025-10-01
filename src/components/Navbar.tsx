import { toggleTheme as toggleThemeUtil } from '../theme'
import { useEffect, useState } from 'react'
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
  const { cartQuantity, openCart } = useShoppingCart()
  const location = useLocation()
  const navigate = useNavigate()
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Sync with already-applied theme (applied in HTML script tag)
  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme')
    const isDark = currentTheme === 'dark'
    setIsDarkMode(isDark)
  }, [])

  const isOnCartPage = location.pathname === '/cart'

  const handleCartClick = () => {
    if (isOnCartPage) {
      openCart()
    } else {
      navigate('/cart')
    }
  }

  const toggleTheme = () => {
    toggleThemeUtil(setIsDarkMode)
  }
  return (
    <NavbarBs sticky='top' className='nav-bar shadow-sm'>
      <Container className='navbar-container'>
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

        <Button
          variant={isDarkMode ? 'light' : 'dark'}
          onClick={toggleTheme}
          className='me-2 theme-toggle'
          size='sm'
          title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
          {isDarkMode ? '☀️' : '🌙'}
        </Button>

        {cartQuantity > 0 && (
          <Button
            onClick={handleCartClick}
            variant='primary'
            className='cart-button rounded-circle position-relative'>
            <svg
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='32'
              viewBox='0 0 32 32'
              fill='#fff'>
              <title>cart</title>
              <path d='M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z'></path>
              <path d='M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z'></path>
              <path d='M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z'></path>
            </svg>
            <div
              className={`cart-quantity-badge bg-danger ${cartQuantity?.toString().length > 2 ? 'wide' : ''}`}>
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  )
}
