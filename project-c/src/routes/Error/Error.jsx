import React from 'react';
import { useRouteError } from 'react-router-dom';
import ButtonToHome from '../../components/ButtonToHome/Index';

const Error = () => {

  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div id="error-page" className='w-full h-screen flex justify-center items-center'>
        <div className='border-2 p-2 flex flex-col justify-center items-center'>
          <h1>Oops! 404</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <ButtonToHome />
        </div>
      </div>
    </>
  );
};



export default Error;