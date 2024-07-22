import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
function App() {


  return (
    <>
     <div className='box-border m-0 font-Poppins'>
        <Navbar/>
        <Hero/>
     </div>
    </>
  )
}

export default App
