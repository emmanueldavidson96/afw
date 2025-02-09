import Image from 'next/image'
import React from 'react'
import stayUpdatedImage from "../../../public/assets/Africa Fashion Week London 2024-431.jpg"


export default function StayUpdated() {
  return (
    <section className='h-screen w-screen max-lg:h-fit relative'>
        <Image 
            src={stayUpdatedImage}
            alt='Stay Updated Image'
            className='w-full h-full object-cover'
        />
        <div className='bg-black opacity-85 absolute top-0 left-0 w-full h-full '>
            <div className='flex flex-col gap-6 w-[700px] max-lg:w-[300px] absolute bottom-[20%] right-[5%]'>
                <h2 className='text-4xl text-white font-semibold max-lg:text-xl'>STAY UPDATED</h2>
                <p className='text-base max-lg:text-xs text-white/50 leading-8'>
                    Stay in the loop with all the latest updates from Africa Fashion Fusion 2025! Be the first to know about 
                    featured designers, event schedules, ticket releases, and exclusive behind-the-scenes content. 
                    Sign up for our newsletter and follow us on social media for real-time 
                    updates and sneak peeks. Don't miss out on the chance to immerse yourself in the 
                    glamour and creativity of African fashion—stay connected and inspired!
                </p>
                <button className='w-fit h-fit py-5 px-20 max-lg:px-8 max-lg:py-2 max-lg:text-xs bg-yellow-500 hover:bg-yellow-600 transition-all duration-700 rounded-xl text-xl tracking-widest text-white'>Subscribe</button>
            </div>
        </div>
    </section>
  )
}
