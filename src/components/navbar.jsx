import React, {useState, useEffect} from 'react'

export default function Navbar() {

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 10) {
        setColor(true);
        } else {
        setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'fixed z-40 w-full h-20 bg-[#f1c40f] flex items-center' : 'fixed z-40 w-full h-20 bg-transparent flex items-center'}>
        <div className='w-11/12 mx-auto flex justify-between'>
        <img src={color ? "/attachment_96681121.png" : "/attachment_96681121_white.png"} alt="logo" className='w-24' />
        <div className='hidden flex justify-around items-center md:flex w-3/12'>
            <a href="" className={color ? 'text-[#2c3e50]' : "text-white" }>Gallery</a>
            <a href="" className={color ? 'text-[#2c3e50]' : "text-white" }>Booking</a>
            <a href="" className={color ? 'text-[#2c3e50]' : "text-white" }>Location</a>
            <a href="" className={color ? 'text-[#2c3e50]' : "text-white" }>Contact</a>
        </div>
        </div>
    </div>
  )
}
