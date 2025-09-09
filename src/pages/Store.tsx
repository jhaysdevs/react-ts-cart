import { useEffect, useRef, useState } from 'react'

import { Alert, Container, Spinner } from 'react-bootstrap'
import Masonry from 'react-masonry-css'

import { AnimatedStoreItem } from '../components/AnimatedStoreItem'
import { useProductsContext } from '../context/ProductsContext'
import '../styles/pages/Store.scss'

export function Store() {
  const { products, loading, error, refetch, loadMore, hasMore, isLoadingMore, isRetrying } =
    useProductsContext()
  const observerRef = useRef<HTMLDivElement>(null)
  const [observerEnabled, setObserverEnabled] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [])

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  // Enable intersection observer after initial load is complete
  useEffect(() => {
    if (!loading && products.length > 0) {
      // Small delay to prevent immediate triggering
      const timer = setTimeout(() => {
        setObserverEnabled(true)
      }, 500)

      return () => clearTimeout(timer)
    }
  }, [loading, products.length])

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (!observerEnabled) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          loadMore()
        }
      },
      { threshold: 0.1 }
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => observer.disconnect()
  }, [observerEnabled, hasMore, isLoadingMore, loadMore])

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
                disabled={isRetrying}
              >
                {isRetrying ? (
                  <>
                    <Spinner 
                      animation='border' 
                      size='sm' 
                      className='me-2' 
                      role='status'
                    />
                    Retrying...
                  </>
                ) : (
                  'Try Again'
                )}
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
      <>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className='masonry-grid'
          columnClassName='masonry-grid_column'>
          {Array.isArray(products)
            ? products.map((product, index) => {
                // Calculate grid position based on current viewport
                const getGridPosition = () => {
                  // Get current breakpoint columns
                  const getCurrentColumns = () => {
                    if (window.innerWidth >= 1100) return 4
                    if (window.innerWidth >= 700) return 3
                    if (window.innerWidth >= 500) return 2
                    return 1
                  }

                  const columns = getCurrentColumns()
                  const row = Math.floor(index / columns)
                  const col = index % columns

                  return { row, col }
                }

                return (
                  <div key={product.id} className='masonry-item' data-id={product.id}>
                    <AnimatedStoreItem
                      product={product}
                      index={index}
                      gridPosition={getGridPosition()}
                    />
                  </div>
                )
              })
            : null}
        </Masonry>

        {/* Loading indicator */}
        {isLoadingMore && (
          <div className='text-center py-5'>
            <div className='store-loading'>
              <div className='loading-animation-container'>
                <div className='loading-dots'>
                  <div className='dot'></div>
                  <div className='dot'></div>
                  <div className='dot'></div>
                </div>
                <p className='text-muted mt-3 mb-0'>Loading more products...</p>
              </div>
            </div>
          </div>
        )}

        {/* End of list indicator */}
        {!hasMore && products.length > 0 && (
          <Alert variant='info' className='text-center mt-4 store-load-more'>
            <strong>You've reached the end!</strong> All available products are displayed.
          </Alert>
        )}

        {/* Intersection observer target */}
        {observerEnabled && <div ref={observerRef} style={{ height: '20px' }} />}
      </>
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
