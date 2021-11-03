import React from "react";
import { Link } from "react-router-dom";
import { FaTwitterSquare, FaLinkedin, FaMedium } from "react-icons/fa";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

export default function Sidebar() {
  const DelayIntro = () => {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
      const timeout = setTimeout(() => {
        setShow(true);
      }, 10000);

      return () => clearTimeout(timeout);
    }, [show]);

    if (!show) return null;

    return (
      <>
        <h3 className="my-4 text-3xl font-medium tracking-wider">
          <span className="my-4 text-2xl font-medium tracking-wider">
            <Typewriter
              words={["I am"]}
              loop={1}
              cursor
              cursorStyle=""
              typeSpeed={200}
              delaySpeed={500}
            />
          </span>
          <span className="my-4 text-2xl font-medium tracking-wider">
            <Typewriter
              words={[
                " ",
                " an aspiring software engineer",
                " an avid animal lover",
                " a keyboard enthusiast",
                " a juice, tea, and boba fanatic",
              ]}
              loop={0}
              cursor
              cursorStyle=""
              typeSpeed={160}
              deleteSpeed={85}
              delaySpeed={1200}
            />
          </span>
        </h3>
      </>
    );
  };

  return (
    <div className="">
      <img
        src={process.env.PUBLIC_URL + "/images/other.png"}
        alt="user avatar"
        className="w-32 h-32 mx-auto rounded-full"
      />
        
      <h3 className="my-4 text-2xl font-pacifico font-medium tracking-wider">
        {" "}
        <Typewriter
          words={[" Hello World?", " Heyo World!"]}
          loop={1}
          cursor
          cursorStyle=""
          typeSpeed={200}
          deleteSpeed={100}
          delaySpeed={1500}
        />{" "}
      </h3>

      <h3 className="font-overpass text-4xl text-decoraction: underline my-4 text-orange-400">
          Justin Clenista
      </h3>

      <DelayIntro />

      <div className=" text-center font-overpass text-xl mx-4 my-4">
          <b>Alma Mater:</b> UC Irvine 2022
          <br/>
          <b>Inquiries:</b> justinalvin98@gmail.com
      </div>

      <div className="flex justify-around my-6">
        <Link to="/" className="text-blue-400">
          <FaTwitterSquare className="w-8 h-8" />
        </Link>
        <Link to="/" className="text-blue-700">
          <FaLinkedin className="w-8 h-8" />
        </Link>
        <Link to="/">
          <FaMedium className="w-8 h-8" />
        </Link>
      </div>
      <Link
        to="/"
        className="px-3 py-4 my-10 justify-center text-center font-overpass border-2 font-semibold hover:underline rounded-full flex items-center justify-content bg-gradient-to-r from-green-400 to-blue-400"
      >
        Download My Resume Here!
      </Link>
    </div>
  );
}
