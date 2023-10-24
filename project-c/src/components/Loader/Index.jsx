import React from 'react'

const Loader = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-24 h-24 flex border-t-8 border-white border-8 border-t-black rounded-full animate-spin'></div>
    </div>
  )
}

export default Loader