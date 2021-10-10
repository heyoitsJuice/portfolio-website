import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="bg-gray-600 relative">
        <div className="maxw-7xl mx-auto flex items-center justify-between">
          {/* Left Nav  */}
          <div className="flex ml-2 py-5 px-2"> Justin Clenista </div>

          {/* Right Nav */}
          <div className="items-center mr-2 py-4 px-3 hidden md:flex">
            <div className="px-2"> About </div>
            <div className="px-2"> Blog </div>
            <div className="px-2"> Works </div>
            <div className="px-2"> Contact </div>
          </div>
          
          {/* Mobile Right Nav */}
          <div className="md:hidden flex items-center mr-3">
              hamburger menu
          </div>

        </div>
      </nav>
    </div>
  );
}
