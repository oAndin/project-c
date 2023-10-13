import React from 'react'
import { MdMonetizationOn } from 'react-icons/md'
import { Link } from 'react-router-dom';
const LogoBlack = () => {
    return (
        <>
            <Link to='/'>
                <span className='cursor-pointer flex justify-center items-center gap-5 '>
                    <MdMonetizationOn
                    className='text-7xl fill-black hover:fill-hover-pattern ease-in-out duration-300' />
                    <h1 className='text-black hover:text-hover-pattern ease-in-out duration-300'>Project Manager</h1>
                </span>
            </Link>
        </>
    );
};

export default LogoBlack;