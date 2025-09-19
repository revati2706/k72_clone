import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
const HomeBottomText = () => {
     const [Time, setTime] = useState(null)

     useEffect(() => {
       const update=()=>{
        const now=new Date()
        const format=now.toLocaleTimeString("en-CA",{
          hour12:false,
          hour:'2-digit',
          minute:'2-digit',
          second:'2-digit',
          timeZone:'America/Toronto'

        });
        setTime(format)
       }
       
       update()
       const interval=setInterval(update,1000);
       return ()=>clearInterval(interval);
     }, [])
     
  return (
    <div className=''>
    <div className=' lg:w-[15vw] w-[30vw]  text-white text-sm ml-auto '><p className='  text-s leading-6 indent-[5rem] mb-4  font-semibold '> K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p></div>
      <div className=' mb-4 flex items-center justify-center gap-2 text-white'>
      
     <Link to='/work'><div className=' text-center pb-0 px-5 flex items-center justify-center text-[6vw] leading-none border-4 font-bold border-white hover:border-[#bafd03] rounded-full uppercase hover:text-[#c7fd03]'><h1 className='my-2'>Work</h1></div></Link>
    
    <Link to='/agency'><div className='  pb-0 px-5 flex items-center justify-center text-[6vw] leading-none border-4 font-bold border-white hover:border-[#bafd03] rounded-full uppercase hover:text-[#c7fd03]'><h1 className='my-2 '>Agency</h1></div></Link>
    
     
    </div>
     
      <div className="fixed bottom-2 left-6 justify-around items-center flex text-white text-sm font-[font2]">
         <span className='font-semibold lg:text-[1.3vw] md:text-[1vw]'>MONTREAL_{Time}</span>
</div>

      
    </div>
    
  )
}

export default HomeBottomText