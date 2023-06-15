import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full bg-white h-15 border-b flex items-center justify-between'>
      <ul>
        <li className='inline-block pl-5'><a href="#" className='text-4xl font-bold italic text-blue-500'>TailwindCSS</a></li>
        <li className='list'><a href="#">Product</a></li>
        <li className='list'><a href="#">Solutions</a></li>
        <li className='list'><a href="#">Resources</a></li>
        <li className='list'><a href="#">Pricing</a></li>
      </ul>

<div className='pr-8 flex gap-5 items-center justify-center'>
    <a href="#">Sign Up</a>
    <a href="#" className='bg-hello block w-15 leading-8 text-center rounded text-white font-medium hover:bg-indigo-700'>Log In</a>
</div>

</div>
  )
}

export default Navbar
