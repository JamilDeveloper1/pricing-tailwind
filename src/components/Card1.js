import React from 'react'

import { FcCheckmark } from 'react-icons/fc'

const Card1 = () => {
  return (
    <div className='
    my-3
    w-full
md:w-1/5
    lg:
    w-1/5 rounded h-2/3 bg-white hover:border border-sky-600
   flex
    flex-col
    pl-5
    justify-around
    ' >
      <div>
        <h1 className='font-bold text-lg pt-3'>Free</h1>
        <p>Best for personal use</p>
        <h1 className='font-bold text-5xl'>$0 <span className='font-normal text-lg'>  /month</span></h1>
        <a href="#" className='
        block w-11/12 
        text-center
        bg-hello rounded
        text-white
        font-medium
        mt-3
        p-2
        '>Get started</a>
      </div>
<div className='flex flex-col gap-3'>
    <h1 className='pb-2'>What you get:</h1>
    <span className='content'>
    <FcCheckmark /> Task Management
    </span>
    <span className='content'>
    <FcCheckmark />Project Planning
    </span>
    <span className='content'>
    <FcCheckmark />Notifications and Reminders
    </span>
    <span className='content'>
    <FcCheckmark />What you get
    </span>
</div>
    </div>
  )
}

export default Card1
