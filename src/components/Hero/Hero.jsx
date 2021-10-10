import React from "react";

export default function Hero() {
  return (
    <div className="bg-red-50 relative">
      <div className="container flex flex-col lg:flex-row items-center gap-12 mt-14 lg:mt-28">
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2 className="text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
            hello
          </h2>
          <h2 className="text-3xl lg:text-5xl text-center lg:text-left mb-6">
            World
          </h2>
        </div>
      </div>
    </div>
  );
}
