import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonToHome = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log('btn navigate return home!');
    return navigate('/');
  }
  return (
    <>
      <button
        className='bg-black text-white rounded p-1'
        onClick={handleNavigate}>Go back to the home page</button>
    </>
  );
};

export default ButtonToHome;