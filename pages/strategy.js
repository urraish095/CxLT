import React from "react";
import ContactForm from "../components/sections/form";
import Link from "next/link";
import Image from "next/image";
import NewsletterSignup from "../components/sections/NewsletterSignup"; 

import Script from 'next/script'
const StrategyContactPage = () => {
   return (
       <>
        <Script id="gtm-head">
            {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MJ9GZMX4');
        `}
        </Script>
        <Script async src="https://www.facebook.com/tr?id=1303973084161841&ev=PageView&noscript=1"></Script>
      <Script id="meta">
        {`
        !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1303973084161841');
              fbq('track', 'PageView');
              fbq('track', 'ViewContent');
        `}
      </Script>
      <Script id="linkedin-tag">
        {`
          window._linkedin_partner_id = "7009842";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(window._linkedin_partner_id);

          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";
            b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);

          window.lintrk('track', { conversion_id: 20452266 });
        `}
      </Script>

      {/* LinkedIn noscript fallback */}
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }} alt="" src="https://px.ads.linkedin.com/collect/?pid=7009842&fmt=gif" />
      </noscript>
        <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJ9GZMX4"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
      </noscript>
        <div className="fixed w-full z-40 px-6 lg:px-10 xl:px-20 py-4 lg:py-8 bg-secondary/80 backdrop-blur-sm lg:backdrop-blur-none lg:bg-transparent border-b border-white/10 lg:border-none undefined">
            <div className="flex justify-between items-center">
                <Link href="/" passHref>
                    <svg xmlns="http://www.w3.org/2000/svg" width="150" height="68.315" viewBox="0 0 201.705 68.315">
                        <g id="Group_76" data-name="Group 76" transform="translate(-451 -93)">
                        <g id="Group_73" data-name="Group 73" transform="translate(451 93)">
                            <path id="Path_3" data-name="Path 3" d="M413.466,25.176h42.577v15.3h-4.353l-2.176-10.2H439.175V68.569l7.209,1.632v3.945h-23.26V70.2l7.209-1.632V30.277H419.927l-2.109,10.2h-4.353Z" transform="translate(-277.358 -15.985)" fill="#f903a1"></path>
                            <path id="Path_5" data-name="Path 5" d="M403.92,31.664H446.5v15.3h-4.353l-2.176-10.2H429.629V75.057l7.209,1.632v3.945H413.578V76.689l7.209-1.632V36.765H410.381l-2.108,10.2H403.92Z" transform="translate(-271.294 -20.107)" fill="#04ff00"></path>
                            <g id="Group_26" data-name="Group 26" transform="translate(44.655 25.236)">
                                <g id="Group_27" data-name="Group 27" transform="translate(0 0)">
                                    <path id="Path_2" data-name="Path 2" d="M154.924,63.434l-4.51-8.319h-.1l-4.46,8.319H129.266l12.228-17.89L129.968,28.155h17.54l3.858,7.717h.1l4.009-7.717h16.487L159.735,45.042l12.879,18.391Z" transform="translate(-128.759 -28.155)" fill="#f903a1"></path>
                                    <path id="Path_4" data-name="Path 4" d="M144.013,68.043l-4.27-7.876h-.095l-4.223,7.876h-15.7L131.3,51.105,120.386,34.642h16.606l3.653,7.306h.095l3.8-7.306h15.609L148.568,50.631l12.193,17.412Z" transform="translate(-119.722 -32.763)" fill="#04ff00"></path>
                                    <path id="Path_11" data-name="Path 11" d="M153.558,68.043l-4.27-7.876h-.095l-4.223,7.876h-15.7l11.576-16.937L129.931,34.643h16.605l3.653,7.306h.1l3.8-7.306h15.609L158.113,50.631l12.193,17.412Z" transform="translate(-126.838 -32.764)" fill="#fff"></path>
                                </g>
                            </g>
                            <path id="Path_15" data-name="Path 15" d="M413.466,31.664h42.577v15.3h-4.353l-2.176-10.2H439.175V75.057l7.209,1.632v3.945h-23.26V76.69l7.209-1.632V36.765H419.927l-2.109,10.2h-4.353Z" transform="translate(-277.358 -20.072)" fill="#fff"></path>
                            <path id="Path_16" data-name="Path 16" d="M553.855,24.649l3.624,4.787-4.026,2.819-3.624-4.877-3.534,4.7-3.937-2.819,3.624-4.652-5.771-1.924,1.566-4.474,5.682,1.968V14.36h4.921v5.816l5.682-1.79,1.521,4.474Z" transform="translate(-357.876 -5.169)" fill="#04ff00"></path>
                            <g id="Group_71" data-name="Group 71" transform="translate(88.122 0)">
                                <rect id="Rectangle_2" data-name="Rectangle 2" width="44.685" height="68.315" transform="translate(0)" fill="#e4e4e5"></rect>
                                <g id="Group_70" data-name="Group 70" transform="translate(0 5.237)">
                                    <path id="Path_12" data-name="Path 12" d="M290.946,67.275V56.12h3.4V25.514h-3.4V14.359h28.7V25.514h-6.257V56.12h6.121V49.863h13.535V67.275Z" transform="translate(-287.465 -14.359)" fill="#f903a1"></path>
                                    <path id="Path_13" data-name="Path 13" d="M281.4,73.762V62.608h3.4V32h-3.4V20.847h28.7V32h-6.257V62.608h6.121V56.35H323.5V73.762Z" transform="translate(-281.402 -18.481)" fill="#04ff00"></path>
                                    <path id="Path_14" data-name="Path 14" d="M290.946,73.763V62.609h3.4V32h-3.4V20.848h28.7V32h-6.257V62.609h6.121V56.351h13.535V73.763Z" transform="translate(-287.465 -18.481)" fill="#13120b"></path>
                                </g>
                            </g>
                            <g id="Group_28" data-name="Group 28" transform="translate(0 7.424)">
                                <path id="Path_1" data-name="Path 1" d="M46.272,72.466a25.785,25.785,0,0,1-10.814,2.143,28.212,28.212,0,0,1-10.3-1.837A23.793,23.793,0,0,1,11.516,59.51,26.417,26.417,0,0,1,9.544,49.171,26.386,26.386,0,0,1,11.551,38.7a23.288,23.288,0,0,1,5.543-7.992,24.552,24.552,0,0,1,8.3-5.067,29.741,29.741,0,0,1,20.3.034,19.209,19.209,0,0,1,7.992,5.271l-7.89,7.89A9.769,9.769,0,0,0,41.511,35.5a14.224,14.224,0,0,0-5.442-1.088,13.784,13.784,0,0,0-5.611,1.122,13.164,13.164,0,0,0-4.386,3.095,14.107,14.107,0,0,0-2.857,4.659,16.456,16.456,0,0,0-1.02,5.883,16.926,16.926,0,0,0,1.02,5.985,13.923,13.923,0,0,0,2.823,4.659,12.7,12.7,0,0,0,4.319,3.026,13.725,13.725,0,0,0,5.509,1.088,12.809,12.809,0,0,0,6.053-1.36,11.739,11.739,0,0,0,4.149-3.537l8.094,7.618a22.925,22.925,0,0,1-7.89,5.815" transform="translate(-8.782 -23.87)" fill="#f903a1"></path>
                                <path id="Path_6" data-name="Path 6" d="M10.895,74.057A24.1,24.1,0,0,1,5.453,66,26.42,26.42,0,0,1,3.481,55.66,26.383,26.383,0,0,1,5.488,45.186a23.294,23.294,0,0,1,5.543-7.992,24.564,24.564,0,0,1,8.3-5.067,28.675,28.675,0,0,1,8.465-1.713c-.557-.032-1.116-.055-1.676-.055a29.281,29.281,0,0,0-10.27,1.768,24.554,24.554,0,0,0-8.3,5.067,23.287,23.287,0,0,0-5.543,7.992A26.378,26.378,0,0,0,0,55.659,26.4,26.4,0,0,0,1.972,66,23.789,23.789,0,0,0,15.609,79.26a28.212,28.212,0,0,0,10.3,1.836c.6,0,1.179-.02,1.755-.05a27.556,27.556,0,0,1-8.577-1.786,24.194,24.194,0,0,1-8.2-5.2" transform="translate(0 -27.992)" fill="#04ff00"></path>
                                <path id="Union_2" data-name="Union 2" d="M24.188,50.688h0A27.558,27.558,0,0,1,15.609,48.9,23.793,23.793,0,0,1,1.972,35.64,26.423,26.423,0,0,1,0,25.3,26.384,26.384,0,0,1,2.006,14.827,23.3,23.3,0,0,1,7.55,6.835a24.56,24.56,0,0,1,8.3-5.067A28.661,28.661,0,0,1,24.312.055h0c.6-.032,1.2-.055,1.806-.055A29.027,29.027,0,0,1,36.149,1.8a19.213,19.213,0,0,1,7.992,5.271l-7.89,7.89a9.668,9.668,0,0,0-1.7-1.784,10.086,10.086,0,0,0-2.587-1.549,14.232,14.232,0,0,0-5.442-1.088,15.436,15.436,0,0,0-1.791.113,13.163,13.163,0,0,0-8.206,4.1,14.106,14.106,0,0,0-2.857,4.659,16.445,16.445,0,0,0-1.02,5.883,16.917,16.917,0,0,0,1.02,5.985,13.918,13.918,0,0,0,2.822,4.659,12.7,12.7,0,0,0,4.319,3.027,13.2,13.2,0,0,0,3.809.986,15.976,15.976,0,0,1-1.781.1,13.72,13.72,0,0,1-5.509-1.088,12.7,12.7,0,0,1-4.319-3.026,13.929,13.929,0,0,1-2.823-4.659A16.918,16.918,0,0,1,9.169,25.3a16.918,16.918,0,0,0,1.021,5.985,13.929,13.929,0,0,0,2.823,4.659,12.7,12.7,0,0,0,4.319,3.026A13.72,13.72,0,0,0,22.84,40.06a15.976,15.976,0,0,0,1.781-.1,15.328,15.328,0,0,0,1.7.1,12.809,12.809,0,0,0,6.053-1.36,12.476,12.476,0,0,0,2.544-1.77l4.732,4.454-4.732-4.454a11.1,11.1,0,0,0,1.6-1.766l8.093,7.618a22.924,22.924,0,0,1-7.89,5.815,25.785,25.785,0,0,1-10.814,2.143C25.33,50.739,24.757,50.718,24.188,50.688ZM9.169,25.3Zm0,0a16.447,16.447,0,0,1,1.021-5.883A16.444,16.444,0,0,0,9.169,25.3Zm3.877-10.543A13.844,13.844,0,0,0,10.58,18.48a13.838,13.838,0,0,1,2.466-3.721,12.928,12.928,0,0,1,1.543-1.411A12.937,12.937,0,0,0,13.046,14.759ZM17.592,11.6a14.116,14.116,0,0,1,7.09-.946,14.1,14.1,0,0,0-7.09.946Z" transform="translate(3.481 2.366)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"></path>
                            </g>
                        </g>
                        </g>
                    </svg>
                </Link>
                <Link href="/" passHref>
                <a className="lg:bg-[#1b2934] p-4 rounded-full text-white opacity-100 nav-icon btn-scale false duration-300 ease-in-out"
                >
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

                        <g id="SVGRepo_bgCarrier" stroke-width="0"/>

                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

                        <g id="SVGRepo_iconCarrier"> <path d="M9 4.5H8C5.64298 4.5 4.46447 4.5 3.73223 5.23223C3 5.96447 3 7.14298 3 9.5V10M9 19.5H8C5.64298 19.5 4.46447 19.5 3.73223 18.7678C3 18.0355 3 16.857 3 14.5V14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/> <path d="M13.6576 2.34736C11.4955 1.97026 10.4145 1.78171 9.70725 2.4087C9 3.03569 9 4.18259 9 6.4764V17.5236C9 19.8174 9 20.9643 9.70725 21.5913C10.4145 22.2183 11.4955 22.0297 13.6576 21.6526L15.9864 21.2465C18.3809 20.8288 19.5781 20.62 20.2891 19.7417C21 18.8635 21 17.5933 21 15.0529V8.94711C21 6.40672 21 5.13652 20.2891 4.25826C19.814 3.67133 19.1217 3.38338 18 3.13228" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/> <path d="M12 11V13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/> </g>

                    </svg>
                </a>
                </Link>
            </div>
            </div>
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Section - Pink */}
            <div className="w-full lg:h-screen grid lg:grid-rows-5 bg-pink p-10 pt-40 lg:pt-24 xl:pt-32 2xl:pt-32 lg:pb-14 2xl:pb-0 lg:pl-10 xl:pl-48 2xl:pl-10 lg:pr-10 2xl:pr-10 overflow-hidden" style={{ overflow: 'scroll' }}>
                <div>
                    <h1 className="text-4xl font-bold mb-6 text-white font-primary">Your Growth. Engineered. Strategy That Fuels Scale, Profit & Market Domination.</h1>
                    <p className="text-md mb-0 text-white font-secondary">
                        We don’t sell strategies—we build businesses. At CxLT, we work with you to sharpen your focus, clarify your direction, and unlock the growth you&apos;ve been chasing. Every plan we create is designed to help you scale faster, make smarter decisions, and outpace the competition.
                    </p>

                    <h1 className="text-3xl font-bold mb-2 text-white font-primary">Helping to grow your business</h1>
                    <h2 className="text-2xl font-bold mb-2 text-white mt-0 font-primary">Direction with Clarity</h2>
                    <p className="text-md mb-0 text-white font-secondary">
                        Every solution is crafted to deliver measurable impact - more revenue, better efficiency, and stronger customer relationships.
                    </p>
                    <h2 className="text-2xl font-bold mb-2 text-white mt-0 font-primary">Faster, Smarter Growth</h2>
                    <p className="text-md mb-0 text-white font-secondary">
                        We uncover the hidden opportunities in your business and give you the tools and insight to seize them.
                    </p>
                    <h2 className="text-2xl font-bold mb-2 text-white mt-0 font-primary">Stronger Market Position</h2>
                    <p className="text-md mb-0 text-white font-secondary">
                        Whether you&apos;re launching or repositioning, we help you stand out, compete harder, and lead with confidence.
                    </p>
                    <h2 className="text-2xl font-bold mb-2 text-white mt-0 font-primary">Better Use of Resources</h2>
                    <p className="text-md mb-2 text-white font-secondary">
                        No more wasted time or budget. We help you focus where it matters most, so every move delivers value.                      
                    </p>
                    <h2 className="text-2xl font-bold mb-2 text-white mt-0 font-primary">Confidence to Execute</h2>
                    <p className="text-md mb-2 text-white font-secondary">
                        With a clear plan and support behind it, you&apos;ll feel confident making decisions that push your business forward.                    
                    </p>
                    <h3 className="text-1xl font-bold mb-2 text-white font-primary">
                        Tired of guesswork? We craft data-driven strategies that accelerate business growth. Whether you&apos;re launching, scaling, or repositioning, our no-nonsense approach delivers results. No fluff, no vague promises—just a hard-hitting strategy designed to fuel real, measurable success. Join the CULT and grow with purpose.
                    </h3>
                    <h3 className="text-2xl font-bold mb-2 text-white font-primary text-primary">
                        Consultancy
                    </h3>
                    <h3 className="text-2xl font-bold mb-2 text-white font-primary text-primary">
                        Growth Plans
                    </h3>
                    <h3 className="text-2xl font-bold mb-2 text-white font-primary text-primary">
                        Go-To-Market
                    </h3>
                    <h3 className="text-2xl font-bold mb-2 text-white font-primary text-primary">
                        Brand & Business Strategy
                    </h3>
                    <div className="w-full">
              <div className="grid lg:flex mt-0 xl:mt-4 2xl:mt-0">
                <a href="#" className="flex items-center">
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
            
            {/* Right Section - Dark */}
            <div className="w-full lg:h-screen lg:grid bg-secondary lg:content-start p-10 lg:pt-24 xl:pt-32 2xl:pt-40 lg:pb-14 2xl:pb-20 lg:pl-28 2xl:pl-20 lg:pr-28">
            <h2 className="font-secondary text-primary  mb-4 text-3xl xl:text-4xl 2xl:text-5xl font-light hidden sm:block">Want those outcomes?</h2>
            
            
            <ContactForm />
            </div>
        </div>
       </>
     
  );
};

export default StrategyContactPage;