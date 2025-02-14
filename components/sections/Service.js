import Image from "next/image";
import React from "react";

const Service = () => {
  return (
    <>
      {/* Desktop Version */}
      <div
        id="software-and-development"
        className="lg:h-screen hidden lg:grid lg:grid-cols-10 overflow-hidden service-animation"
      >
        <div className="lg:col-span-6 flex justify-start items-start p-16 pl-12 md:p-24 lg:py-44 md:px-20 lg:px-56 xl:px-60 relative">
          <div
            id="bg-image-service"
            className="bg-software absolute top-0 left-0 bottom-0 lg:h-screen w-full"
          ></div>
          <div className="z-10 relative">
            <div
              id="text-background"
              className=" absolute top-0 left-0 w-60 lg:w-24 h-full z-10 -translate-x-6 lg:translate-x-20 py-28 lg:py-32 xl:py-40 2xl:py-48 -mt-10"
            ></div>
            <h2
              id="line"
              className="text-5xl mt-150 lg:text-6xl xl:text-7xl 2xl:text-8xl font-primary relative z-20"
            >
              <span className="block text-white">Strategy</span>
              {/* <span className="block text-primary orange-scale">&</span>
              <span className="block text-white">Development</span> */}
            </h2>
          </div>
        </div>
        <div className="lg:col-span-4 lg:h-screen bg-pink orange-scale lg:grid lg:content-end p-10 xl:p-20 z-20">
          <div className="w-full lg:w-10/12 2xl:w-8/12 lg:overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="341"
              height="20.414"
              viewBox="0 0 341 20.414"
              className="hidden lg:block"
            >
              <path
                id="Shape_12"
                data-name="Shape 12"
                d="M5000,327H4767l-18,18-18-18h-72"
                transform="translate(-4658.999 -326)"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
              />
            </svg>
            <p
              id="text-appear"
              className="w-11/12 lg:w-full font-light lg:font-normal lg:mt-6 text-white lg:text-justify text-sm lg:text-base 2xl:text-lg lg:invisible lg:-translate-y-full lg:opacity-0"
            >
              <span>
              No fluff. No guesswork. Just strategy that delivers. Whether you need a consultancy deep dive, a laser-focused growth plan, or a go-to-market blueprint that cuts through the noise, we make sure every move is calculated, bold, and built to win. At CxLT, strategy isn’t just a plan—it’s the start of a revolution.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div id="sd-mobile" className="block lg:hidden overflow-hidden">
        <Image
          src="/img/software.jpg"
          className="scale-110"
          height={335}
          width={500}
          alt="Software Image"
        />
        <div className="bg-pink p-8 -mt-3">
          <h5 className="sd-reveal font-primary text-white mt-8 mb-5 translate-y-10 text-3xl">
          Strategy
          </h5>
          <div className="sd-reveal translate-y-10">
            <Image
              src={"/img/arrow-bottom-mobile.svg"}
              height={40}
              width={400}
              alt="Software Line Image"
            />
          </div>
          <div className="sd-reveal flex gap-5 mt-5 translate-y-10">
            <h5 className="font-secondary font-bold text-2xl text-white">
              01.
            </h5>
            <div className="font-secondary text-white font-light text-1xl">
              <p>
              No fluff. No guesswork. Just strategy that delivers. Whether you need a consultancy deep dive, a laser-focused growth plan, or a go-to-market blueprint that cuts through the noise, we make sure every move is calculated, bold, and built to win. At CxLT, strategy isn’t just a plan—it’s the start of a revolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
