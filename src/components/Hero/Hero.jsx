import React from "react";
import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";

export default function Hero() {
  return (
    <div className="lg:h-screen bg-gradient-to-r from-blue-200 via-yellow-200 to-purple-200">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 py-14">
        <div className="border-10 col-span-12 bg-yellow-100 lg:col-span-4 rounded-2xl p-4 text-center">
          <Sidebar />
        </div>
        <div className="col-span-12 bg-orange-100 lg:col-span-8 rounded-2xl pt-8 text-center">
          <Mainbar />
        </div>
      </div>
      {/* Turn these into buttons w/ */}
      {/* <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 py-20">
        <div className=" text-center font-patrick border-2 text-5xl border-gray-900 col-span-12 lg:col-span-3 rounded-2xl p-4 bg-yellow-100">
          About Me
        </div>
        <div className=" text-center font-patrick border-2 text-5xl border-gray-900 col-span-12 lg:col-span-3 rounded-2xl p-4 bg-yellow-100">
          Blog
        </div>
        <div className=" text-center font-patrick border-2 text-5xl border-gray-900 col-span-12 lg:col-span-3 rounded-2xl p-4 bg-yellow-100">
          Works
        </div>
        <div className=" text-center font-patrick border-2 text-5xl border-gray-900 col-span-12 lg:col-span-3 rounded-2xl p-4 bg-yellow-100">
          Contact
        </div>
      </div> */}
    </div>
  );
}
