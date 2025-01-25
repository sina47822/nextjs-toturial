import React from 'react'
import ClientReviewCard from './ClientReviewCard'

const ClientReviews = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        {/* Heading */}
        <h1 className='text-center text-2xl text-blue-950 font-bold'>What Our Client Says</h1>
        {/* Subheading */}
        <p className='text-center mt-3 font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, harum enim. Maiores in totam voluptatum recusandae! Ipsum dolorem, voluptatem cupiditate deleniti a reiciendis incidunt aliquam culpa, autem, dolore quae debitis.
        </p>
        {/* grid */}
        <div className='grid grid-cols01 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto'>
            <div data-aos="zoom-in" data-aos-anchor-placement="center">
                <ClientReviewCard image="/images/u1.jpg" name="Jesica Doe" rating="4.7" />
            </div>
            <div data-aos="zoom-in" data-aos-anchor-placement="center" data-aos-delay="100">
                <ClientReviewCard image="/images/u2.jpg" name="John Doe" rating="4.5" />
            </div>
            <div data-aos="zoom-in" data-aos-anchor-placement="center" data-aos-delay="200">
                <ClientReviewCard image="/images/u3.jpg" name="Sasuke Uchiha" rating="4.3" />
            </div>
            <div data-aos="zoom-in" data-aos-anchor-placement="center" data-aos-delay="300">
                <ClientReviewCard image="/images/u4.jpg" name="Boruto Uzumaki" rating="4.9" />
            </div>
        </div>
    </div>
  )
}

export default ClientReviews
