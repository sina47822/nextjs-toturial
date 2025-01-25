import BoxText from '@/components/Helper/BoxText'
import React from 'react'
import { FaBriefcase, FaChess, FaRocket, FaShoppingCart } from 'react-icons/fa'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { MdOutlineDesignServices } from 'react-icons/md'

const Services = () => {
  return (
    <div className='pb-16 pt-16'>
        <div className='w-[80%] mx-auto'>
          <BoxText>Our Services</BoxText>
          {/* heading */}
          <h1 className='mt-4 text-2xl md:text-3xl font-bold text-gray-800'>Out Services Made For You?</h1>
          {/* Description */}
          <p className='mt-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, error! Vel cupiditate at similique cumque, sint, a delectus animi aliquam dicta cum ipsum porro enim debitis omnis harum voluptatem doloribus.
          </p>
          {/* grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-center gap-y-12 mt-16'>
            {/* 1st Service */}
            <div data-aos="fade-right" data-aos-anchor-placement="center" className='flex items-center space-x-5'>
              {/* icons */}
              <div className='w-20 sm:w-20 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                <FaRocket className='w-6 h-6 text-orange-400' />
              </div>
              {/* text content */}
              <div>
                <p className='text-lg font-bold text-gray-700'>Start up</p>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatem deserunt hic architecto, </p>
              </div>
            </div>
            {/* 2nd Service */}
            <div data-aos="fade-right" data-aos-anchor-placement="center" data-aos-delay="100" className='flex items-center space-x-5'>
              {/* icons */}
              <div className='w-20 sm:w-20 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                <FaBriefcase className='w-6 h-6 text-orange-400' />
              </div>
              {/* text content */}
              <div>
                <p className='text-lg font-bold text-gray-700'>Bussiness</p>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatem deserunt hic architecto, </p>
              </div>
            </div>
            {/* 3rd Service */}
            <div data-aos="fade-right" data-aos-anchor-placement="center" data-aos-delay="200" className='flex items-center space-x-5'>
              {/* icons */}
              <div className='w-20 sm:w-20 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                <FaShoppingCart className='w-6 h-6 text-orange-400' />
              </div>
              {/* text content */}
              <div>
                <p className='text-lg font-bold text-gray-700'>E-commerce</p>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatem deserunt hic architecto, </p>
              </div>
            </div>
            {/* 4th Service */}
            <div data-aos="fade-right" data-aos-anchor-placement="center" data-aos-delay="300" className='flex items-center space-x-5'>
              {/* icons */}
              <div className='w-20 sm:w-20 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                <MdOutlineDesignServices className='w-6 h-6 text-orange-400' />
              </div>
              {/* text content */}
              <div>
                <p className='text-lg font-bold text-gray-700'>Digital Design</p>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatem deserunt hic architecto, </p>
              </div>
            </div>
            {/* 5th Service */}
            <div data-aos="fade-right" data-aos-anchor-placement="center" data-aos-delay="400" className='flex items-center space-x-5'>
              {/* icons */}
              <div className='w-20 sm:w-20 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                <IoColorPaletteOutline className='w-6 h-6 text-orange-400' />
              </div>
              {/* text content */}
              <div>
                <p className='text-lg font-bold text-gray-700'>Unlimited color</p>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatem deserunt hic architecto, </p>
              </div>
            </div>
            {/* 6th Service */}
            <div data-aos="fade-right" data-aos-anchor-placement="center" data-aos-delay="500" className='flex items-center space-x-5'>
              {/* icons */}
              <div className='w-20 sm:w-20 h-14 rounded-md flex items-center justify-center flex-col bg-pink-500 bg-opacity-20'>
                <FaChess className='w-6 h-6 text-orange-400' />
              </div>
              {/* text content */}
              <div>
                <p className='text-lg font-bold text-gray-700'>Strategy Solution</p>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptatem deserunt hic architecto, </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services
