import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='h-[4.4rem] flex shadow-md  px-9 py-5 w-ful'>
      <img src={logo} alt="" className='max-w-24'/>
      
    </div>
  )
}

export default Navbar