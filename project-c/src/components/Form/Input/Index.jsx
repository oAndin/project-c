import React, { useState } from 'react'

const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
  // const [] = useState();
  return (
    <>
        <div
          className='flex flex-col mb-4 p-2.5'>
          <label htmlFor={name}
            className='mb-2.5 font-bold'>{text}:</label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            id={name}
            onChange={handleOnChange}
            value={value}
            className='bg-white w-full p-1' />
        </div>
    </>
  );
};

export default Input;