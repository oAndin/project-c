import React from 'react';
import { Link } from 'react-router-dom';

const CollumNavbar = () => {
    return (
        <nav
            className='flex flex-wrap justify-start items-center gap-5 w-1/6 text-xs'>
            <div className='flex flex-col gap-5'>
                <Link
                    className='text-white hover:text-hover-pattern ease-in-out duration-300'
                    to='/'>Home</Link>
                <Link
                    className='text-white hover:text-hover-pattern ease-in-out duration-300'
                    to='/projects'>Projects</Link>
                <Link
                    className='text-white hover:text-hover-pattern ease-in-out duration-300'
                    to='/new_project'>New Project</Link>
            </div>
            <div className='flex flex-col gap-5'>
                <Link
                    className='text-white hover:text-hover-pattern ease-in-out duration-300'
                    to='/teste'>Test</Link>
                <Link
                    className='text-white hover:text-hover-pattern ease-in-out duration-300'
                    to='/who_we_are'>Who we are</Link>
                <Link
                    className='text-white hover:text-hover-pattern ease-in-out duration-300'
                    to='/contacts'>Contacts</Link>
            </div>
        </nav>
    );
};

export default CollumNavbar;