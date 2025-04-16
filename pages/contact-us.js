import React from "react";
import ContactForm from "../components/sections/form";
import Link from 'next/link';

const ContactUsPage = () => {
  return (
    <>

      {/* <Header /> */}
      <main>
        <Link href="/">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
            Go to Main Site
          </button>
        </Link>
        <ContactForm />
        <div className="grid lg:flex mt-0 xl:mt-4 2xl:mt-8">
          <a
            href="mailto:info@CxLT.agency"
            className="w-full flex items-center gap-2 font-secondary text-white text-xs xl:text-base lg:ml-14 2xl:ml-20"
          >
            <svg fill="#04E100" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" width="25px">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier"> <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd"></path> </g>
            </svg>
            <span className="font-secondary text-white text-xs 2xl:text-base ml-8 lg:ml-0">
              Email: info@CxLT.agency
            </span>
          </a>

        </div>
      </main>
    </>
  );
};

export default ContactUsPage;