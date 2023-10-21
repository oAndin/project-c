import React, { useState } from 'react'

const ConfirmButton = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    <>
    <button onClick={()=>{setIsOpen(true)}}>Testa ai man</button>
    {isOpen &&
        <span id="container"
        className='absolute top-0 left-0 bg-transparent w-full h-screen z-10 backdrop-blur-3xl opacity-40'
        onClick={()=>{setIsOpen(false)}}>
        </span>
    }
    </>
  )
}

export default ConfirmButton;