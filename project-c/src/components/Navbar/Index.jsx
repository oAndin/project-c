import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='w-100 h-24 bg-black flex items-center p-5 gap-3'>
      <Link
        className='text-white'
        to='/'>Home</Link>
      <Link
        className='text-white'
        to='/teste'>Teste</Link>
      <Link
        className='text-white'
        to='/pagina_dois'>Página dois</Link>
    </nav>
  );
};

export default Navbar;