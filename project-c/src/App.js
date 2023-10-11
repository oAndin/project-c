import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Index';
import Header from './components/Header/Index';

const App = () => {
  const nome = [
    {
      nome: 'Andherson'
    }
  ];
  return (
    <>
      <div
        className='w-screen h-screen bg-pattern'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App;