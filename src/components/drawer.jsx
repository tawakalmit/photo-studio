import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"

export default function Drawer() {
  return (
    <div className="drawer absolute z-50 md:hidden">
    <input id="my-drawer" type="checkbox" className="drawer-toggle absolute top-0 right-0" />
    <div className="drawer-content absolute top-5 right-5">
        {/* <!-- Page content here --> */}
        <label htmlFor="my-drawer" className="drawer-button"><GiHamburgerMenu size={30} /></label>
    </div> 
    <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        {/* <!-- Sidebar content here --> */}
            <li><a href="">Gallery</a></li>
            <li><a href="">Booking</a></li>
            <li><a href="">Location</a></li>
            <li><a href="">Contact</a></li>
        
        </ul>
    </div>
    </div>
  )
}
