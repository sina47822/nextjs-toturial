
'use client';
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import About from '@/components/Home/About/About'
import ClientReviews from '@/components/Home/ClientReviews/ClientReviews'
import Feature from '@/components/Home/Feature/Feature'
import Pricing from '@/components/Home/Pricing/Pricing'
import Services from '@/components/Home/Services/Services'
import Team from '@/components/Home/Team/Team'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {

  useEffect(()=>{
    const initAOS = async()=>{
      await import("aos");
      AOS.init({
        duration:1000,
        easing:"ease",
        once:true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, [])
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Feature />
      <Services />
      <ClientReviews />
      <Team /> 
      <Pricing />
    </div>
  )
}

export default Home