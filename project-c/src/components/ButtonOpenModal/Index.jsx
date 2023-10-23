import React from 'react'

const ButtonOpenModal = ({handleOpenModal, text}) => {
  return <button 
  onClick={handleOpenModal}
  className='border-2 border-black bg-white p-2'>{text}</button>
}

export default ButtonOpenModal