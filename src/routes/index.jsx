import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from '../pages/homepage'
import Gallery from '../pages/gallery'
import Booking from '../pages/booking'

export default function Base() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/booking' element={<Booking />} />
        </Routes>
    </BrowserRouter>
  )
}
