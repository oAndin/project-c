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
      <footer className='static bottom-0 w-full px-10 flex flex-col justify-around bg-dark-gray p-5'>
        <div
          className='flex justify-around items-center'>
          <div className='w-[15%]'>
            <Logo />
            <p className='text-sm text-white opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, facere reprehenderit! Quas omnis, quaerat, dolores nisi autem nobis architecto ducimus impedit magni quo asperiores obcaecati culpa, amet cum sapiente perspiciatis.</p>
          </div>
          <CollumNavbar />
          <div id='map' className='flex flex-col justify-center items-center'>
            <h3 className='text-white mb-2'>Google Maps API it costs 200 bucks :(</h3>
            <span className='w-52 h-52 flex border-2'></span>
          </div>
        </div>
        <div className='flex justify-center text-white text-xl gap-3'>
          <a href="*">
            <AiOutlineInstagram />
          </a>
          <a href="*">
            <AiOutlineLinkedin />
          </a>
          <a href="*">
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