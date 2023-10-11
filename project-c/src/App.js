import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <div
        className='w-screen h-screen'>
        <Navbar />
        <Outlet />
        <Navbar />
      </div>
    </>
  )
}

export default App;