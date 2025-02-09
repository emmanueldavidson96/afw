import Image from 'next/image'
import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoPersonCircleSharp } from "react-icons/io5";

export default function Header() {
  return (
    <header className='w-screen h-[120px] flex items-center absolute top-0 left-0 bg-transparent z-50'>
        <div className='w-[85%] mx-auto h-fit flex justify-between relative'>
            
            <nav className=' h-fit flex gap-8 items-center w-[40%] max-lg:hidden justify-start'>
                <GiHamburgerMenu size={30} className='cursor-pointer'/>
                <p className='uppercase text-sm tracking-widest cursor-pointer hover:text-yellow-500 transition-all duration-700'>Gallery</p>
                <p className='uppercase cursor-pointer text-sm tracking-widest hover:text-yellow-500 transition-all duration-700'>About</p>
                <p className='uppercase cursor-pointer text-sm tracking-widest hover:text-yellow-500 transition-all duration-700'>News</p>         
            </nav>

            <p className='text-6xl font-extralight tracking-widest w-[20%] max-lg:w-full text-center ml-8'>AFWL</p>
            
            <nav className='h-fit flex gap-8 items-center w-[40%] justify-end max-lg:hidden'>     
                <p className='uppercase text-sm tracking-widest cursor-pointer hover:text-yellow-500 transition-all duration-700'>Registrations</p>           
                <p className='uppercase text-sm tracking-widest cursor-pointer hover:text-yellow-500 transition-all duration-700'>Showcasings</p>
                <p className='uppercase text-sm tracking-widest cursor-pointer text-yellow-500 hover:text-yellow-500 transition-all duration-700'>Subscribe</p>
                <button className='bg-yellow-500 text-white text-xs py-2 px-5 rounded-md tracking-wide'>LSE</button>
                <IoPersonCircleSharp size={30} className='cursor-pointer text-yellow-500'/>
            </nav>
        </div>       
    </header>
  )
}
