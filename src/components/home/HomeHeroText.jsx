import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1]  h-screen flex  items-center justify-center  md:justify-center text-white' >
      <div className=' flex flex-col  text-center gap-2  '>
         
            <div  className='text-[9.5vw]  uppercase leading-[9vw]  flex justify-center items-center' >The spark for</div>
            <div  className='text-[9.5vw] uppercase leading-[9vw] flex justify-center   ' >all 
                <div className='h-[8vw]  w-[16vw] rounded-[60px] -mt-1 overflow-hidden'><Video/>
                </div> things</div>
            <div  className='text-[9.5vw] uppercase  leading-[9vw]  flex justify-center items-center'>creative</div>
    </div>
    </div>
    
  )
}

export default HomeHeroText 