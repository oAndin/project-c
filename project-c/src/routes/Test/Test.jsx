import React from 'react';
import BlurModal from '../../components/BlurModal/Index';
import ButtonOpenModal from '../../components/ButtonOpenModal/Index';

const Test = ({handleOpenModal, setIsOpen}) => {
  function handleOpen() {
    setIsOpen(true)
}; 
  return (
    <>
      <div className='h-screen'>
        <h1>This is just a simple test</h1>
        <h3>Nothing to see here</h3>
        <h6>Move along!</h6>
        <p>Thank you! :)</p>
        <BlurModal/>
        <ButtonOpenModal handleOpenModal={handleOpen}/>
      </div>
    </>
  );
};

export default Test;