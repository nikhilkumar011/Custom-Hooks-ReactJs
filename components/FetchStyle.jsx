import React from 'react'

const FetchStyle = ({data}) => {
  return (
    <div className='p-5 border border-white'>
       <img src={data.images[0]} alt="" className='size-80'/>
       <p className='w-80'>{data.title}</p>
       <p>Price:{data.price}$</p>
       <p className='text-sm w-80'>{data.description}</p>
    </div>
  )
}

export default FetchStyle
