import React from 'react';
import BlurModal from '../../components/BlurModal/Index';
import ButtonOpenModal from '../../components/ButtonOpenModal/Index';

const Test = ({handleOpenModel}) => {
  return (
    <>
      <div className='h-screen'>
        <h1>This is just a simple test</h1>
        <h3>Nothing to see here</h3>
        <h6>Move along!</h6>
        <p>Thank you! :)</p>
        <ButtonOpenModal textButton='Open Modal'/>
        <BlurModal/>
      </div>
    </>
  );
};

export default Test;