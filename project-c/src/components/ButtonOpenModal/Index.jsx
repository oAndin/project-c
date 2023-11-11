import React, { useContext } from 'react'
import { BlurContext } from '../../contexts/BlurContext/Index';

const ButtonOpenModal = () => {
  const { isOpen, toggleIsOpen } = useContext(BlurContext);

  return <button onClick={toggleIsOpen} className='w-full border-2 border-black bg-white p-2'>{isOpen ? 'Close' : 'Open'}</button>
}

export default ButtonOpenModal;