import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
// import About from './components/about';
// import Contact from './components/contact';

export const Path = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/about" element={<About/>}></Route> */}
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        {/* <Route path="/contact" element={<Contact/>}></Route> */}
    </Routes>
    </BrowserRouter> 
  )
}
export default Path;