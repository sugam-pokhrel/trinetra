"use client";
import React, { useEffect } from "react";


function Navbar() {
 
  return (
    <div className="px-20 h-[10vh] flex bg-white justify-between text-[20px]  items-center  border-b-2 border-black-300  fixed top-0 w-full z-50">
      <div className="flex items-center">
        <div
          className="logo flex items-center space-x-2"
         
        >
          <span className={`text-3xl font-semibold`}> TriNetra</span>
        </div>
      </div>
      <div className="flex space-x-4 justify-center items-center gap-10">
        <a href="#" className="text-black">
          Home
        </a>
        <a href="#features" className="text-black">
          Features
        </a>
        {/* <a href="#" className="text-black">
          About
        </a> */}
        <button
          className="p-2 px-[15px] bg-gray-300 rounded-md"
         
        >
        
        </button>
      </div>
    </div>
  );
}

export default Navbar;
