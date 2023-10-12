import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='flex gap-5'>
      <Link
        className='text-white'
        to='/'>Home</Link>
      <Link
        className='text-white'
        to='/new_project'>New Project</Link>
      <Link
        className='text-white'
        to='/teste'>Test</Link>
      <Link
        className='text-white'
        to='/who_we_are'>Who we are</Link>
      <Link
        className='text-white'
        to='/contacts'>Contacts</Link>
    </nav>
  );
};

export default Navbar;