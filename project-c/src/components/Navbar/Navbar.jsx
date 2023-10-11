import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='w-100 h-1/6 bg-black flex items-center'>
      <Link
        className='text-blue-950'
        to='/'>Home</Link>
      <Link
        className='text-blue-950'
        to='/teste'>Teste</Link>
    </nav>
  );
};

export default Navbar;