import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Service1 from './Service1'
import Service2 from './Service2'
import Service3 from './Service3'

function Rot() {
  return (
    <div>
        
      <BrowserRouter>
      <Link to="/home" className='text-dark fw-bold me-3'>Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Services">Services</Link>
      
        <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}>
          <Route path='/services/service1' element={<Service1/>}></Route>
          <Route path='/services/service2' element={<Service2/>}></Route>
          <Route path='/services/service3' element={<Service3/>}></Route>
        </Route>
        
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Rot
