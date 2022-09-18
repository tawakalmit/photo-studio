import React from 'react'

export default function CustomCard({src, headline, desc}) {
  return (
    <div className='my-10 rounded-xl w-72 h-96 shadow-md bg-[#ecf0f1] cursor-pointer hover:opacity-70'>
        <img src={src} alt="studio" className='rounded-t-xl' />
        <p className='p-1 pt-3 text-2xl font-bold text-center'>{headline}</p>
        <p className='p-1 text-center'>{desc}</p>
    </div>
  )
}
