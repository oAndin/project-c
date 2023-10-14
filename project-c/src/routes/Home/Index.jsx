import React, { useState } from 'react';

const Home = () => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* <button
        onClick={() => setIsVisible(!isVisible)}>{isVisible ? 'Hide content' : 'Show cotent'}</button>
      {isVisible && (
        <div>
          <p>This is the content to show/hide.</p>
        </div>
      )} */}
      <div className='flex flex-col justify-center items-center gap-10 h-screen'>
        <h1>Welcome to <span>Project Manager</span></h1>
        <p>Start managing your projects in a easy way, it's that simple!</p>
        <span
          className='w-72 h-72 border-2 border-black flex flex-col justify-center items-center'>This is supposed to have a logo on</span>
      </div>
    </>
  );
};

export default Home;