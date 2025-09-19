import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from "react";
import { useLoaderData, useLocation } from 'react-router-dom';
const Stairs = (props) => {
   const currentPath= useLocation().pathname
    const stairParentRef = useRef(null)
    const pageRef=useRef(null)
  useGSAP(function(){
    const tl=gsap.timeline()

    tl.to(stairParentRef.current,{display:'block'})
    tl.from('.stair',{
      height:0,
      duration:1,
      stagger:{
        amount:-0.25
      }
    })

    tl.to('.stair',{
      y:'100%',
      duration:1,
      stagger:{
        amount:-0.25
      }
    })

    tl.to(stairParentRef.current,{display:'none'})

    tl.to('.stair',{
        y:'0%',
    })

    tl.from(pageRef.current,{
        opacity:0,
        duration:1,
    })

  },[currentPath])
  return (
    <div>
    <div ref={stairParentRef} className='h-screen  fixed z-10 top-0 w-full'>
     <div className='h-full flex w-full '>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
      <div className='stair h-full w-1/5 bg-black'></div>
    </div>
    </div>
    <div ref={pageRef}>{props.children}</div>
    </div>

    
  )
}

export default Stairs