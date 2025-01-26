import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* 1st part */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Sulotion</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Enterprise</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>WorkFlow</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>By Team</p>

        </div>
        {/* 2nd part */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Company</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About Us</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>News & Press</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Our Customer</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Leadership</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Careers</p>
        </div>
        {/* 3rd part */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Resources</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blog</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Webinar & Event</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Podcast</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>E-books & Guides</p>
        </div>
        {/* 4th part */}
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Contact Us</h1>
            <div className='mt-6'>
                <h1 className='text-sm text-gray-600 '>Our Mobile Number</h1>
                <h1 className='text-base font-bold text-blue-950 mt-1'>+012 3456789</h1>
            </div>
            <div className='mt-6'>
                <h1 className='text-sm text-gray-600 '>Our Email</h1>
                <h1 className='text-base font-bold text-blue-950 mt-1'>example@gmail.com</h1>
            </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div className='mt-8 w-[80%] mx-auto border-t p-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
        <p className='text-center md:text-left'>Copyright Ⓒ 2025 GandomAcc. All rights reserved</p>
        <div className='flex items-center space-x-4 mt-4 md:mt-0'>
            <span>Social : </span>
            <span><FaFacebook /></span>
            <span><FaTwitter /></span>
            <span><FaDribbble /></span>

        </div>
      </div>
    </div>
  )
}

export default Footer
