import React from 'react'
import { FcCheckmark } from 'react-icons/fc'

const Card2 = () => {
  return (
    <div className='
    w-full
    my-3
    md:w-1/5
    lg:
    w-1/5 rounded h-2/3 bg-white hover:border border-sky-600
    flex
    flex-col
    pl-5
    justify-around
    ' >
      <div>
        <h1 className='font-bold text-lg pt-3'>Starter</h1>
        <p>Best for personal use</p>
        <h1 className='font-bold text-5xl'>$8 <span className='font-normal text-lg'>  /month</span></h1>
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
    <FcCheckmark /> Kanban Boards
    </span>
    <span className='content'>
    <FcCheckmark />Gantt Charts
    </span>
    <span className='content'>
    <FcCheckmark />Resource Allocation
    </span>
    <span className='content'>
    <FcCheckmark />Calendar Integration
    </span>
</div>
    </div>
  )
}

export default Card2
