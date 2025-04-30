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
          className="w-full lg:h-screen grid lg:grid-rows-4 bg-pink orange-scale p-10 lg:pt-24 xl:pt-32 2xl:pt-30 lg:pb-14 2xl:pb-20 lg:pl-32 xl:pl-48 2xl:pl-60 lg:pr-20 2xl:pr-28 overflow-hidden lg:translate-x-[85%]"
        >
          <div
            id="reveal-section-1"
            className="lg:row-span-2 lg:translate-x-full lg:opacity-0"
          >
            <h2 className="font-primary text-5xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-3xl text-white">
              Let's Make It <br className="hidden xl:block" /> Happen{" "}
            </h2>
            <p style={{ marginBottom: '0',marginTop: '10px'  }} className="font-secondary text-sm xl:text-base 2xl:text-md text-white my-4 2xl:my-6 leading-6 2xl:leading-8 font-medium opacity-90">
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
                <div className="bg-green-400 rounded-full p-1 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#000">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    </div>
                  <p className="font-secondary text-white text-xs 2xl:text-base ml-0">
                  Central Point, 202-206 Linthorpe Rd, Middlesbrough TS1 3QW 
                  </p>
                </a>
                <div>
                <a
                  href="tel:01642 133 175"
                  className="w-full flex items-center gap-2 font-secondary text-white text-xs xl:text-base lg:ml-5 2xl:ml-5 lg:mb-5 2xl:mb-5"
                >
                  <div className="bg-green-400 rounded-full p-1 mr-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#000">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    </div>
                  <span className="font-secondary text-white text-xs 2xl:text-base ml-8 lg:ml-0">
                    Tel: 01642 133 175
                  </span>
                </a>
                <a
                  href="mailto:info@CxLT.agency"
                  className="w-full flex items-center gap-2 font-secondary text-white text-xs xl:text-base lg:ml-5 2xl:ml-5"
                >
                  <div className="bg-green-400 rounded-full p-1 mr-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#000">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    </div>
                  <span className="font-secondary text-white text-xs 2xl:text-base ml-8 lg:ml-0">
                    Email: info@CxLT.agency
                  </span>
                </a>
                </div>
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