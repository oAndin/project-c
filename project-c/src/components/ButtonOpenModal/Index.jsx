import React from 'react'

const ButtonOpenModal = ({handleOpenModal, text}) => {
  return <button onClick={handleOpenModal}>{text}</button>
}

export default ButtonOpenModal