import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Main from './components/Main'


function App() {


  return (
    <>
     <div className='box-border m-0 font-Poppins'>
        <Navbar/>
        <Hero/>
        <Main/>
     </div>
    </>
  )
}

export default App
