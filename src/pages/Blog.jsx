import React from 'react'
import Navbar from '../components/common/Nav/Navbar'
import Footer from '../components/common/Footer/Footer'

const Blog = () => {
  return (
    <div className='h-screen w-screen  font-[font2]'>
        <Navbar/>
         <div className=' w-full'>
            <div className='pt-[30vh] p-12'><h2 className='text-[10vw] uppercase font-[font2]'>Blog</h2></div>

         </div>

         <div className='border-t-2 -mt-24 flex -gap-4 h-[70vw] w-full '>
            <div className='flex items-center flex-col m-3'>
                <div className='h-[30vw] rounded-[50px] overflow-hidden'>
                    <img className='h-full w-full object-cover ' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" alt="" />
                </div>
                
                <div className='flex flex-col justify-around '>
                    <h3 className='flex items-center text-2xl '><div className='h-2 w-2 rounded-full bg-black'></div>May 9 2025</h3>
                    <h1 className='text-4xl leading-none text-left'>Conseil &amp; relation client: un duo qui ne se briefe pas, qui se construit</h1>
                </div>
                <button></button>
            </div>
            
             <div className='flex items-center flex-col m-3'>
                <div className='h-[30vw] overflow-hidden rounded-[50px]'> 
                <img className='h-full w-full object-cover' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-1280x960.png" alt="" />
                </div>
                <div className='flex flex-col justify-around '>
               
                    <h3 className='flex items-center text-2xl '><div className='h-2 w-2 rounded-full bg-black'></div>May 9 2025</h3>
                    <h1 className='text-4xl leading-none text-left'>Conseil &amp; relation client: un duo qui ne se briefe pas, qui se construit</h1>
                </div>
                <button></button>
            </div>
         </div>
        <Footer/>
    </div>
  )
}

export default Blog