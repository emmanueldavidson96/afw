import Image from 'next/image'
import React from 'react'
import maleDesignerImg from "../../../public/assets/WhatsApp Image 2025-01-27 at 13.25.18_2e9db034.jpg"
import femaleDesignerImg from "../../../public/assets/WhatsApp Image 2025-01-27 at 11.35.39_a0a4c82b.jpg"
import femaleImg from "../../../public/assets/WhatsApp Image 2025-01-27 at 11.35.40_6fd4997a.jpg"
import femaleImage from "../../../public/assets/IMG_8490.jpg"

export default function DiscoveryDevelopmentRepresentation() {
  return (
    <section className='w-screen h-[800px] grid grid-cols-4 relative '>
        <div className='flex overflow-hidden h-full'>
            <Image 
                src={maleDesignerImg}
                alt='Male model'
                className='w-full h-full object-cover'
            />
        </div>

        <div className='flex overflow-hidden h-full'>
            <Image 
                src={femaleDesignerImg}
                alt='Male model'
                className='w-full h-full object-cover'
            />
        </div>

        <div className='flex overflow-hidden h-full'>
            <Image 
                src={femaleImg}
                alt='Male model'
                className='w-full h-full object-cover'
            />
        </div>

        <div className='flex overflow-hidden h-full'>
            <Image 
                src={femaleImage}
                alt='Male model'
                className='w-full h-full object-cover'
            />
        </div>

        <div className='bg-black opacity-70 absolute w-full h-full flex items-center justify-center top-0 left-0'>
            <h2 className='text-5xl max-lg:text-3xl uppercase text-white font-semibold tracking-widest max-lg:ml-6'>Discovery, Development & <span className='text-yellow-500 '>Representation</span></h2>
        </div>
        


    </section>
  )
}
