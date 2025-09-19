import React from 'react'
import NavFooter from '../Nav/NavFooter'

const Footer = () => {
  return (
    <div className='w-full flex  relative bg-black md:h-[829px] lg:h-[580px] -mt-10 text-white text-center py-4'>
        <div className='flex justify-end  w-full  '>
           
            <div className='border-2 top-0 right-0 border-white rounded-full px-[20px] w-auto h-[80px] flex justify-center pt-5  items-center hover:text-[#c0e41f] hover:border-[#c7fa0f]'><h2 className='leading-0 uppercase text-[9vh] font-[font2]'>CONTACT us</h2>
            
            </div>
           
        </div>
       
        <NavFooter socialPosition='top-left'/>
    </div>
  )
}

export default Footer