import React from 'react';
import BlurModal from '../../components/BlurModal/Index';
import ButtonOpenModal from '../../components/ButtonOpenModal/Index';

const Test = () => {

  return (
    <>
      <div className='h-screen'>
        <ButtonOpenModal></ButtonOpenModal>
        <h1>This is just a simple test</h1>
        <h3>Nothing to see here</h3>
        <h6>Move along!</h6>
        <p>Thank you! :)</p>
        <BlurModal/>  
        <ButtonOpenModal/>
      </div>
    </>
  );
};

export default Test;