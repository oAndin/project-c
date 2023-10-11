import React from 'react';
import PropTypes from 'prop-types';
import { useRouteError } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import ButtonToHome from '../../components/ButtonToHome/Index';

const Error = props => {

  const error = useRouteError();
  console.error(error);

  return (
    <>


      <div id="error-page">

        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
      <ButtonToHome />
    </>
  );
};

Error.propTypes = {};

export default Error;