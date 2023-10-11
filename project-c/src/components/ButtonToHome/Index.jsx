import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const ButtonToHome = props => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log('btn navigate return home!');
    return navigate('/');
  }
  return (
    <>
      <button onClick={handleNavigate}>Voltar para a página principal!</button>
    </>
  )
}

ButtonToHome.propTypes = {}

export default ButtonToHome