import React from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Index';
import Header from './components/Header/Index';

const App = () => {

  return (
    <>
      <div>
          <Header />
          <Outlet />
          <Footer />
      </div>
    </>
  )
}

export default App;