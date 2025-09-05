import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { ProductsProvider } from './context/ProductsContext'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Privacy } from './pages/Privacy'
import { ProductDetail } from './pages/ProductDetail'
import { Store } from './pages/Store'

function App() {
  return (
    <ProductsProvider>
      <ShoppingCartProvider>
        <Navbar />
        <Container className='mb-4'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/store' element={<Store />} />
            <Route path='/product/:id' element={<ProductDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/privacy' element={<Privacy />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </ProductsProvider>
  )
}

export default App
