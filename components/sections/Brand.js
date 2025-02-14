import React from "react";
import Image from "next/image";

const Brand = () => {
  return (
    <>
      {/* Desktop */}
      <div className="bg-secondary h-screen brand-animation hidden lg:block">
        <div
          id="brandImages"
          className="container mx-auto grid grid-cols-6 gap-10 2xl:gap-0 pl-40 pr-0 xl:px-40"
        >
          <div className="col-span-3 space-y-6">
            <div className="flex space-x-8">
              <div className="overflow-hidden relative">
                <span
                  id="branding-1"
                  className="absolute right-0 z-10 h-full w-full block bg-secondary"
                ></span>
                <Image
                  src={"/img/brand-design/branding_1.svg"}
                  height={240}
                  width={255}
                  alt="Branding Image 1"
                />
              </div>
              <div className="overflow-hidden relative">
                <span
                  id="branding-2"
                  className="absolute bottom-0 z-10 h-full w-full block bg-secondary"
                ></span>
                <Image
                  src={"/img/brand-design/branding_2.svg"}
                  height={230}
                  width={297}
                  alt="Branding Image 2"
                />
              </div>
            </div>
            <div className="flex">
              <div className="overflow-hidden relative">
                <span
                  id="branding-4"
                  className="absolute left-0 z-10 h-full w-full block bg-secondary"
                ></span>
                <Image
                  src={"/img/brand-design/branding_4.svg"}
                  height={105}
                  width={589}
                  alt="Branding Image 4"
                />
              </div>
            </div>
            <div className="grid grid-cols-7 space-x-5">
              <div className="col-span-2 space-y-4">
                <div className="overflow-hidden relative">
                  <span
                    id="branding-5"
                    className="absolute top-0 z-10 h-full w-full block bg-secondary"
                  ></span>
                  <Image
                    src={"/img/brand-design/branding_5.png"}
                    height={180}
                    width={180}
                    alt="Branding Image 5"
                  />
                </div>
                <div className="overflow-hidden relative">
                  <span
                    id="branding-7"
                    className="absolute top-0 z-10 h-full w-full block bg-secondary"
                  ></span>
                  <Image
                    src={"/img/brand-design/branding_7.jpg"}
                    height={180}
                    width={180}
                    alt="Branding Image 7"
                  />
                </div>
              </div>
              <div className="col-span-5 pr-24">
                <div className="overflow-hidden relative">
                  <span
                    id="branding-6"
                    className="absolute top-0 z-10 h-full w-full block bg-secondary"
                  ></span>
                  <Image
                    src={"/img/brand-design/branding_6.jpg"}
                    height={375}
                    width={375}
                    alt="Branding Image 6"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="overflow-hidden relative">
                <span
                  id="branding-9"
                  className="absolute bottom-0 z-10 h-full w-full block bg-secondary"
                ></span>
                <Image
                  src={"/img/brand-design/branding_9.jpg"}
                  height={105}
                  width={589}
                  alt="Branding Image 9"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 2xl:col-span-3 grid gap-10">
            <div className="overflow-hidden relative -mt-10 2xl:mt-0">
              <span
                id="branding-3"
                className="absolute bottom-0 z-10 h-full w-full block bg-secondary"
              ></span>
              <Image
                src={"/img/brand-design/branding_3.jpg"}
                height={460}
                width={350}
                alt="Branding Image 3"
              />
            </div>
            <div className="overflow-hidden relative -mt-10 2xl:mt-0">
              <span
                id="branding-8"
                className="absolute right-0 z-10 h-full w-full block bg-secondary"
              ></span>
              <Image
                src={"/img/brand-design/branding_8.svg"}
                height={220}
                width={350}
                alt="Branding Image 8"
              />
            </div>
            <div className="overflow-hidden relative">
              <span
                id="branding-10"
                className="absolute bottom-0 z-10 h-full w-full block bg-secondary"
              ></span>
              <Image
                src={"/img/brand-design/branding_10.svg"}
                height={140}
                width={355}
                alt="Branding Image 10"
              />
            </div>
          </div>
        </div>
        <div id="brandContent" className="container mx-auto grid gap-0 hidden">
          <div className="h-screen grid content-center pt-5 2xl:pt-0 pl-24 lg:pl-32 xl:pl-40">
            <h3 className="text-white text-xl 2xl:text-2xl font-secondary font-light tracking-wider ml-2 overflow-hidden mb-3">
              <span id="tag-line" className="translate-y-8 block">
              Where bold ideas meet flawless {" "}
                <strong className="font-bold">execution</strong>.
              </span>
            </h3>
            <h2 className="text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl text-primary orange-scale orange-scale relative overflow-hidden font-primary w-fit">
              <span
                id="development"
                className="absolute right-0 z-10 h-full w-full block bg-secondary"
              ></span>
              <span>Design</span>
            </h2>
            <div className="flex gap-40">
              <div>
                <h2 className="text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl text-white relative overflow-hidden font-primary w-fit">
                  <span
                    id="and"
                    className="absolute left-0 z-10 h-full w-full block bg-secondary"
                  ></span>
                  <span></span>
                </h2>

                <h2 className="text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl text-white relative overflow-hidden font-primary w-fit pb-3">
                  <span
                    id="design"
                    className="absolute right-0 z-10 h-full w-full block bg-secondary"
                  ></span>
                  <span></span>
                </h2>
              </div>
              <div className="pt-12 2xl:pt-24 -ml-28 lg:-ml-20 xl:-ml-14 2xl:ml-0 overflow-hidden">
                <div
                  id="content-description"
                  className="flex items-center gap-6 -translate-x-full pr-10 xl:pr-0"
                >
                  <Image
                    src={"/img/v-line.svg"}
                    height={140}
                    width={20}
                    alt=""
                  />
                  <p className="w-11/12 lg:w-10/12 xl:w-8/12 2xl:w-7/12 text-xs md:text-sm xl:text-base 2xl:text-lg text-white font-secondary font-light tracking-wide text-justify leading-7">
                  Design isn’t just about looking good—it’s about making an impact. From brand strategy and identity to UX/UI that converts, we craft visuals that demand attention. Whether it’s a website, campaign, or full rebrand, we design with purpose—turning brands into unforgettable experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div
        id="brand-and-design"
        className="block sm:flex gap-8 lg:hidden p-10 overflow-hidden"
      >
        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-3 space-y-6">
            <div className="flex space-x-3">
              <div className="brand-img-left overflow-hidden relative">
                <Image
                  src={"/img/brand-design/branding_1.svg"}
                  height={240}
                  width={255}
                  alt="Branding Image 1"
                />
              </div>
              <div className="brand-img-left overflow-hidden relative">
                <Image
                  src={"/img/brand-design/branding_2.svg"}
                  height={230}
                  width={297}
                  alt="Branding Image 2"
                />
              </div>
            </div>
            <div className="flex">
              <div className="brand-img-left overflow-hidden relative">
                <Image
                  src={"/img/brand-design/branding_4.svg"}
                  height={105}
                  width={589}
                  alt="Branding Image 4"
                />
              </div>
            </div>
            <div className="grid grid-cols-7 space-x-3">
              <div className="col-span-2 space-y-4">
                <div className="brand-img-left overflow-hidden relative">
                  <Image
                    src={"/img/brand-design/branding_5.png"}
                    height={180}
                    width={180}
                    alt="Branding Image 5"
                  />
                </div>
                <div className="brand-img-left overflow-hidden relative">
                  <Image
                    src={"/img/brand-design/branding_7.jpg"}
                    height={180}
                    width={180}
                    alt="Branding Image 7"
                  />
                </div>
              </div>
              <div className="col-span-5">
                <div className="brand-img-left overflow-hidden relative">
                  <Image
                    src={"/img/brand-design/branding_6.jpg"}
                    height={375}
                    width={375}
                    alt="Branding Image 6"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="brand-img-left overflow-hidden relative">
                <Image
                  src={"/img/brand-design/branding_9.jpg"}
                  height={105}
                  width={589}
                  alt="Branding Image 9"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2 grid gap-5">
            <div className="brand-img-right overflow-hidden relative">
              <Image
                src={"/img/brand-design/branding_3.jpg"}
                height={460}
                width={350}
                alt="Branding Image 3"
              />
            </div>
            <div className="brand-img-right overflow-hidden relative">
              <Image
                src={"/img/brand-design/branding_8.svg"}
                height={220}
                width={350}
                alt="Branding Image 8"
              />
            </div>
            <div className="brand-img-right overflow-hidden relative">
              <Image
                src={"/img/brand-design/branding_10.svg"}
                height={140}
                width={355}
                alt="Branding Image 10"
              />
            </div>
          </div>
        </div>
        <div id="brand-details" className="mt-10">
          <h5 className="bt-reveal font-primary text-white text-3xl mt-8 mb-3 translate-y-10">
          Design
          </h5>
          <div className="bt-reveal translate-y-10 mb-1">
            <Image
              src={"/img/arrow-bottom-mobile.svg"}
              height={40}
              width={400}
              alt="Software Line Image"
            />
          </div>
          <br />
          <div className="bt-reveal flex gap-5 translate-y-10 mb-5">
            <h5 className="font-secondary font-bold text-2xl text-white">
              02.
            </h5>
            <p className="font-secondary font-light text-white font-light text-1xl">
            Design isn’t just about looking good—it’s about making an impact. From brand strategy and identity to UX/UI that converts, we craft visuals that demand attention. Whether it’s a website, campaign, or full rebrand, we design with purpose—turning brands into unforgettable experiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Brand;
