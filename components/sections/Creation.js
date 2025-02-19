import React from "react";
import Image from "next/image";

const Creation = () => {
  return (
    <>
      {/* Desktop */}
      <div className="h-screen w-screen hidden lg:flex overflow-hidden creation-animation">
        <div
          id="section-1"
          className="relative h-screen flex justify-center items-center bg-creation w-[97%]"
        >
          <div
            id="move-box"
            className="absolute left-40 w-64 2xl:w-72 hidden xl:block"
          >
            <div
              id="grey-box"
              className="bg-secondary p-10 pb-20 2xl:pb-28 text-white font-secondary h-0 overflow-hidden opacity-0"
            >
              <p
                id="box-text"
                className="text-[1.5rem] 2xl:text-[1.8rem] font-light tracking-wide leading-[3rem]"
              >
                 
                 Drive demand. Dominate digital.
              </p>
            </div>
          </div>
          <div
            id="center-text"
            className="font-bold font-primary text-5xl xl:text-6xl 2xl:text-7xl w-0 overflow-hidden"
          >
            <h4 className="text-white">Digital </h4>
            <h4 className="text-white">Marketing</h4>
          </div>
        </div>
        <div
          id="section-2"
          className="h-screen grid grid-rows-6 content-center w-[3%]"
        >
          <div className="row-span-5 w-full flex justify-start items-end p-10 xl:p-20 bg-secondary">
            <div id="text-reveal" className="w-[400px] z-20 opacity-0 mb-20">
              <Image
                src={"/img/line-software.svg"}
                height={20}
                width={330}
                alt=""
              />
              <p className="mt-4 mb-10 text-sm lg:text-base 2xl:text-lg text-white font-secondary font-light tracking-wide text-justify leading-7 2xl:pr-5">
              Forget vanity metrics—we build marketing that moves the needle. From social strategies that spark conversations to SEO that puts you on top, we make digital work for you.
                <br />
                <br />
               <strong> Paid ads, organic growth, and data-driven campaigns—everything is engineered for one thing: results that matter.</strong>
              </p>
            </div>
          </div>
          <div className="row-span-1 bg-pink orange-scale !h-full !w-full"></div>
        </div>
      </div>

      {/* Mobile */}
      <div id="content-creation">
        {/* <div className="bg-secondary p-8 h-fit text-white font-secondary">
          <h5 className="text-2xl font-light tracking-wide leading-[2.5rem]">
            If you have a <strong className="font-bold">story</strong>, Adeo can
            tell it.
          </h5>
        </div> */}
        <div className="bg-creation-mobile p-8 block lg:hidden !bg-cover set-bg"></div>
        <div className="bg-content">
          <h5 className="font-primary text-white mt-8 mb-2 font-light text-3xl mb-5">
          Digital Marketing
          </h5>
          <Image
            src={"/img/content-creation-mobile.svg"}
            height={40}
            width={400}
            alt="Software Line Image"
          />
          <div className="flex gap-5 mt-5">
            <h5 className="font-secondary font-bold text-2xl text-white">
              03.
            </h5>
            <p className="font-secondary font-light text-white  font-light text-1xl">
            Forget vanity metrics—we build marketing that moves the needle. From social strategies that spark conversations to SEO that puts you on top, we make digital work for you. Paid ads, organic growth, and data-driven campaigns—everything is engineered for one thing: results that matter.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creation;
