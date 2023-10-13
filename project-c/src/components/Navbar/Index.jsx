import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      className='flex gap-5'>
      <Link
        className='text-white hover:text-hover-pattern ease-in-out duration-300'
        to='/'>Home</Link>
      <Link
        className='text-white hover:text-hover-pattern ease-in-out duration-300'
        to='/projects'>Projects</Link>
      <Link
        className='text-white hover:text-hover-pattern ease-in-out duration-300'
        to='/new_project'>New Project</Link>
      <Link
        className='text-white hover:text-hover-pattern ease-in-out duration-300'
        to='/teste'>Test</Link>
      <Link
        className='text-white hover:text-hover-pattern ease-in-out duration-300'
        to='/who_we_are'>Who we are</Link>
      <Link
        className='text-white hover:text-hover-pattern ease-in-out duration-300'
        to='/contacts'>Contacts</Link>
    </nav>
  );
};

export default Navbar;