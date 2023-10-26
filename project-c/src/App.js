import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Index';
import Header from './components/Header/Index';
import { BlurContext } from './contexts/BlurContext/Index';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <BlurContext.Provider value={{isOpen, setIsOpen}}>
          <Header />
          <Outlet />
          <Footer />
        </BlurContext.Provider>
      </div>
    </>
  )
}

export default App;