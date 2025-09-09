import { useEffect, useState } from 'react'

import { Alert, Container, Spinner } from 'react-bootstrap'
import Masonry from 'react-masonry-css'

import { AnimatedStoreItem } from '../components/AnimatedStoreItem'
import { useProductsContext } from '../context/ProductsContext'
import '../styles/pages/Store.scss'

export function Store() {
  const { products, loading, error, refetch } = useProductsContext()
  const [visibleProducts, setVisibleProducts] = useState<number[]>([])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  // AJAX-style loading animation for products
  useEffect(() => {
    console.log('Store useEffect - loading:', loading, 'products.length:', products.length)
    if (!loading && products.length > 0) {
      console.log('Starting animation for', products.length, 'products')
      setVisibleProducts([])
      
      // Animate products in one by one with staggered delays
      products.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProducts(prev => [...prev, index])
        }, index * 100) // 100ms delay between each product
      })
    } else if (!loading && products.length === 0) {
      console.log('No products to animate - products array is empty')
    }
  }, [loading, products.length])

  // Render content based on state
  const renderContent = () => {
    if (loading) {
      return (
        <div
          className='d-flex justify-content-center align-items-center'
          style={{ minHeight: '400px' }}>
          <div className='text-center store-loading'>
            <Spinner animation='border' role='status' className='store-loading-spinner' />
            <div className='mt-3'>Loading products...</div>
            <small className='text-muted'>Fetching all products for seamless browsing</small>
          </div>
        </div>
      )
    }

    if (error) {
      return (
        <div
          className='d-flex justify-content-center align-items-center'
          style={{ minHeight: '400px' }}>
          <Alert variant='danger' className='text-center' style={{ maxWidth: '500px' }}>
            <Alert.Heading>Error Loading Products</Alert.Heading>
            <p>{error}</p>
            <hr />
            <div className='d-flex justify-content-end'>
              <button 
                className='btn btn-outline-danger' 
                onClick={refetch}
              >
                Try Again
              </button>
            </div>
          </Alert>
        </div>
      )
    }

    if (products.length === 0) {
      return (
        <div
          className='d-flex justify-content-center align-items-center'
          style={{ minHeight: '400px' }}>
          <Alert variant='info' className='text-center'>
            <Alert.Heading>No Products Available</Alert.Heading>
            <p>There are no products to display at the moment.</p>
          </Alert>
        </div>
      )
    }

    console.log('Rendering with products:', products.length, 'visible:', visibleProducts.length)
    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='masonry-grid'
        columnClassName='masonry-grid_column'>
        {Array.isArray(products)
          ? products.map((product, index) => {
              const isVisible = visibleProducts.includes(index)
              return (
                <div 
                  key={product.id} 
                  className={`masonry-item ${isVisible ? 'ajax-loaded' : 'ajax-loading'}`}
                  data-id={product.id}
                  style={{ 
                    '--item-index': index,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  } as React.CSSProperties}
                >
                  <AnimatedStoreItem
                    product={product}
                  />
                </div>
              )
            })
          : null}
      </Masonry>
    )
  }

  return (
    <div className='store-page'>
      {/* Hero Section - Full Width Background */}
      <div className='store-hero'>
        <div className='hero-content'>
          <Container>
            <div className='text-center'>
              <div className='store-icon mb-3' style={{ fontSize: '4rem' }}>
                🛍️
              </div>
              <h1 className='store-hero-title mb-3'>Our Store</h1>
              <p className='store-hero-subtitle mb-0'>Discover amazing products</p>
            </div>
          </Container>
        </div>
      </div>

      <Container className='py-4'>{renderContent()}</Container>
    </div>
  )
}
