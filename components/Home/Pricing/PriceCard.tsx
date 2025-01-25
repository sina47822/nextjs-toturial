import React from 'react'

type Props ={
    time:string;
    price:string;
}
const PriceCard = ({price, time} : Props) => {
  return (
    <div className='bg-white rounded p-8 relative border-t-4 border-rose-300'>
      <h1 className='text-sky-500 text-xl font-bold'>{time} Membership</h1>
      <p className='mt-4 text-gray-600 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, porro commodi iusto </p>
      {/* Price */}
      <div className='mt-8'>
        <div className='text-gray-700 font-semibold text-lg'>
            <span className='text-4xl font-bold text-black'>${price}</span>/ Month
        </div>
        {/* button */}
        <div className='mt-12'>
        <a href="#_" className="px-10 py-2 text-base font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
            Upgrade Now
        </a>
        </div>
      </div>
    </div>
  )
}

export default PriceCard
