import React from 'react'
import { MdMonetizationOn } from 'react-icons/md'
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <>
            <Link to='/'>
                <span className='cursor-pointer flex justify-center items-center gap-5 '>
                    <MdMonetizationOn
                    className='text-7xl fill-white ml-8 hover:fill-hover-pattern ease-in-out duration-300' />
                </span>
            </Link>
        </>
    );
};

export default Logo;