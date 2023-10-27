import React, { useState } from 'react'

const ButtonOpenModal = () => {

  const [isOpen, setIsOpen] = useState();

  return <button 
  onClick={ ()=> {setIsOpen(!isOpen)}}
  className='border-2 border-black bg-white p-2'>{isOpen ? 'Close' : 'Open'}</button>
}

export default ButtonOpenModal;