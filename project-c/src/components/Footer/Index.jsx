import React from 'react'
import CollumNavbar from '../CollumNavBar/Index'
import Logo from '../Logo/Index'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <footer className='fixed bottom-0 w-full px-10 flex flex-col justify-around bg-dark-gray p-5'>
        <div
          className='flex justify-around'>
          <div className='w-[15%]'>
            <Logo />
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <CollumNavbar />
        </div>
        <div className='flex justify-center text-white text-xl gap-3'>
          <a href="#">
            <AiOutlineInstagram />
          </a>
          <a href="#">
            <AiOutlineLinkedin />
          </a>
          <a href="#">
            <AiOutlineFacebook />
          </a>
          <a href="https://github.com/oAndin"><AiOutlineGithub /></a>
        </div>
        <div className="line w-full border-b-2 border-white opacity-30 my-2"></div>
        <p className='text-center text-xs text-white opacity-50'>©️ Developed by Andherson Costa</p>
      </footer>
    </>
  )
}

export default Footer