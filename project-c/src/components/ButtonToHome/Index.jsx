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
        className='bg-black text-white'
        onClick={handleNavigate}>Voltar para a página principal!</button>
    </>
  );
};

export default ButtonToHome;