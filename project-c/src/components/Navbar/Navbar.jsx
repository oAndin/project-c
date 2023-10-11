import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = props => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/teste'>Teste</Link>

    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar