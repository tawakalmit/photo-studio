import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Homepage from '../pages/homepage'

export default function Base() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
        </Routes>
    </BrowserRouter>
  )
}
