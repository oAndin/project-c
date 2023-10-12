import React from 'react'
import { MdMonetizationOn } from 'react-icons/md'
import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <>
            <Link to='/'>
                <span className='cursor-pointer'>
                    <MdMonetizationOn
                    className='text-7xl fill-white' />
                </span>
            </Link>
        </>
    );
};

export default Logo;