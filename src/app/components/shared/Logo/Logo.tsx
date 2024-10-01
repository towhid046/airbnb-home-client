import React from 'react'
import { FaAirbnb } from "react-icons/fa";

const Logo = () => {
  return (
    <div className='text-[#FF385C] flex items-center gap-1.5 cursor-pointer'>
        <FaAirbnb className='text-3xl'/>
        <p className='text-2xl font-bold'>airbnb</p>
    </div>
  )
}

export default Logo