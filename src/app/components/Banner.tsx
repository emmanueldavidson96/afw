import React from 'react'
import bannerImg from "../../../public/assets/WhatsApp Image 2025-01-27 at 11.35.39_d1d6b78b222.jpg";
import Image from 'next/image';

export default function Banner() {
  return (
    <div className='w-screen h-screen relative'>
        <Image src={bannerImg} alt='African Fashion Week Banner Image' 
            className='w-full h-full object-cover object-top '
        />
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80'>
            <div className='flex w-[900px] max-lg:w-[400px] flex-col gap-4 absolute bottom-[25%] right-[5%] z-30'>
              <h2 className='text-8xl max-lg:text-5xl uppercase font-black text-white text-right'>African Fashion Week London</h2>
              <p className='text-2xl max-lg:text-lg tracking-widest text-white text-right'>where culture and creativity collide...</p>
              <div className='flex gap-8 items-center justify-end'>
                <button className='w-fit px-16 max-lg:px-8 py-5 max-lg:py-3 max-lg:text-xs bg-yellow-500 text-white text-base rounded-md hover:scale-110 transition-all duration-700'>Register Now</button>
                <button className='w-fit px-16 max-lg:px-8 py-5 max-lg:py-3 max-lg:text-xs hover:scale-110 transition-all duration-700 bg-white text-yellow-500 text-base rounded-md'>Get Ticket</button>
              </div>
            </div>
        </div>
    </div>
  )
}
