import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'

const Cards = () => {
  return (
    <div className='w-full h-2/3 gap-5 md:gap-3  lg:flex items-center justify-center gap-3 ' >
      <Card1/>
      <Card2 />
      <Card3/>
      <Card4/>
    </div>
  )
}

export default Cards
