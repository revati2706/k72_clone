import React, { startTransition, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/common/Nav/Navbar'
import FullScreenNav from './components/common/Nav/FullScreenNav'
import Contact from './pages/Contact'
import Blog from './pages/Blog'


const App = () => {
  return (
   <div className='selection:bg-[#c5e72e] selection:text-black'>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/agency' element={<Agence/>}/>
       <Route path='/work' element={<Projects/>}/>
       <Route path='/contact' element={<Contact/>}></Route>
       <Route path='/blog' element={<Blog/>}></Route>
    </Routes>
   </div>
  )
}

export default App