import React, { useContext} from 'react'
import { BlurContext } from '../../contexts/BlurContext/Index';

const ButtonOpenModal = () => {

  // const [isOpen, toggleIsOpen] = useContext(BlurContext)
  const {toggleIsOpen} = useContext(BlurContext)
  const {isOpen} = useContext(BlurContext)

  return <button onClick={toggleIsOpen} className='border-2 border-black bg-white p-2'>{isOpen ? 'Close' : 'Open'}</button>}

export default ButtonOpenModal;