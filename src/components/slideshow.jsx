import React from 'react'

export default function Slideshow() {
  return (
    <div className="carousel w-full h-screen md:flex">
    <div id="slide1" className="carousel-item relative w-full">
        <img src="/bg-background.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide4" className="btn btn-circle">❮</a> 
        <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide2" className="carousel-item relative w-full">
        <img src="/stock-photo-styleshootbb-bau-306854501.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide1" className="btn btn-circle">❮</a> 
        <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide3" className="carousel-item relative w-full">
        <img src="/Apa-Sih-Tujuan-Melakukan-Foto-Pre-wedding-1280x720.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide2" className="btn btn-circle">❮</a> 
        <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
    </div> 
    <div id="slide4" className="carousel-item relative w-full">
        <img src="/bg-background copy.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href="#slide3" className="btn btn-circle">❮</a> 
        <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
    </div>
    </div>
  )
}
