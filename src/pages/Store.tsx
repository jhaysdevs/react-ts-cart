import { Alert, Spinner } from 'react-bootstrap'
import Masonry from 'react-masonry-css'

import { StoreItem } from '../components/StoreItem'
import { useProductsContext } from '../context/ProductsContext'

export function Store() {
  const { products, loading, error, refetch } = useProductsContext()

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  if (loading) {
    return (
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ minHeight: '400px' }}>
        <div className='text-center'>
          <Spinner animation='border' role='status' />
          <div className='mt-3'>Loading products...</div>
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
            <button className='btn btn-outline-danger' onClick={refetch}>
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
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='masonry-grid'
        columnClassName='masonry-grid_column'>
        {products.map((product) => (
          <div key={product.id} className='masonry-item'>
            <StoreItem
              id={parseInt(product.id.replace(/-/g, '').substring(0, 8), 16)}
              name={product.name}
              price={product.price}
              imgUrl={product.image}
            />
          </div>
        ))}
      </Masonry>
    </>
  )
}
