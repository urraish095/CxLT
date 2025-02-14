import React from "react";
import Image from "next/image";

const Marketing = () => {
  return (
    <>
      {/* Desktop */}
      <div
        id="bg-image-marketing"
        className="h-screen w-screen hidden lg:flex overflow-hidden bg-marketing marketing-animation"
      >
        <div className="grid grid-rows-6 w-[65%] relative">
          <div
            id="bg-grey"
            className="row-span-5 bg-secondary relative z-30"
          ></div>

          <div
            id="bg-orange"
            className="row-span-1 bg-pink orange-scale !h-full !w-full relative z-30"
          ></div>

          <div className="grid grid-rows-6 w-fit ml-52 pr-5 content-center h-screen absolute top-0 left-0 overflow-hidden">
            <div className="row-span-5 grid content-end relative h-full border-border-green-500">
              <div className="invisible opacity-0">
                <h2 className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl w-fit pb-4 xl:pb-8">
                  <span>Digital</span>
                </h2>
              </div>

              <div id="main-text-1" className="absolute bottom-0 z-40 w-full">
                <p
                  id="content-title"
                  className="text-sm xl:text-[1.4rem] 2xl:text-[1.8rem] text-white font-light tracking-wide leading-[3rem] mb-5 -translate-x-full"
                >
                  Innovate. Automate. Dominate.
                </p>
                <h2 className="text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-white relative overflow-hidden font-primary w-fit pb-4 xl:pb-8">
                  <span
                    id="reveal-text-1"
                    className="absolute right-0 z-10 h-full w-full block bg-secondary"
                  ></span>
                  <span>Technology</span>
                </h2>
              </div>

              <div
                id="content-desc-marketing"
                className="relative flex items-center space-x-6 z-10 -translate-x-full w-fit"
              >
                <Image
                  src={"/img/v-line-black.svg"}
                  height={140}
                  width={20}
                  alt=""
                />
                <p className="w-8/12 2xl:w-7/12 text-sm xl:text-base 2xl:text-lg text-white font-secondary font-light tracking-wide text-justify leading-7">
                We build, automate, and scale the tech that drives business growth. Whether it’s bespoke software, AI automation, high-converting websites, or powerful e-commerce platforms, we engineer solutions that work seamlessly. No cookie-cutter builds—just smart, scalable, and future-proof technology designed to give you the competitive edge.
                </p>
              </div>
            </div>

          </div>
        </div>
        <div className="w-[35%]"></div>
      </div>

      {/* Mobile */}
      <div id="digital-marketing" className="block lg:hidden">
        {/* <div className="bg-secondary p-10">
          <h4 className="mt-reveal text-5xl text-white font-primary translate-y-72">
            If you want sales, Adeo will{" "}
            <span className="text-primary">deliver</span> them.
          </h4>
        </div> */}
        <div className="bg-marketing-mobile set-h-img"></div>
        <div className="bg-pink orange-scale p-10">
          <h5 className="mt-reveal font-primary text-white mb-2 translate-y-10 font-light text-3xl mb-5">
          Technology
          </h5>
          <div className="mt-reveal translate-y-10">
            <Image
              src={"/img/arrow-bottom-mobile.svg"}
              height={40}
              width={400}
              alt="Software Line Image"
            />
          </div>
          <div className="mt-reveal flex gap-5 mt-5 translate-y-10">
            <h5 className="font-secondary font-bold text-2xl text-white">
              04.
            </h5>
            <p className="font-secondary font-light text-white font-light text-1xl">
            We build, automate, and scale the tech that drives business growth. Whether it’s bespoke software, AI automation, high-converting websites, or powerful e-commerce platforms, we engineer solutions that work seamlessly. No cookie-cutter builds—just smart, scalable, and future-proof technology designed to give you the competitive edge.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
