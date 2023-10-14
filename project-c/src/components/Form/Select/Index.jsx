import React from 'react'

const Select = ({text, name, options, handleOnChange, value}) => {
  return (
    <>
    <div
    className='flex flex-col p-2.5'>
        <label 
        htmlFor={name}
        className='mb-2.5 font-bold'>{text}</label>
        <select 
        name={name} 
        id={name}
        className='bg-white placeholder:text-lighter-gray p-1'>
            <option>Select a category</option>
        </select>
    </div>
    </>
  )
}

export default Select