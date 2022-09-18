import React from 'react'
import Navbar from '../components/navbar'
import Drawer from '../components/drawer'
import Slideshow from '../components/slideshow'

export default function Homepage() {
  return (
    <div>
        <Drawer />
        <Navbar />
        <Slideshow />
    </div>
  )
}
