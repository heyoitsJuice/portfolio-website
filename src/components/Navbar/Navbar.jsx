import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="relative bg-blue-nav" role='navigation'>
        <div className="maxw-7xl mx-auto flex items-center justify-between shadow-sm">
          {/* Left Nav  */}
          <Link to='/' className="flex ml-2 py-6 px-2 font-overpass text-white font-bold text- text-2xl hover:underline"> JUSTIN CLENISTA </Link>

          {/* Right Nav */}
          <div className="items-center mr-2 py-4 px-3 hidden md:flex">
            <Link to='/' className="px-4 font-overpass text-white font-semibold text-sm hover:underline subpixel-antialiased"> about </Link>
            <Link to='/' className="px-4 font-overpass text-white font-semibold text-sm hover:underline subpixel-antialiased"> blog </Link>
            <Link to='/works' className="pl-4 pr-6 font-overpass text-white font-semibold text-sm hover:underline subpixel-antialiased"> works </Link>
            <Link to='/' className="px-3 py-2 font-overpass border-2 rounded text-white font-semibold text-sm hover:underline subpixel-antialiased"> contact </Link>
          </div>

          {/* Mobile Right Nav */}
          <div className="md:hidden flex items-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white" // This changes the color of the icon
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}
