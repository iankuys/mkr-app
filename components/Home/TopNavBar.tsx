import React from 'react';
import Link from "next/link";
export default function TopNavBar() {
  const navbarItems = ['Home', 'About', 'Pricing', 'Contact']
  return (
    <>
      <div className='navbar-container bg-emerald-700 p-7 flex flex-grow flex-row justify-between mx-auto'>
        <div className="content-container container mx-auto flex flex-row gap-5 justify-between">
          <div className='flex-grow'>LOGO</div>
          <div>Home</div>
          <div>Our Products</div>
          <div>Gallery</div>
          <div>About Us</div>
          <div>Contact</div>
        </div>
      </div>
    </>
  )
}
