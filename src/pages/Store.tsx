import Masonry from 'react-masonry-css'

import { StoreItem } from '../components/StoreItem'
import storeItems from '../data/items.json'

export function Store() {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className='masonry-grid'
        columnClassName='masonry-grid_column'>
        {storeItems.map((item) => (
          <div key={item.id} className='masonry-item'>
            <StoreItem {...item} />
          </div>
        ))}
      </Masonry>
    </>
  )
}
