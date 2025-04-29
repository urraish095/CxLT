import React from "react";
import ContactForm from "./form";
import NewsletterSignup from "./NewsletterSignup"; // Import the new component
import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact-us"
      className="lg:w-screen bg-secondary relative overflow-hidden contact-animation"
    >
      <div className="lg:grid lg:grid-cols-2 bg-primary orange-scale">
        <div
          id="c-section-1"
          className="w-full lg:h-screen grid lg:grid-rows-6 bg-pink orange-scale p-10 lg:pt-24 xl:pt-32 2xl:pt-30 lg:pb-14 2xl:pb-20 lg:pl-32 xl:pl-48 2xl:pl-60 lg:pr-20 2xl:pr-28 overflow-hidden lg:translate-x-[85%]"
        >
          <div
            id="reveal-section-1"
            className="lg:row-span-4 lg:translate-x-full lg:opacity-0"
          >
            <h2 className="font-primary text-5xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-white">
              Let's Make It <br className="hidden xl:block" /> Happen{" "}
            </h2>
            <p className="font-secondary text-sm xl:text-base 2xl:text-lg text-white my-4 2xl:my-6 leading-6 2xl:leading-8 font-medium opacity-90">
            No fluff, no wasted time—just results. Whether you need bold strategy, killer content, or cutting-edge tech, we're ready. Drop us a message and let's build something unstoppable.
            </p>
            <h6 className="font-secondary text-sm xl:text-base 2xl:text-lg text-white font-bold">
              Join the CxLT.
            </h6>
          </div>
          <div
            id="reveal-section-2"
            className="mt-0 lg:row-span-2 hidden sm:grid lg:flex lg:flex-col lg:translate-x-full lg:opacity-0"
          >
            <div className="w-full">
              <div className="grid lg:flex mt-0 xl:mt-4 2xl:mt-0">
                <a href="#" className="w-full flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="80.265"
                    height="81.82"
                    viewBox="0 0 89.265 81.82"
                  >
                    {/* SVG path data */}
                    {/* ... (SVG content remains unchanged) ... */}
                  </svg>
                  <p className="font-secondary text-white text-xs 2xl:text-base ml-6">
                  Central Point, 202-206 Linthorpe Rd, Middlesbrough TS1 3QW 
                  </p>
                </a>
                <a
                  href="tel:01642 133 175"
                  className="w-full flex items-center gap-2 font-secondary text-white text-xs xl:text-base lg:ml-14 2xl:ml-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20.022"
                    height="20.375"
                    viewBox="0 0 20.022 20.375"
                    className="h-10 w-auto lg:h-auto lg:w-auto"
                  >
                    {/* SVG path data */}
                    {/* ... (SVG content remains unchanged) ... */}
                  </svg>
                  <span className="font-secondary text-white text-xs 2xl:text-base ml-8 lg:ml-0">
                    Tel: 01642 133 175
                  </span>
                </a>
              </div>
              <div className="grid lg:flex mt-0 xl:mt-4 2xl:mt-4">
                <a
                  href="mailto:info@CxLT.agency"
                  className="w-full flex items-center gap-2 font-secondary text-white text-xs xl:text-base lg:ml-14 2xl:ml-20"
                >
                  <svg fill="#04E100" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" width="25px">
                    {/* SVG path data */}
                    {/* ... (SVG content remains unchanged) ... */}
                  </svg>
                  <span className="font-secondary text-white text-xs 2xl:text-base ml-8 lg:ml-0">
                    Email: info@CxLT.agency
                  </span>
                </a>
              </div>
              
              {/* Add Newsletter Component Here */}
              <NewsletterSignup />
              
              <div className="border-t-2 border-white w-full mt-6 pt-3 hidden lg:grid xl:flex justify-between font-secondary text-white text-xs 2xl:text-sm uppercase">
                <p>© {new Date().getFullYear()} CxLT</p>
                 <ul className="flex gap-4 mt-2 xl:mt-0">
                  <li>
                    <a
                      href="https://www.instagram.com/cxlt.agency/"
                      target="_blank"
                      rel="noreferrer"
                      className="href-scale"
                    >
                      <Image
                    src={"/img/instagram.png"}
                    height={30}
                    width={30}
                    alt=""
                  />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/cxlt.agency"
                      target="_blank"
                      rel="noreferrer"
                      className="href-scale"
                    >
                      <Image
                    src={"/img/facebook.png"}
                    height={30}
                    width={30}
                    alt=""
                  />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/cxlt-agency/"
                      target="_blank"
                      rel="noreferrer"
                      className="href-scale"
                    >
                      <Image
                    src={"/img/linkedin.png"}
                    height={30}
                    width={30}
                    alt=""
                  />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/@CxLTAgency"
                      target="_blank"
                      rel="noreferrer"
                      className="href-scale"
                    >
                      <Image
                    src={"/img/youtube.png"}
                    height={30}
                    width={30}
                    alt=""
                  />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          id="c-section-2"
          className="w-full lg:h-screen lg:grid bg-secondary lg:content-start p-10 lg:pt-24 xl:pt-32 2xl:pt-40 lg:pb-14 2xl:pb-20 lg:pl-28 2xl:pl-20 lg:pr-28 lg:translate-x-[85%]"
        >
          <h5 className="font-primary text-5xl text-white block sm:hidden">
            Want those outcomes?
          </h5>
          <h2 className="font-secondary text-primary orange-scale mb-4 text-3xl xl:text-4xl 2xl:text-5xl font-light hidden sm:block">
            Want those outcomes?
          </h2>
          <ContactForm />
        </div>
      </div>

      <div className="bg-pink w-full grid lg:hidden">
        <div className="block sm:hidden border-b border-white p-8">
          <h6 className="font-secondary text-white font-bold uppercase">
          CxLT
          </h6>
          <div className="grid lg:flex mt-5 sm:mt-0 xl:mt-4 2xl:mt-8">
            <div className="w-full grid grid-cols-7 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80.265"
                height="81.82"
                viewBox="0 0 89.265 81.82"
                className="col-span-2"
              >
                {/* SVG path data */}
                {/* ... (SVG content remains unchanged) ... */}
              </svg>
              <div className="col-span-5">
                <a href="#" className="block font-secondary text-white text-xs">
                Central Point, 202-206 Linthorpe Rd, Middlesbrough TS1 3QW 
                </a>
                <a
                  href="tel:01642 133 175"
                  className="block font-secondary text-white text-xs xl:text-base lg:ml-14 2xl:ml-20"
                >
                  Tel: 01642 133 175
                </a>
                <a
                  href="mailto:info@CxLT.agency"
                  className="block font-secondary text-white text-xs xl:text-base lg:ml-14 2xl:ml-20"
                >
                  Email: info@CxLT.agency
                </a>
              </div>
            </div>
          </div>
          
          {/* Add Newsletter Component for mobile */}
          <div className="mt-6">
            <NewsletterSignup />
          </div>
        </div>
        <div className="p-6 font-secondary text-white text-xs uppercase">
          <p className="mb-5">© {new Date().getFullYear()} CxLT</p>
           <ul className="flex gap-4">
           <li>
              <a
                href="https://www.instagram.com/cxlt.agency/"
                target="_blank"
                rel="noreferrer"
                className="href-scale"
              >
                <Image
                  src={"/img/instagram.png"}
                  height={30}
                  width={30}
                  alt=""
                />
              </a>
            </li>
            {/* Other social media items remain unchanged */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;