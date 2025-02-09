import React from 'react'

export default function Schedule() {
  return (
    <section className='w-screen h-fit py-24 flex flex-col justify-center items-center'>
        <h2 className='text-white text-6xl max-lg:text-3xl '>SCHEDULE</h2>
        
        <div className='w-[85%] mx-auto mt-12 flex h-fit justify-between items-start'>
            
            <div className='w-[30%] flex flex-col gap-6 justify-center items-center'>
                <div className='w-full h-[150px] bg-yellow-500 flex items-center justify-center'>
                    <h2 className='text-xl max-lg:p-2 text-white font-bold tracking-widest'><span className='text-4xl max-lg:text-base'>12PM - 8PM</span><br/>Friday 11th October</h2>
                </div>
                <h4 className='text-sm text-white '>UI Africa Trade Expo 2025</h4>
                <h4 className='text-sm text-white '>AFWL 2025 Exhibitors</h4>
                <h4 className='text-sm text-white '>Food & Drink</h4>
                <h4 className='text-sm text-white '>Adire Festival</h4>
                <h4 className='text-sm text-white '>AFWL Awards</h4>
            </div>

            <div className='w-[30%] flex flex-col gap-6 justify-center items-center'>
                <div className='w-full h-[150px] bg-yellow-500 flex items-center justify-center'>
                    <h2 className='text-xl max-lg:p-2 text-white font-bold tracking-widest'><span className='text-4xl max-lg:text-base'>12PM - 8PM</span><br/>Friday 11th October</h2>
                </div>
                <h4 className='text-sm text-white '>AFWL 2025 Exhibitors </h4>
                <h4 className='text-sm text-white '>Food & Drink</h4>
                <h4 className='text-sm text-white '>1pm - Mary Martin London Catwalk Showcase</h4>
                <h4 className='text-sm text-white '>4pm - Best in Africa Catwalk Showcase</h4>
                <h4 className='text-sm text-white '>7pm - VIP Celebrity Catwalk Showcase</h4>
            </div>

            <div className='w-[30%] flex flex-col gap-6 justify-center items-center'>
                <div className='w-full h-[150px] bg-yellow-500 flex items-center justify-center'>
                    <h2 className='text-xl max-lg:p-2 text-white font-bold tracking-widest'><span className='text-4xl max-lg:text-base '>12PM - 8PM</span><br/>Friday 11th October</h2>
                </div>
                <h4 className='text-sm text-white '>AFWL 2024 x World Vision After Party</h4>
            </div>            
        </div>      
    </section>
  )
}
