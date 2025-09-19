import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
        <video autoPlay muted loop  className='h-full w-full object-cover' src='/videos/bg.mp4'/>
    </div>
  )
}

export default Video