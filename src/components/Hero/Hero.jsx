import React from "react";
import MemoTanbata from "../Images/Tanbata";

export default function Hero() {
  return (
    <div className="w-full flex flex-row justify-between bg-gradient-to-r from-yellow-100 via-green-100 to-orange-200 ...">
      <div className=" flex flex-col">
        <div className="text-7xl font-semibold pt-48 pl-4">Hello</div>
        <div className="text-7xl font-semibold pt-4 pl-4">World</div>
        <div className="pt-8 pl-4 md:w-80 opacity-80">
          I'm an aspiring software engineer based in San Diego looking for
          opportunities to create and contribute to applications that make a difference!
        </div>
      </div>
      {/* Replace bottom div with an image haha */}
      <MemoTanbata className="flex" />
    </div>
  );
}
