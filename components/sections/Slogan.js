import React from "react";
const { useEffect } = React;

// Dependencies
import gsap from "gsap";

// Register GSAP Plugins

const Slogan = () => {
  useEffect(() => {}, []);

  return (
    <>
      {/* Desktop */}
      <div className="h-screen bg-white hidden lg:grid grid-cols-10 overflow-hidden slogan-animation">
        <div
          id="slide-1"
          className="col-span-6 flex justify-end items-center p-8 relative"
        >
          <div
            id="bg-color"
            className="bg-secondary absolute left-0 bottom-0 h-screen w-full"
          ></div>
          <h1
            id="line-1"
            className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bold text-pink orange-scale font-primary z-10"
          >
            If you can
          </h1>
        </div>
        <div
          id="slide-2"
          className="col-span-4 flex justify-start items-center p-12 relative whitespace-nowrap"
        >
          <div
            id="bg-image"
            className="bg-imagination absolute left-0 bottom-0 h-screen w-full"
          ></div>
          <h2
            id="line-2"
            className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bold text-white font-primary z-10 -ml-4 2xl:-ml-0"
          >
            imagine it
          </h2>
          <h2
            id="line-3"
            className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bold text-primary orange-scale font-primary z-10 translate-x-20 opacity-0 -ml-7 lg:ml-0"
          >
            CxLT can
          </h2>
          <h2
            id="line-4"
            className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl bold text-white font-primary z-10 translate-x-20 opacity-0"
          >
            create it
          </h2>
        </div>
      </div>

      {/* Mobile */}
      <div id="slogan-mobile" className="relative py-10 px-6 grid lg:hidden overflow-hidden">
        <div id="slogan-bg" className="absolute left-0 top-0 h-full w-full bg-primary -translate-x-full"></div>
        <h3 className="slogan-text-reveal text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white font-primary z-10 translate-y-10">
          If you can Imagine <span className="text-secondary">It</span>,
        </h3>
        <h3 className="slogan-text-reveal text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white font-primary z-10 translate-y-10 mt-4">
          CxLT Can Create <span className="text-secondary">It</span>.
        </h3>
      </div>
    </>
  );
};

export default Slogan;
