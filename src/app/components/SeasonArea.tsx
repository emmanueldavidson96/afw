import Image from 'next/image'
import React from 'react'
import girlImage from "../../../public/assets/WhatsApp Image 2025-01-27 at 11.35.40_a619a964.jpg";

export default function SeasonArea() {
  return (
    <div className='w-screen h-screen max-lg:h-fit max-lg:py-12 flex items-center'>
        <div className='flex max-lg:flex-col items-center justify-between w-[90%] mx-auto'>
            <div className='flex flex-col gap-4 w-[45%] max-lg:w-full'>
                <h4 className='text-yellow-500 tracking-widest text-base uppercase font-semibold'>season 14</h4>
                <h3 className='text-2xl text-white font-extralight'>11 - 12 OCTOBER 2025</h3>
                <h2 className='text-4xl font-bold text-white'>KESSINGTON & CHELSEA CONFERENCE & EVENT CENTRE, HORNTON STREET, LONDON, W8 7KA</h2>
                <p className='text-sm leading-8 text-white/50'>Experience the vibrancy and elegance of African fashion at the African Fashion Fusion 2025, 
                    taking place at the Kessington and Chelsea Conference and Events Centre, Hornton Street, London. 
                    This one-of-a-kind event celebrates the rich heritage, creativity, and innovation of 
                    African designers and artisans, showcasing stunning collections that blend traditional 
                    craftsmanship with modern trends. From bold Ankara prints and flowing kaftans to avant-garde couture, 
                    the runway will be alive with color, culture, and style. Attendees can enjoy live music, 
                    cultural performances, and exclusive opportunities to meet designers and purchase unique pieces.
                </p>
                <p className='text-sm text-white/50 leading-8'>
                    Whether you're a fashion enthusiast or a lover of African culture, this event 
                    promises to be an unforgettable celebration of diversity and design excellence. 
                    Network with industry leaders, immerse yourself in the beauty of African artistry, 
                    and take part in a movement that redefines global fashion narratives. Save the date and join us for an 
                    inspiring journey through the heart of African fashion in the heart of London!
                </p>

            </div>
            <div className='w-[45%] max-lg:w-full'>
                <Image 
                    src={girlImage}
                    alt='Fashion Image of a Lady'
                    className='h-[700px] w-auto '
                />
            </div>

        </div>

    </div>
  )
}
