import Image from 'next/image'
import React from 'react'
import beautifulImage from "../../../public/assets/WhatsApp Image 2025-01-27 at 13.31.38_9386db992.jpg";
import maleModel from "../../../public/assets/WhatsApp Image 2025-01-27 at 13.25.18_5d504f3e.jpg";

export default function GetATicket() {
  return (
    <div className='w-screen h-screen max-lg:h-fit relative'>
        <Image 
            src={beautifulImage}
            alt=''
            className='w-full h-full object-cover object-center brightness-[0.3]'
        />

        <div className='flex  items-center justify-around h-[600px]  w-[60%] max-lg:w-[70%] left-[20%] max-lg:top-[1%] max-lg:left-[12%] absolute top-[20%]'>
            <div className='flex flex-col gap-12 max-lg:gap-4 h-full w-[400px] max-lg:p-4 max-lg:h-fit bg-white p-8 rounded-xl'>
                <h2 className='text-yellow-500 font-semibold text-2xl max-lg:text-base'>AFWL 2025 ENTRY & TICKET PURCHASE</h2>
                <p className='text-base text-black max-lg:text-xs'>Friday 11th October - Free entry for AFWL Exhibition, Adire Festival and UKATE</p>
                <p className='text-base text-black max-lg:text-xs'>Saturday 12th October - Free entry for AFWL Exhibition</p>
                <p className='text-base text-black max-lg:text-xs'>Purchase seat tickets for each of the catwalk showcases.</p>
                <button className='w-full max-lg:text-xs py-3 text-base tracking-wide text-yellow-500 border-yellow-500 border-2 rounded-2xl hover:bg-yellow-500 hover:text-white transition-all duration-500'>Get A Ticket</button>
            </div>

            <div className='flex flex-col gap-12 max-lg:gap-4 h-full maxlg w-[400px] rounded-xl overflow-hidden max-lg:hidden'>
                <Image 
                    src={maleModel}
                    alt='Male Model'
                    className='w-full h-full object-cover'
                />
            </div>
        </div>
    </div>
  )
}
