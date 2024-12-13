import React from 'react'
import Carousels from '../components/Carousel_Collection'

const Collection = () => {

  return (
    <div className='h-[auto] w-full '>
      <h1 className='text-3xl font-bold p-11 '>Home / <span className='text-3xl font-bold text-[#F56A29]'>Collection</span></h1>
      <Carousels></Carousels>
    </div>
  )
}

export default Collection
