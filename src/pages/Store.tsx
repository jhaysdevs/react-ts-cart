import { useEffect } from 'react'

import { Alert, Container, Spinner } from 'react-bootstrap'
import Masonry from 'react-masonry-css'

import { AnimatedStoreItem } from '../components/AnimatedStoreItem'
import { useProductsContext } from '../context/ProductsContext'
import '../styles/pages/Store.scss'

export function Store() {
  const { products, loading, error, refetch } = useProductsContext()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }


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

    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='masonry-grid'
        columnClassName='masonry-grid_column'>
        {Array.isArray(products)
          ? products.map((product, index) => (
              <div 
                key={product.id} 
                className='masonry-item'
                data-id={product.id}
                style={{ 
                  '--item-index': index,
                } as React.CSSProperties}
              >
                <AnimatedStoreItem product={product} />
              </div>
            ))
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
