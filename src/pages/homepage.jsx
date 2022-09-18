import React from 'react'
import Navbar from '../components/navbar'
import Drawer from '../components/drawer'
import Slideshow from '../components/slideshow'
import CustomCard from '../components/customcard'

export default function Homepage() {
  return (
    <div>
        <Drawer />
        <Navbar />
        <Slideshow />
        <div className='w-10/12 mx-auto flex flex-wrap justify-around'>
          <CustomCard 
          src="/studio-foto-jakarta.width-800.jpegquality-80.jpg"
          headline="Photo Studio"
          desc="Capture your best moment with us"
          />

          <CustomCard 
          src="/7569b97787209b47a5660587e6627659.jpg"
          headline="Outdoor Photo"
          desc="Capture your moment in the outdoor session"
          />

          <CustomCard 
          src="/studio-foto-jakarta.width-800.jpg"
          headline="Photo Print"
          desc="Print your photo in the best printing material"
          />
        </div>
    </div>
  )
}
