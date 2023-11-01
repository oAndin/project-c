import React, { useContext } from 'react';
import BlurModal from '../../components/BlurModal/Index';
import ButtonOpenModal from '../../components/ButtonOpenModal/Index';
import { BlurContext } from '../../contexts/BlurContext/Index';

const Test = () => {

  const { isOpen } = useContext(BlurContext);

  let status = isOpen ? 'Open' : 'Closed';

  return (
    <>
      <div className='h-screen'>
        <h1>This is just a simple test</h1>
        <h3>Nothing to see here</h3>
        <h6>Move along!</h6>
        <p>Thank you! :)</p>
        <h1>{status}</h1>
        {isOpen && (<BlurModal />)}
        {!isOpen && (<ButtonOpenModal />)}
      </div>
    </>
  );
};

export default Test;