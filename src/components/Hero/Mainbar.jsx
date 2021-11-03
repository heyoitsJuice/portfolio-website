import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Mainbar() {
  return (
    <div>
      <Link
        to="/"
        className="my-4 lg:text-6xl text-5xl hover:underline font-medium font-pacifico flex justify-center text-center items-center"
      >
        <FaGithub className="w-15 h-15 mx-2" />
        heyoitsJuice
      </Link>
      <div className="my-14 mx-2 text-2xl font-light font-overpass flex justify-center text-center items-center">
        is a growth driven individual based in San Diego, California with a huge
        love for technology, which has been ingrained within him since
        adolescence. He is a second-generation Filipino American in pursuit of
        opportunities to break into the tech space in order to hopefully
        contribute to software/applications that can better his surroundings!
      </div>
      <div className="my-14 mx-2 text-3xl font-patrick flex justify-center text-center items-center">
        <p className=" font-patrick">"Around here, however, we don't look backwards for very long.
        <p className=" font-patrick font-semibold">
          We keep moving forward,
        </p>
        opening up new doors and doing new things, because we're curious... <br/>and
        curiosity keeps leading us down new paths." <br />- Walt Disney
        </p>
      </div>
    </div>
  );
}
