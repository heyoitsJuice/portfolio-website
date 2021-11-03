import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div className="bg-blue-nav relative">
        <div className=" max-w-7xl h-full">
          <div className="absolute flex py-6 px-2 text-center items-center justify-center font-overpass text-white text-base font-bold"> 
            Copyright © 2021 Justin Clenista All rights reserved. 
          </div>
        </div>
      </div>
    </div>
  );
}
