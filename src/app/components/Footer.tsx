import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className='w-screen h-fit py-24'>
        <div className='justify-between w-[85%] mx-auto flex max-lg:flex-col max-lg:gap-10'>
            
            <div className='flex flex-col gap-5 w-[22%] max-lg:w-full'>
                <h3 className='text-3xl text-white font-semibold'>CONTACT</h3>
                
                <div className='flex items-center gap-5'>
                    <FaInstagram 
                        size={30}
                        className='text-white cursor-pointer '
                    />
                    <FaPinterest 
                        size={30}
                        className='text-white cursor-pointer '
                    />
                    <FaFacebook 
                        size={30}
                        className='text-white cursor-pointer '
                    />                                        
                </div>

            </div>

            <div className='flex flex-col gap-5 w-[22%] max-lg:w-full'>
                <h3 className='text-3xl text-white font-semibold '>SUPPORT</h3>
                
                <div className='flex flex-col gap-5'>
                    <p className='cursor-pointer text-sm'>Partnerships</p>
                    <p className='cursor-pointer text-sm'>Sponsorship</p>                                                  
                </div>
            </div>

            <div className='flex flex-col gap-5 w-[22%] max-lg:w-full'>
                <h3 className='text-3xl text-white font-semibold'>NAVIGATION</h3>                
                <div className='flex flex-col gap-5'>
                    <p className='cursor-pointer text-sm'>About</p>
                    <p className='cursor-pointer text-sm'>Showcasing</p>
                    <p className='cursor-pointer text-sm'>Registrations</p>
                    <p className='cursor-pointer text-sm'>News</p>                                                   
                </div>
            </div>

            <div className='flex flex-col gap-5 w-[22%] max-lg:w-full'>
                <h3 className='text-3xl text-white font-semibold'>EXTERNAL LINKS</h3>                
                <div className='flex flex-col gap-5'>
                    <p className='cursor-pointer text-sm'>Africa Fashion Week Nigeria</p>
                    <p className='cursor-pointer text-sm'>Africa Fashion Week Abuja</p>
                    <p className='cursor-pointer text-sm'>Africa Ethically</p>                                                   
                </div>
            </div>
        </div>
    </footer>
  )
}
