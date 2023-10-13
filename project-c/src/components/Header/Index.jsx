import React from 'react'
import Navbar from '../Navbar/Index'
import Logo from '../Logo/Index'

const Header = () => {
  return (
    <header className='sticky w-full flex justify-between items-center p-5 gap-3 bg-dark-gray'>
      <Logo />
      <Navbar/>
    </header>
  )
}

export default Header