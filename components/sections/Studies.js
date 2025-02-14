import React from "react";
import Link from "next/link";
import Image from "next/image";
const { useState, useContext } = React;

// Dependencies
import gsap, { Linear } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP Plugins
gsap.registerPlugin(TextPlugin);

// Context API
import Context from "../../lib/Context";

const Studies = () => {
  // Use Context
  const { videModal } = useContext(Context);
  const [isOpen, setOpen] = videModal;

  const [caseStudy, setCaseStudy] = useState(true);

  const caseStudyToggle = (key) => {
    if (caseStudy == true) {
      gsap.to("#case-study-" + key, {
        duration: 1,
        width: "250%",
        ease: "none",
      });

      gsap.to("#project-overlay-" + key, {
        duration: 1,
        width: "70%",
        translateX: "100%",
        ease: "none",
      });

      gsap.set("#btn-rotate-" + key, {
        text: {
          value: "Close",
        },
      });

      gsap.to("#project-details-" + key, {
        duration: 1,
        visibility: "visible",
        opacity: 1,
        ease: Linear.easeInOut,
      });
    } else {
      gsap.to("#case-study-" + key, {
        duration: 1,
        width: "100%",
        ease: "none",
      });

      gsap.to("#project-overlay-" + key, {
        duration: 1,
        width: "100.5%",
        translateX: "0%",
        ease: "none",
      });

      gsap.set("#btn-rotate-" + key, {
        text: {
          value: "Open",
        },
      });

      gsap.to("#project-details-" + key, {
        duration: 1,
        visibility: "hidden",
        opacity: 0,
        ease: Linear.easeInOut,
      });
    }
  };

  const caseStudyToggleMob = (key) => {
    if (caseStudy == true) {
      gsap.to("#case-study-mob-" + key, {
        duration: 1,
        height: "31rem",
        ease: "none",
      });

      gsap.to("#project-overlay-" + key, {
        duration: 1,
        height: "70%",
        translateY: "50%",
        ease: "none",
      });

      gsap.to("#btn-rotate-" + key, {
        duration: 1,
        rotate: -90,
      });

      gsap.to("#project-details-" + key, {
        duration: 1,
        visibility: "visible",
        opacity: 1,
        ease: Linear.easeInOut,
      });
    } else {
      gsap.to("#case-study-mob-" + key, {
        duration: 1,
        height: "20rem",
        ease: "none",
      });

      gsap.to("#project-overlay-" + key, {
        duration: 1,
        height: "100.5%",
        translateY: "0%",
        ease: "none",
      });

      gsap.to("#btn-rotate-" + key, {
        duration: 1,
        rotate: 90,
      });

      gsap.to("#project-details-" + key, {
        duration: 1,
        visibility: "hidden",
        opacity: 0,
        ease: Linear.easeInOut,
      });
    }
  };

  return (
    <>
      {/* Desktop */}
      <div
        id="case-studies"
        className="lg:h-screen lg:w-screen bg-secondary relative studio-animation hidden lg:block"
      >
        <div className="container mx-auto py-10 lg:py-0 px-8 sm:px-16 lg:px-24">
          <div className="grid lg:grid-cols-10">
            <div className="lg:col-span-2 grid content-end lg:content-center lg:px-4">
              <h2 className="font-primary text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-[3.5rem] lg:leading-10 xl:leading-[3.5rem] 2xl:leading-[4rem] text-white">
                Cont <span className="text-primary orange-scale">ent</span>{" "}
              </h2>
              <p className=" text-cs text-white">
                
              Stories that stick. Content that converts. We create bold, engaging, and strategy-driven content that commands attention. Whether it’s viral social clips, high-production video, TV, or podcasts, we craft narratives that build brands, spark conversations, and keep audiences hooked—because great content isn’t just seen, it’s remembered.
              </p>
              <button className="mt-16 2xl:mt-12" onClick={() => setOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="130.435"
                  height="125.0569"
                  viewBox="0 0 172.05 164.367"
                >
                  <g id="show_reel" transform="translate(-144.108 -783.492)">
                    <g
                      id="Group_4"
                      data-name="Group 4"
                      transform="matrix(1, 0.017, -0.017, 1, 15.144, -4.126)"
                    >
                      <path
                        id="watch_our_show_reel"
                        data-name="watch  our  show  reel"
                        d="M230.147,945.342a4.662,4.662,0,0,1-1.538-3.774,4.538,4.538,0,0,1,.848-2.746,5.08,5.08,0,0,1,2.367-1.751l-3.968-7.154v-.14l2.386,0,3.667,6.818,3.962,0-.007-6.822,2.236,0,.017,16.864-5.583.005h-.012A6.6,6.6,0,0,1,230.147,945.342Zm4.307-6.93a3.853,3.853,0,0,0-2.634.861,2.9,2.9,0,0,0-.977,2.3,3.06,3.06,0,0,0,.935,2.4,3.952,3.952,0,0,0,2.694.845l3.406,0-.006-6.405Zm-23.985,4.726.418-1.77,8.15,1.923L220.285,938l-7.114-1.679.418-1.77,7.113,1.679,1.373-5.818-8.263-1.949.418-1.77,10.427,2.461-3.873,16.413Zm48.271-17.792,1.8-.926,8.709,9.341.824,1.022-.351-1.265-2.415-12.577,1.8-.927,11.336,13.135-1.978,1.017-7.648-9.052-1.306-1.83.494,2,2.413,11.991-1.669.858-8.275-8.977-1.344-1.6.718,2.183,2.947,11.457-1.988,1.022Zm-64.821,10.512.8-1.634,7.525,3.674,2.383-4.882-6.567-3.207.8-1.633,6.568,3.206,2.622-5.37-7.629-3.725.8-1.634,9.628,4.7-7.4,15.155Zm-7.932-5.467,9.359-11.78-6.258-4.972,1.131-1.424,8.008,6.362-10.49,13.2Zm98.88-5.553a10.483,10.483,0,0,1-3.638-2.485l-.751-.757a10.427,10.427,0,0,1-2.453-3.659,6.315,6.315,0,0,1-.308-3.667,6.52,6.52,0,0,1,8.71-4.7,9.987,9.987,0,0,1,3.577,2.366l.857.863a10.322,10.322,0,0,1,2.425,3.648,6.252,6.252,0,0,1-1.5,6.906,6.539,6.539,0,0,1-3.227,1.821,5.855,5.855,0,0,1-1.261.137A6.717,6.717,0,0,1,284.868,924.838ZM280.9,912.409a3.929,3.929,0,0,0-1.264,3.463,7.531,7.531,0,0,0,2.3,4.052l.881.888a7.563,7.563,0,0,0,4.1,2.422A3.975,3.975,0,0,0,290.437,922a3.931,3.931,0,0,0,1.228-3.476,7.41,7.41,0,0,0-2.251-4.039l-.872-.88a7.576,7.576,0,0,0-4.085-2.385,4.493,4.493,0,0,0-.7-.056A3.956,3.956,0,0,0,280.9,912.409Zm6.212-9.372,1.105-1.943,6.775,3.856,4.2-7.389-6.775-3.856,1.1-1.933,14.657,8.341-1.1,1.932-6.3-3.586-4.2,7.389,6.3,3.586-1.105,1.943Zm19.38-11.659.582-2.158a3.078,3.078,0,0,0,2.582-.311,3.953,3.953,0,0,0,1.563-2.421,4.052,4.052,0,0,0-.031-2.666,2.418,2.418,0,0,0-1.7-1.414,2.175,2.175,0,0,0-1.914.389,8.585,8.585,0,0,0-2.036,2.534,13.814,13.814,0,0,1-2.117,2.836,5,5,0,0,1-2.063,1.266,4.24,4.24,0,0,1-2.308-.029,3.942,3.942,0,0,1-2.754-2.4,6.816,6.816,0,0,1-.077-4.448A7.923,7.923,0,0,1,297.7,879.6a5.458,5.458,0,0,1,2.366-1.767,4.454,4.454,0,0,1,2.751-.1l-.583,2.158a2.9,2.9,0,0,0-2.625.461,4.755,4.755,0,0,0-1.642,2.682,4.379,4.379,0,0,0-.01,2.793,2.334,2.334,0,0,0,1.645,1.416,2.289,2.289,0,0,0,2.077-.339,10.008,10.008,0,0,0,2.113-2.693,10.456,10.456,0,0,1,3.037-3.493,3.862,3.862,0,0,1,3.2-.487,4.081,4.081,0,0,1,2.766,2.4,6.331,6.331,0,0,1,.179,4.337,6.911,6.911,0,0,1-1.456,2.816,5.1,5.1,0,0,1-2.339,1.552,4.738,4.738,0,0,1-2.688.048Zm-7.851-31.258,6.16-4.689-.624-3.911-6.737,1.075-.352-2.208,16.654-2.656.879,5.513a6.605,6.605,0,0,1-.59,4.534,4.668,4.668,0,0,1-3.488,2.11,4.54,4.54,0,0,1-2.845-.408,5.084,5.084,0,0,1-2.1-2.064l-6.445,5.039-.138.022Zm7.332-8.887.538,3.374a3.856,3.856,0,0,0,1.263,2.467,2.907,2.907,0,0,0,2.424.6,3.059,3.059,0,0,0,2.225-1.3,3.949,3.949,0,0,0,.412-2.793l-.536-3.362Zm-9.232-7.046a6.044,6.044,0,0,1-3.152-3.042l-.254-.535a6.311,6.311,0,0,1-.36-4.645,5.345,5.345,0,0,1,3.125-3.15l10.566-4.515.865,2.024-10.5,4.488A3.517,3.517,0,0,0,295,839.9a3.9,3.9,0,0,0,2.062,2.262,3.85,3.85,0,0,0,3-.194l10.513-4.493.878,2.056-10.544,4.506a5.985,5.985,0,0,1-2.334.506A5.037,5.037,0,0,1,296.738,844.187Zm-8.864-15.634a6.52,6.52,0,0,1-3.649-9.2,10.01,10.01,0,0,1,2.768-3.277l.958-.75a10.305,10.305,0,0,1,3.9-1.984,6.254,6.254,0,0,1,6.684,2.3,6.547,6.547,0,0,1,1.432,3.416,6.307,6.307,0,0,1-.768,3.624,10.47,10.47,0,0,1-2.892,3.323l-.84.657a10.42,10.42,0,0,1-3.92,2.011,7.122,7.122,0,0,1-1.7.214A5.9,5.9,0,0,1,287.874,828.554Zm5.851-13.355a7.415,7.415,0,0,0-4.274,1.765l-.976.764a7.57,7.57,0,0,0-2.845,3.779,4.282,4.282,0,0,0,4.057,5.333,7.531,7.531,0,0,0,4.293-1.816l.986-.771a7.565,7.565,0,0,0,2.883-3.787,3.974,3.974,0,0,0-.815-3.642,3.927,3.927,0,0,0-3.225-1.625ZM183.032,802.612l1.879-1.189,8.426,8.334,1.463,1.706-.67-1.948-3.474-11.728,1.586-1,9.043,8.2,1.481,1.475-.911-2.11L197.9,793.2l1.889-1.2,5.562,16.437-1.713,1.084L194.13,801l-.913-.943.463,1.229,3.527,12.311-1.713,1.084Zm83.318,7.276,3.392-7.018-7.655-3.7-3.392,7.018-2-.968,7.339-15.184,2,.968-3.155,6.529,7.654,3.7,3.155-6.528,2.012.973-7.339,15.184ZM211.734,788.1l1.872-.53,10.805,14.466-2.2.622-2.752-3.806-6.8,1.926-.323,4.678-2.207.625Zm1.083,10.745,5.516-1.563-4.914-6.806Zm33.821,4.172a5.939,5.939,0,0,1-4.311-2.991,8.621,8.621,0,0,1-.711-5.967l.3-1.594a9.6,9.6,0,0,1,1.589-3.909,6.274,6.274,0,0,1,2.846-2.253,6.635,6.635,0,0,1,3.682-.28,6.094,6.094,0,0,1,3.957,2.271,6.281,6.281,0,0,1,1.088,4.43l-2.2-.413a4.845,4.845,0,0,0-.694-3.109,3.8,3.8,0,0,0-2.49-1.391,3.979,3.979,0,0,0-3.576.932,7.241,7.241,0,0,0-2.019,4.185l-.3,1.607a7.439,7.439,0,0,0,.319,4.507,3.706,3.706,0,0,0,2.853,2.188,4.28,4.28,0,0,0,2.949-.3,4.654,4.654,0,0,0,1.832-2.631l2.2.413a6.2,6.2,0,0,1-2.7,3.693,5.787,5.787,0,0,1-3,.771A8.721,8.721,0,0,1,246.638,803.017Zm-17.356-16.245-5.4.293-.1-1.816,13.023-.707.1,1.816-5.413.293.815,15.024-2.21.12Z"
                        fill="#fff"
                      />
                      <path
                        id="Ellipse_1"
                        data-name="Ellipse 1"
                        d="M173.161,848.627a63.7,63.7,0,0,1,16.029-27.485m-4.077,85.134a63.877,63.877,0,0,1-9.677-16.312q-1.127-2.772-2-5.664"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="2"
                      />
                    </g>
                    <path
                      id="new_"
                      data-name="new!"
                      d="M176.365,870.75a1.692,1.692,0,1,1,1.71,1.692A1.659,1.659,0,0,1,176.365,870.75Zm-7.513,1.692-3.347-7.531-3.365,7.531h-.8l-4.8-12.224h2.729l2.674,7.094L165.086,860h.819l3.146,7.276,2.674-7.058h2.729l-4.8,12.224Zm-25.339,0-6.949-7.421v7.2h-2.455V860h.8l6.967,7.385v-7.167h2.455v12.224Zm3.548-.219V860.218h8.076v2.219h-5.62v2.437h4.129v2.092h-4.129V870h5.839v2.219Zm29.978-4.4-.473-7.6h2.929l-.454,7.6Z"
                      transform="translate(10)"
                      fill="#04FF00"
                    />
                    <path
                      id="Shape_7"
                      data-name="Shape 7"
                      d="M223.994,845.413l32.222,18.8-32.222,18.8Z"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </button>
            </div>

            <div className="lg:col-span-7 grid gap-5 lg:gap-0 lg:flex lg:justify-start items-center">
              {/* Case Study 1 */}
              <div
                id="case-study-1"
                className="w-[100%] h-80 lg:h-screen relative bg-bottom bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url("/img/eden-thumbnail.jpg")' }}
              >
                <div
                  id="project-overlay-1"
                  className="absolute z-50 h-full w-0 lg:w-full bg-secondary/80 flex justify-start items-center"
                >
                  <button
                    className="h-full px-2 bg-[#17222A]/80"
                    onClick={() => {
                      caseStudyToggle(1), setCaseStudy(!caseStudy);
                    }}
                  >
                    <span
                      id="btn-rotate-1"
                      className="-rotate-90 inline-block uppercase text-sm text-white font-primary tracking-widest"
                    >
                      Content Creation
                    </span>
                  </button>
                  <div
                    id="project-details-1"
                    className="w-full h-full grid content-end py-8 p-4 pr-6 2xl:pl-6 2xl:pr-14 invisible opacity-0"
                  >
                    
                    <h3 className="mt-8 2xl:mt-10 text-lg 2xl:text-xl text-white font-secondary">
                      Content Creation
                    </h3>
                    <p className="mt-4 text-xs leading-5 2xl:text-base text-white font-secondary font-light text-left w-[200px] 2xl:w-[280px]">
                    Content that captivates, converts, and keeps audiences coming back. From high-impact video and cinematic storytelling to TV, podcasts, and brand narratives that stick, we craft content that cuts through the noise. No filler—just bold, engaging, and strategy-driven content designed to build brands and spark movements.
                    </p>
                    {/* <Link href={"/case-studies/edenmill-ecommerce"}>
                      <button className="block text-right underline text-sm 2xl:text-base mt-6 lg:my-6 text-white font-secondary">
                        <span>Read More</span>
                        <svg
                          className="inline-block ml-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.903"
                          height="14.116"
                          viewBox="0 0 9.903 17.116"
                        >
                          <path
                            id="Rectangle_8"
                            data-name="Rectangle 8"
                            d="M881.928,1038.33l7.785,7.854-7.785,7.854"
                            transform="translate(-881.218 -1037.626)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </Link> */}
                  </div>
                </div>
              </div>

              {/* Case Study 2 */}
              <div
                id="case-study-2"
                className="w-[100%] h-80 lg:h-screen relative bg-bottom bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url("/img/case_study_2.jpg")' }}
              >
                <div
                  id="project-overlay-2"
                  className="absolute z-40 h-full w-0 lg:w-full bg-secondary/80 flex justify-start items-center"
                >
                  <button
                    className="h-full px-2 bg-[#17222A]/80"
                    onClick={() => {
                      caseStudyToggle(2), setCaseStudy(!caseStudy);
                    }}
                  >
                    <span
                      id="btn-rotate-2"
                      className="-rotate-90 inline-block uppercase text-sm text-white font-primary tracking-widest"
                    >
                      Video & TV
                    </span>
                  </button>
                  <div
                    id="project-details-2"
                    className="w-full h-full grid content-end py-8 p-4 pr-6 2xl:pl-6 2xl:pr-14 invisible opacity-0"
                  >
                    {/* <svg
                      className="ml-16 2xl:mx-auto hidden lg:block"
                      xmlns="http://www.w3.org/2000/svg"
                      width="71.38"
                      height="63.285"
                      viewBox="0 0 71.38 63.285"
                    >
                      <path
                        id="logo"
                        d="M760.675,674.293a13.094,13.094,0,0,1-5.355-1.086,13.27,13.27,0,0,1-4.268-2.973,13.421,13.421,0,0,1-2.821-4.478,15.293,15.293,0,0,1-1.01-5.6,14.812,14.812,0,0,1,1.01-5.565,12.361,12.361,0,0,1,2.821-4.288,12.69,12.69,0,0,1,4.268-2.744,14.434,14.434,0,0,1,5.355-.972h6.745a14.8,14.8,0,0,1,5.506.991,12.266,12.266,0,0,1,7.069,7.07,14.8,14.8,0,0,1,.991,5.507,15.291,15.291,0,0,1-1.01,5.6,13.434,13.434,0,0,1-2.82,4.478,13.228,13.228,0,0,1-4.288,2.973,13.417,13.417,0,0,1-5.45,1.086Zm-3.45-22.2a8.171,8.171,0,0,0-2.724,1.849,8.488,8.488,0,0,0-1.791,2.821,9.749,9.749,0,0,0-.648,3.621A9.94,9.94,0,0,0,752.71,664a8.6,8.6,0,0,0,1.791,2.877,8.245,8.245,0,0,0,2.724,1.887,8.578,8.578,0,0,0,3.45.686h6.745a8.806,8.806,0,0,0,3.505-.686A8.288,8.288,0,0,0,775.5,664a9.976,9.976,0,0,0,.648-3.621,9.825,9.825,0,0,0-.648-3.6,8.151,8.151,0,0,0-4.574-4.688,9.039,9.039,0,0,0-3.505-.667h-6.745A8.805,8.805,0,0,0,757.225,652.091Zm-34.165,22.2a13.1,13.1,0,0,1-5.355-1.086,13.283,13.283,0,0,1-4.269-2.973,13.418,13.418,0,0,1-2.82-4.478,15.291,15.291,0,0,1-1.01-5.6,14.811,14.811,0,0,1,1.01-5.565,12.358,12.358,0,0,1,2.82-4.288,12.7,12.7,0,0,1,4.269-2.744,14.435,14.435,0,0,1,5.355-.972h15.015v4.84H723.06a8.8,8.8,0,0,0-3.45.667,8.17,8.17,0,0,0-2.724,1.849,8.5,8.5,0,0,0-1.792,2.821,9.766,9.766,0,0,0-.647,3.621,9.957,9.957,0,0,0,.647,3.621,8.614,8.614,0,0,0,1.792,2.877,8.244,8.244,0,0,0,2.724,1.887,8.576,8.576,0,0,0,3.45.686h11.852v-7.2h-12.5v-4.078H739.79v16.122Zm37.1-35.577a13.094,13.094,0,0,1-5.354-1.086,13.187,13.187,0,0,1-7.088-7.451,15.274,15.274,0,0,1-1.01-5.6,14.8,14.8,0,0,1,1.01-5.565,12.346,12.346,0,0,1,2.82-4.288,12.7,12.7,0,0,1,4.269-2.744,14.433,14.433,0,0,1,5.354-.972h6.745a14.8,14.8,0,0,1,5.507.991,12.272,12.272,0,0,1,7.069,7.07,14.8,14.8,0,0,1,.991,5.507,15.311,15.311,0,0,1-1.01,5.6,13.427,13.427,0,0,1-2.821,4.478,13.235,13.235,0,0,1-4.287,2.973,13.424,13.424,0,0,1-5.45,1.086Zm-3.449-22.2a8.179,8.179,0,0,0-2.725,1.849,8.511,8.511,0,0,0-1.791,2.821,9.771,9.771,0,0,0-.648,3.621,9.959,9.959,0,0,0,.648,3.621,8.626,8.626,0,0,0,1.791,2.878,8.249,8.249,0,0,0,2.725,1.886,8.575,8.575,0,0,0,3.449.686h6.745a8.811,8.811,0,0,0,3.506-.686,8.276,8.276,0,0,0,4.573-4.765,9.957,9.957,0,0,0,.648-3.621,9.808,9.808,0,0,0-.648-3.6,8.146,8.146,0,0,0-4.573-4.688,9.045,9.045,0,0,0-3.506-.667h-6.745A8.8,8.8,0,0,0,756.713,616.514Zm-42.4,22.2,7.452-27.708h4.84l-5.962,22.868h17.146v4.84Z"
                        transform="translate(-709.607 -611.007)"
                        fill="#fff"
                      />
                    </svg> */}
                    <h3 className="mt-8 2xl:mt-14 text-xl 2xl:text-2xl text-white font-secondary">
                    Video & TV
                    </h3>
                    <p className="mt-4 text-xs leading-5 2xl:text-base text-white font-secondary font-light text-justify w-[200px] 2xl:w-[280px]">
                    Cinematic storytelling that grabs attention and leaves a lasting impact. From high-energy brand videos to full-scale TV productions, we create content that engages, inspires, and drives action. Sharp visuals, compelling narratives, and bold execution—built to make your brand unforgettable on every screen.
                    </p>
                    {/* <Link href={"/case-studies/edenmill-ecommerce"}>
                      <button className="block text-right underline text-sm 2xl:text-base mt-6 lg:my-6 text-white font-secondary">
                        <span>Read More</span>
                        <svg
                          className="inline-block ml-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.903"
                          height="14.116"
                          viewBox="0 0 9.903 17.116"
                        >
                          <path
                            id="Rectangle_8"
                            data-name="Rectangle 8"
                            d="M881.928,1038.33l7.785,7.854-7.785,7.854"
                            transform="translate(-881.218 -1037.626)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </Link> */}
                  </div>
                </div>
              </div>

              {/* Case Study 3 */}
              <div
                id="case-study-3"
                className="w-[100%] h-80 lg:h-screen relative bg-center bg-no-repeat hidden lg:block"
                style={{ backgroundImage: 'url("/img/case_study_3.jpg")' }}
              >
                <div
                  id="project-overlay-3"
                  className="absolute z-30 h-full w-full bg-secondary/80 flex justify-start items-center"
                >
                  <button
                    className="h-full px-2 bg-[#17222A]/80"
                    onClick={() => {
                      caseStudyToggle(3), setCaseStudy(!caseStudy);
                    }}
                  >
                    <span
                      id="btn-rotate-3"
                      className="-rotate-90 inline-block uppercase text-sm text-white font-primary tracking-widest"
                    >
                      Podcasts
                    </span>
                  </button>
                  <div
                    id="project-details-3"
                    className="w-full h-full grid content-end py-8 py-8 p-4 pr-6 2xl:pl-6 2xl:pr-14 invisible opacity-0"
                  >
                    {/* <svg
                      className="ml-16 2xl:mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="71.38"
                      height="63.285"
                      viewBox="0 0 71.38 63.285"
                    >
                      <path
                        id="logo"
                        d="M760.675,674.293a13.094,13.094,0,0,1-5.355-1.086,13.27,13.27,0,0,1-4.268-2.973,13.421,13.421,0,0,1-2.821-4.478,15.293,15.293,0,0,1-1.01-5.6,14.812,14.812,0,0,1,1.01-5.565,12.361,12.361,0,0,1,2.821-4.288,12.69,12.69,0,0,1,4.268-2.744,14.434,14.434,0,0,1,5.355-.972h6.745a14.8,14.8,0,0,1,5.506.991,12.266,12.266,0,0,1,7.069,7.07,14.8,14.8,0,0,1,.991,5.507,15.291,15.291,0,0,1-1.01,5.6,13.434,13.434,0,0,1-2.82,4.478,13.228,13.228,0,0,1-4.288,2.973,13.417,13.417,0,0,1-5.45,1.086Zm-3.45-22.2a8.171,8.171,0,0,0-2.724,1.849,8.488,8.488,0,0,0-1.791,2.821,9.749,9.749,0,0,0-.648,3.621A9.94,9.94,0,0,0,752.71,664a8.6,8.6,0,0,0,1.791,2.877,8.245,8.245,0,0,0,2.724,1.887,8.578,8.578,0,0,0,3.45.686h6.745a8.806,8.806,0,0,0,3.505-.686A8.288,8.288,0,0,0,775.5,664a9.976,9.976,0,0,0,.648-3.621,9.825,9.825,0,0,0-.648-3.6,8.151,8.151,0,0,0-4.574-4.688,9.039,9.039,0,0,0-3.505-.667h-6.745A8.805,8.805,0,0,0,757.225,652.091Zm-34.165,22.2a13.1,13.1,0,0,1-5.355-1.086,13.283,13.283,0,0,1-4.269-2.973,13.418,13.418,0,0,1-2.82-4.478,15.291,15.291,0,0,1-1.01-5.6,14.811,14.811,0,0,1,1.01-5.565,12.358,12.358,0,0,1,2.82-4.288,12.7,12.7,0,0,1,4.269-2.744,14.435,14.435,0,0,1,5.355-.972h15.015v4.84H723.06a8.8,8.8,0,0,0-3.45.667,8.17,8.17,0,0,0-2.724,1.849,8.5,8.5,0,0,0-1.792,2.821,9.766,9.766,0,0,0-.647,3.621,9.957,9.957,0,0,0,.647,3.621,8.614,8.614,0,0,0,1.792,2.877,8.244,8.244,0,0,0,2.724,1.887,8.576,8.576,0,0,0,3.45.686h11.852v-7.2h-12.5v-4.078H739.79v16.122Zm37.1-35.577a13.094,13.094,0,0,1-5.354-1.086,13.187,13.187,0,0,1-7.088-7.451,15.274,15.274,0,0,1-1.01-5.6,14.8,14.8,0,0,1,1.01-5.565,12.346,12.346,0,0,1,2.82-4.288,12.7,12.7,0,0,1,4.269-2.744,14.433,14.433,0,0,1,5.354-.972h6.745a14.8,14.8,0,0,1,5.507.991,12.272,12.272,0,0,1,7.069,7.07,14.8,14.8,0,0,1,.991,5.507,15.311,15.311,0,0,1-1.01,5.6,13.427,13.427,0,0,1-2.821,4.478,13.235,13.235,0,0,1-4.287,2.973,13.424,13.424,0,0,1-5.45,1.086Zm-3.449-22.2a8.179,8.179,0,0,0-2.725,1.849,8.511,8.511,0,0,0-1.791,2.821,9.771,9.771,0,0,0-.648,3.621,9.959,9.959,0,0,0,.648,3.621,8.626,8.626,0,0,0,1.791,2.878,8.249,8.249,0,0,0,2.725,1.886,8.575,8.575,0,0,0,3.449.686h6.745a8.811,8.811,0,0,0,3.506-.686,8.276,8.276,0,0,0,4.573-4.765,9.957,9.957,0,0,0,.648-3.621,9.808,9.808,0,0,0-.648-3.6,8.146,8.146,0,0,0-4.573-4.688,9.045,9.045,0,0,0-3.506-.667h-6.745A8.8,8.8,0,0,0,756.713,616.514Zm-42.4,22.2,7.452-27.708h4.84l-5.962,22.868h17.146v4.84Z"
                        transform="translate(-709.607 -611.007)"
                        fill="#fff"
                      />
                    </svg> */}
                    <h3 className="mt-8 2xl:mt-14 text-xl 2xl:text-2xl text-white font-secondary">
                    Podcasts
                    </h3>
                    <p className="mt-4 text-xs leading-5 2xl:text-base text-white font-secondary font-light text-justify w-[200px] 2xl:w-[280px]">
                    Unfiltered, unforgettable, and impossible to ignore. We create podcasts that cut through the noise—engaging, story-driven, and built to grow your brand’s voice. From concept to production, we handle it all, delivering high-quality audio and video podcasts that captivate audiences and keep them coming back for more.
                    </p>
                    {/* <Link href={"/case-studies/edenmill-ecommerce"}>
                      <button className="block text-right underline text-sm 2xl:text-base my-6 text-white font-secondary">
                        <span>Read More</span>
                        <svg
                          className="inline-block ml-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="9.903"
                          height="14.116"
                          viewBox="0 0 9.903 17.116"
                        >
                          <path
                            id="Rectangle_8"
                            data-name="Rectangle 8"
                            d="M881.928,1038.33l7.785,7.854-7.785,7.854"
                            transform="translate(-881.218 -1037.626)"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2"
                          />
                        </svg>
                      </button>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:absolute lg:right-0 lg:h-screen flex items-center xl:px-10 mr-6 mt-10 lg:mt-0">
              <button className="text-primary text-left text-xl xl:text-2xl 2xl:text-4xl invisible">
                <span className="font-light block">View more </span>
                <span className="font-bold lg:block">case </span>
                <span className="font-bold">studies</span>
                <svg
                  className="inline-block ml-3 w-5 xl:w-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  width="55.597"
                  height="20.995"
                  viewBox="0 0 68.597 20.995"
                >
                  <path
                    id="Rectangle_8"
                    data-name="Rectangle 8"
                    d="M2115.838,579.849l9.739,9.792-9.739,9.792"
                    transform="translate(-2058.39 -579.144)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <line
                    id="Shape_11"
                    data-name="Shape 11"
                    x1="66.07"
                    transform="translate(0 10.226)"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div id="case-studies" className="block lg:hidden">
        <div className="py-10 px-8">
          {/* <p className="st-reveal text-white font-secondary mb-3 text-lg font-bold translate-y-10">
            <span className="text-2xl">05.</span> Case Studies
          </p> */}
          <h2 className="st-reveal font-primary text-5xl lg:text-4xl xl:text-5xl 2xl:text-7xl leading-[3.5rem] lg:leading-10 xl:leading-[3.5rem] 2xl:leading-[4.5rem] text-white translate-y-10 mb-5">
            Content <br />
            {/* <span className="text-primary orange-scale">itself</span>: */}
          </h2>
          {/* <button
            className="my-16 block mx-auto -translate-x-4"
            onClick={() => setOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="130.435"
              height="125.0569"
              viewBox="0 0 172.05 164.367"
            >
              <g id="show_reel" transform="translate(-144.108 -783.492)">
                <g
                  id="Group_4"
                  data-name="Group 4"
                  transform="matrix(1, 0.017, -0.017, 1, 15.144, -4.126)"
                >
                  <path
                    id="watch_our_show_reel"
                    data-name="watch  our  show  reel"
                    d="M230.147,945.342a4.662,4.662,0,0,1-1.538-3.774,4.538,4.538,0,0,1,.848-2.746,5.08,5.08,0,0,1,2.367-1.751l-3.968-7.154v-.14l2.386,0,3.667,6.818,3.962,0-.007-6.822,2.236,0,.017,16.864-5.583.005h-.012A6.6,6.6,0,0,1,230.147,945.342Zm4.307-6.93a3.853,3.853,0,0,0-2.634.861,2.9,2.9,0,0,0-.977,2.3,3.06,3.06,0,0,0,.935,2.4,3.952,3.952,0,0,0,2.694.845l3.406,0-.006-6.405Zm-23.985,4.726.418-1.77,8.15,1.923L220.285,938l-7.114-1.679.418-1.77,7.113,1.679,1.373-5.818-8.263-1.949.418-1.77,10.427,2.461-3.873,16.413Zm48.271-17.792,1.8-.926,8.709,9.341.824,1.022-.351-1.265-2.415-12.577,1.8-.927,11.336,13.135-1.978,1.017-7.648-9.052-1.306-1.83.494,2,2.413,11.991-1.669.858-8.275-8.977-1.344-1.6.718,2.183,2.947,11.457-1.988,1.022Zm-64.821,10.512.8-1.634,7.525,3.674,2.383-4.882-6.567-3.207.8-1.633,6.568,3.206,2.622-5.37-7.629-3.725.8-1.634,9.628,4.7-7.4,15.155Zm-7.932-5.467,9.359-11.78-6.258-4.972,1.131-1.424,8.008,6.362-10.49,13.2Zm98.88-5.553a10.483,10.483,0,0,1-3.638-2.485l-.751-.757a10.427,10.427,0,0,1-2.453-3.659,6.315,6.315,0,0,1-.308-3.667,6.52,6.52,0,0,1,8.71-4.7,9.987,9.987,0,0,1,3.577,2.366l.857.863a10.322,10.322,0,0,1,2.425,3.648,6.252,6.252,0,0,1-1.5,6.906,6.539,6.539,0,0,1-3.227,1.821,5.855,5.855,0,0,1-1.261.137A6.717,6.717,0,0,1,284.868,924.838ZM280.9,912.409a3.929,3.929,0,0,0-1.264,3.463,7.531,7.531,0,0,0,2.3,4.052l.881.888a7.563,7.563,0,0,0,4.1,2.422A3.975,3.975,0,0,0,290.437,922a3.931,3.931,0,0,0,1.228-3.476,7.41,7.41,0,0,0-2.251-4.039l-.872-.88a7.576,7.576,0,0,0-4.085-2.385,4.493,4.493,0,0,0-.7-.056A3.956,3.956,0,0,0,280.9,912.409Zm6.212-9.372,1.105-1.943,6.775,3.856,4.2-7.389-6.775-3.856,1.1-1.933,14.657,8.341-1.1,1.932-6.3-3.586-4.2,7.389,6.3,3.586-1.105,1.943Zm19.38-11.659.582-2.158a3.078,3.078,0,0,0,2.582-.311,3.953,3.953,0,0,0,1.563-2.421,4.052,4.052,0,0,0-.031-2.666,2.418,2.418,0,0,0-1.7-1.414,2.175,2.175,0,0,0-1.914.389,8.585,8.585,0,0,0-2.036,2.534,13.814,13.814,0,0,1-2.117,2.836,5,5,0,0,1-2.063,1.266,4.24,4.24,0,0,1-2.308-.029,3.942,3.942,0,0,1-2.754-2.4,6.816,6.816,0,0,1-.077-4.448A7.923,7.923,0,0,1,297.7,879.6a5.458,5.458,0,0,1,2.366-1.767,4.454,4.454,0,0,1,2.751-.1l-.583,2.158a2.9,2.9,0,0,0-2.625.461,4.755,4.755,0,0,0-1.642,2.682,4.379,4.379,0,0,0-.01,2.793,2.334,2.334,0,0,0,1.645,1.416,2.289,2.289,0,0,0,2.077-.339,10.008,10.008,0,0,0,2.113-2.693,10.456,10.456,0,0,1,3.037-3.493,3.862,3.862,0,0,1,3.2-.487,4.081,4.081,0,0,1,2.766,2.4,6.331,6.331,0,0,1,.179,4.337,6.911,6.911,0,0,1-1.456,2.816,5.1,5.1,0,0,1-2.339,1.552,4.738,4.738,0,0,1-2.688.048Zm-7.851-31.258,6.16-4.689-.624-3.911-6.737,1.075-.352-2.208,16.654-2.656.879,5.513a6.605,6.605,0,0,1-.59,4.534,4.668,4.668,0,0,1-3.488,2.11,4.54,4.54,0,0,1-2.845-.408,5.084,5.084,0,0,1-2.1-2.064l-6.445,5.039-.138.022Zm7.332-8.887.538,3.374a3.856,3.856,0,0,0,1.263,2.467,2.907,2.907,0,0,0,2.424.6,3.059,3.059,0,0,0,2.225-1.3,3.949,3.949,0,0,0,.412-2.793l-.536-3.362Zm-9.232-7.046a6.044,6.044,0,0,1-3.152-3.042l-.254-.535a6.311,6.311,0,0,1-.36-4.645,5.345,5.345,0,0,1,3.125-3.15l10.566-4.515.865,2.024-10.5,4.488A3.517,3.517,0,0,0,295,839.9a3.9,3.9,0,0,0,2.062,2.262,3.85,3.85,0,0,0,3-.194l10.513-4.493.878,2.056-10.544,4.506a5.985,5.985,0,0,1-2.334.506A5.037,5.037,0,0,1,296.738,844.187Zm-8.864-15.634a6.52,6.52,0,0,1-3.649-9.2,10.01,10.01,0,0,1,2.768-3.277l.958-.75a10.305,10.305,0,0,1,3.9-1.984,6.254,6.254,0,0,1,6.684,2.3,6.547,6.547,0,0,1,1.432,3.416,6.307,6.307,0,0,1-.768,3.624,10.47,10.47,0,0,1-2.892,3.323l-.84.657a10.42,10.42,0,0,1-3.92,2.011,7.122,7.122,0,0,1-1.7.214A5.9,5.9,0,0,1,287.874,828.554Zm5.851-13.355a7.415,7.415,0,0,0-4.274,1.765l-.976.764a7.57,7.57,0,0,0-2.845,3.779,4.282,4.282,0,0,0,4.057,5.333,7.531,7.531,0,0,0,4.293-1.816l.986-.771a7.565,7.565,0,0,0,2.883-3.787,3.974,3.974,0,0,0-.815-3.642,3.927,3.927,0,0,0-3.225-1.625ZM183.032,802.612l1.879-1.189,8.426,8.334,1.463,1.706-.67-1.948-3.474-11.728,1.586-1,9.043,8.2,1.481,1.475-.911-2.11L197.9,793.2l1.889-1.2,5.562,16.437-1.713,1.084L194.13,801l-.913-.943.463,1.229,3.527,12.311-1.713,1.084Zm83.318,7.276,3.392-7.018-7.655-3.7-3.392,7.018-2-.968,7.339-15.184,2,.968-3.155,6.529,7.654,3.7,3.155-6.528,2.012.973-7.339,15.184ZM211.734,788.1l1.872-.53,10.805,14.466-2.2.622-2.752-3.806-6.8,1.926-.323,4.678-2.207.625Zm1.083,10.745,5.516-1.563-4.914-6.806Zm33.821,4.172a5.939,5.939,0,0,1-4.311-2.991,8.621,8.621,0,0,1-.711-5.967l.3-1.594a9.6,9.6,0,0,1,1.589-3.909,6.274,6.274,0,0,1,2.846-2.253,6.635,6.635,0,0,1,3.682-.28,6.094,6.094,0,0,1,3.957,2.271,6.281,6.281,0,0,1,1.088,4.43l-2.2-.413a4.845,4.845,0,0,0-.694-3.109,3.8,3.8,0,0,0-2.49-1.391,3.979,3.979,0,0,0-3.576.932,7.241,7.241,0,0,0-2.019,4.185l-.3,1.607a7.439,7.439,0,0,0,.319,4.507,3.706,3.706,0,0,0,2.853,2.188,4.28,4.28,0,0,0,2.949-.3,4.654,4.654,0,0,0,1.832-2.631l2.2.413a6.2,6.2,0,0,1-2.7,3.693,5.787,5.787,0,0,1-3,.771A8.721,8.721,0,0,1,246.638,803.017Zm-17.356-16.245-5.4.293-.1-1.816,13.023-.707.1,1.816-5.413.293.815,15.024-2.21.12Z"
                    fill="#fff"
                  />
                  <path
                    id="Ellipse_1"
                    data-name="Ellipse 1"
                    d="M173.161,848.627a63.7,63.7,0,0,1,16.029-27.485m-4.077,85.134a63.877,63.877,0,0,1-9.677-16.312q-1.127-2.772-2-5.664"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                </g>
                <path
                  id="new_"
                  data-name="new!"
                  d="M176.365,870.75a1.692,1.692,0,1,1,1.71,1.692A1.659,1.659,0,0,1,176.365,870.75Zm-7.513,1.692-3.347-7.531-3.365,7.531h-.8l-4.8-12.224h2.729l2.674,7.094L165.086,860h.819l3.146,7.276,2.674-7.058h2.729l-4.8,12.224Zm-25.339,0-6.949-7.421v7.2h-2.455V860h.8l6.967,7.385v-7.167h2.455v12.224Zm3.548-.219V860.218h8.076v2.219h-5.62v2.437h4.129v2.092h-4.129V870h5.839v2.219Zm29.978-4.4-.473-7.6h2.929l-.454,7.6Z"
                  transform="translate(10)"
                  fill="#04FF00"
                />
                <path
                  id="Shape_7"
                  data-name="Shape 7"
                  d="M223.994,845.413l32.222,18.8-32.222,18.8Z"
                  fill="#fff"
                />
              </g>
            </svg>
          </button> */}
        </div>

        <div className="grid">
          {/* Case Study 1 */}
          <div
            id="case-study-mob-1"
            className="w-[100%] h-80 relative bg-bottom bg-no-repeat bg-cover overflow-hidden"
            style={{ backgroundImage: 'url("/img/eden-thumbnail.jpg")' }}
          >
            <div
              id="project-overlay-1"
              className="absolute z-50 h-full w-full bg-secondary/60"
            >
              <button
                className="w-full p-4 bg-[#17222A]/80 block"
                onClick={() => {
                  caseStudyToggleMob(1), setCaseStudy(!caseStudy);
                }}
              >
                <span
                  id="btn-rotate-1"
                  className="uppercase text-sm text-white font-primary tracking-widest"
                >
                  Open
                </span>
              </button>
              <div
                id="project-details-1"
                className="w-full h-full flex gap-5 p-4 mt-5 mb-5 invisible opacity-0"
              >
                {/* <div className="flex items-center h-40">
                  <img
                    src="/img/eden-logo-white.png"
                    className="w-40 mx-auto"
                    alt=""
                  />
                </div> */}
                <div>
                  <h3 className="text-xl text-white font-secondary">
                  Content Creation
                  </h3>
                  <p className="mt-4 text-xs leading-5 text-white font-secondary font-light text-justify w-full">
                  Content that captivates, converts, and keeps audiences coming back. From high-impact video and cinematic storytelling to TV, podcasts, and brand narratives that stick, we craft content that cuts through the noise. No filler—just bold, engaging, and strategy-driven content designed to build brands and spark movements.
                  </p>
                  {/* <Link href={"/case-studies/edenmill-ecommerce"}>
                    <button className="block text-right underline text-sm mt-6 text-white font-secondary">
                      <span>Read More</span>
                      <svg
                        className="inline-block ml-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9.903"
                        height="14.116"
                        viewBox="0 0 9.903 17.116"
                      >
                        <path
                          id="Rectangle_8"
                          data-name="Rectangle 8"
                          d="M881.928,1038.33l7.785,7.854-7.785,7.854"
                          transform="translate(-881.218 -1037.626)"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 2 */}
          <div
            id="case-study-mob-2"
            className="w-[100%] h-80 relative bg-bottom bg-no-repeat bg-cover overflow-hidden"
            style={{ backgroundImage: 'url("/img/case_study_2.jpg")' }}
          >
            <div
              id="project-overlay-2"
              className="absolute z-50 h-full w-full bg-secondary/60"
            >
              <button
                className="w-full p-4 bg-[#17222A]/80 block"
                onClick={() => {
                  caseStudyToggleMob(2), setCaseStudy(!caseStudy);
                }}
              >
                <span
                  id="btn-rotate-2"
                  className="uppercase text-sm text-white font-primary tracking-widest"
                >
                  Open
                </span>
              </button>
              <div
                id="project-details-2"
                className="w-full h-full flex gap-5 p-4 mb-5 invisible opacity-0"
              >
                {/* <svg
                  className="w-full px-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="71.38"
                  height="63.285"
                  viewBox="0 0 71.38 63.285"
                >
                  <path
                    id="logo"
                    d="M760.675,674.293a13.094,13.094,0,0,1-5.355-1.086,13.27,13.27,0,0,1-4.268-2.973,13.421,13.421,0,0,1-2.821-4.478,15.293,15.293,0,0,1-1.01-5.6,14.812,14.812,0,0,1,1.01-5.565,12.361,12.361,0,0,1,2.821-4.288,12.69,12.69,0,0,1,4.268-2.744,14.434,14.434,0,0,1,5.355-.972h6.745a14.8,14.8,0,0,1,5.506.991,12.266,12.266,0,0,1,7.069,7.07,14.8,14.8,0,0,1,.991,5.507,15.291,15.291,0,0,1-1.01,5.6,13.434,13.434,0,0,1-2.82,4.478,13.228,13.228,0,0,1-4.288,2.973,13.417,13.417,0,0,1-5.45,1.086Zm-3.45-22.2a8.171,8.171,0,0,0-2.724,1.849,8.488,8.488,0,0,0-1.791,2.821,9.749,9.749,0,0,0-.648,3.621A9.94,9.94,0,0,0,752.71,664a8.6,8.6,0,0,0,1.791,2.877,8.245,8.245,0,0,0,2.724,1.887,8.578,8.578,0,0,0,3.45.686h6.745a8.806,8.806,0,0,0,3.505-.686A8.288,8.288,0,0,0,775.5,664a9.976,9.976,0,0,0,.648-3.621,9.825,9.825,0,0,0-.648-3.6,8.151,8.151,0,0,0-4.574-4.688,9.039,9.039,0,0,0-3.505-.667h-6.745A8.805,8.805,0,0,0,757.225,652.091Zm-34.165,22.2a13.1,13.1,0,0,1-5.355-1.086,13.283,13.283,0,0,1-4.269-2.973,13.418,13.418,0,0,1-2.82-4.478,15.291,15.291,0,0,1-1.01-5.6,14.811,14.811,0,0,1,1.01-5.565,12.358,12.358,0,0,1,2.82-4.288,12.7,12.7,0,0,1,4.269-2.744,14.435,14.435,0,0,1,5.355-.972h15.015v4.84H723.06a8.8,8.8,0,0,0-3.45.667,8.17,8.17,0,0,0-2.724,1.849,8.5,8.5,0,0,0-1.792,2.821,9.766,9.766,0,0,0-.647,3.621,9.957,9.957,0,0,0,.647,3.621,8.614,8.614,0,0,0,1.792,2.877,8.244,8.244,0,0,0,2.724,1.887,8.576,8.576,0,0,0,3.45.686h11.852v-7.2h-12.5v-4.078H739.79v16.122Zm37.1-35.577a13.094,13.094,0,0,1-5.354-1.086,13.187,13.187,0,0,1-7.088-7.451,15.274,15.274,0,0,1-1.01-5.6,14.8,14.8,0,0,1,1.01-5.565,12.346,12.346,0,0,1,2.82-4.288,12.7,12.7,0,0,1,4.269-2.744,14.433,14.433,0,0,1,5.354-.972h6.745a14.8,14.8,0,0,1,5.507.991,12.272,12.272,0,0,1,7.069,7.07,14.8,14.8,0,0,1,.991,5.507,15.311,15.311,0,0,1-1.01,5.6,13.427,13.427,0,0,1-2.821,4.478,13.235,13.235,0,0,1-4.287,2.973,13.424,13.424,0,0,1-5.45,1.086Zm-3.449-22.2a8.179,8.179,0,0,0-2.725,1.849,8.511,8.511,0,0,0-1.791,2.821,9.771,9.771,0,0,0-.648,3.621,9.959,9.959,0,0,0,.648,3.621,8.626,8.626,0,0,0,1.791,2.878,8.249,8.249,0,0,0,2.725,1.886,8.575,8.575,0,0,0,3.449.686h6.745a8.811,8.811,0,0,0,3.506-.686,8.276,8.276,0,0,0,4.573-4.765,9.957,9.957,0,0,0,.648-3.621,9.808,9.808,0,0,0-.648-3.6,8.146,8.146,0,0,0-4.573-4.688,9.045,9.045,0,0,0-3.506-.667h-6.745A8.8,8.8,0,0,0,756.713,616.514Zm-42.4,22.2,7.452-27.708h4.84l-5.962,22.868h17.146v4.84Z"
                    transform="translate(-709.607 -611.007)"
                    fill="#fff"
                  />
                </svg> */}
                <div>
                  <h3 className="text-xl text-white font-secondary">
                  Video & TV
                  </h3>
                  <p className="mt-4 text-xs leading-5 text-white font-secondary font-light text-justify w-full">
                  Cinematic storytelling that grabs attention and leaves a lasting impact. From high-energy brand videos to full-scale TV productions, we create content that engages, inspires, and drives action. Sharp visuals, compelling narratives, and bold execution—built to make your brand unforgettable on every screen.
                  </p>
                  {/* <Link href={"/case-studies/edenmill-ecommerce"}>
                    <button className="block text-right underline text-sm mt-6 text-white font-secondary">
                      <span>Read More</span>
                      <svg
                        className="inline-block ml-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9.903"
                        height="14.116"
                        viewBox="0 0 9.903 17.116"
                      >
                        <path
                          id="Rectangle_8"
                          data-name="Rectangle 8"
                          d="M881.928,1038.33l7.785,7.854-7.785,7.854"
                          transform="translate(-881.218 -1037.626)"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 3 */}
          <div
            id="case-study-mob-3"
            className="w-[100%] h-80 relative bg-bottom bg-no-repeat bg-cover overflow-hidden"
            style={{ backgroundImage: 'url("/img/case_study_3.jpg")' }}
          >
            <div
              id="project-overlay-3"
              className="absolute z-50 h-full w-full bg-secondary/60"
            >
              <button
                className="w-full p-4 bg-[#17222A]/80 block"
                onClick={() => {
                  caseStudyToggleMob(3), setCaseStudy(!caseStudy);
                }}
              >
                <span
                  id="btn-rotate-3"
                  className="uppercase text-sm text-white font-primary tracking-widest"
                >
                  Open
                </span>
              </button>
              <div
                id="project-details-3"
                className="w-full h-full flex gap-5 p-4 mb-5 invisible opacity-0"
              >
                {/* <svg
                  className="w-full px-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="71.38"
                  height="63.285"
                  viewBox="0 0 71.38 63.285"
                >
                  <path
                    id="logo"
                    d="M760.675,674.293a13.094,13.094,0,0,1-5.355-1.086,13.27,13.27,0,0,1-4.268-2.973,13.421,13.421,0,0,1-2.821-4.478,15.293,15.293,0,0,1-1.01-5.6,14.812,14.812,0,0,1,1.01-5.565,12.361,12.361,0,0,1,2.821-4.288,12.69,12.69,0,0,1,4.268-2.744,14.434,14.434,0,0,1,5.355-.972h6.745a14.8,14.8,0,0,1,5.506.991,12.266,12.266,0,0,1,7.069,7.07,14.8,14.8,0,0,1,.991,5.507,15.291,15.291,0,0,1-1.01,5.6,13.434,13.434,0,0,1-2.82,4.478,13.228,13.228,0,0,1-4.288,2.973,13.417,13.417,0,0,1-5.45,1.086Zm-3.45-22.2a8.171,8.171,0,0,0-2.724,1.849,8.488,8.488,0,0,0-1.791,2.821,9.749,9.749,0,0,0-.648,3.621A9.94,9.94,0,0,0,752.71,664a8.6,8.6,0,0,0,1.791,2.877,8.245,8.245,0,0,0,2.724,1.887,8.578,8.578,0,0,0,3.45.686h6.745a8.806,8.806,0,0,0,3.505-.686A8.288,8.288,0,0,0,775.5,664a9.976,9.976,0,0,0,.648-3.621,9.825,9.825,0,0,0-.648-3.6,8.151,8.151,0,0,0-4.574-4.688,9.039,9.039,0,0,0-3.505-.667h-6.745A8.805,8.805,0,0,0,757.225,652.091Zm-34.165,22.2a13.1,13.1,0,0,1-5.355-1.086,13.283,13.283,0,0,1-4.269-2.973,13.418,13.418,0,0,1-2.82-4.478,15.291,15.291,0,0,1-1.01-5.6,14.811,14.811,0,0,1,1.01-5.565,12.358,12.358,0,0,1,2.82-4.288,12.7,12.7,0,0,1,4.269-2.744,14.435,14.435,0,0,1,5.355-.972h15.015v4.84H723.06a8.8,8.8,0,0,0-3.45.667,8.17,8.17,0,0,0-2.724,1.849,8.5,8.5,0,0,0-1.792,2.821,9.766,9.766,0,0,0-.647,3.621,9.957,9.957,0,0,0,.647,3.621,8.614,8.614,0,0,0,1.792,2.877,8.244,8.244,0,0,0,2.724,1.887,8.576,8.576,0,0,0,3.45.686h11.852v-7.2h-12.5v-4.078H739.79v16.122Zm37.1-35.577a13.094,13.094,0,0,1-5.354-1.086,13.187,13.187,0,0,1-7.088-7.451,15.274,15.274,0,0,1-1.01-5.6,14.8,14.8,0,0,1,1.01-5.565,12.346,12.346,0,0,1,2.82-4.288,12.7,12.7,0,0,1,4.269-2.744,14.433,14.433,0,0,1,5.354-.972h6.745a14.8,14.8,0,0,1,5.507.991,12.272,12.272,0,0,1,7.069,7.07,14.8,14.8,0,0,1,.991,5.507,15.311,15.311,0,0,1-1.01,5.6,13.427,13.427,0,0,1-2.821,4.478,13.235,13.235,0,0,1-4.287,2.973,13.424,13.424,0,0,1-5.45,1.086Zm-3.449-22.2a8.179,8.179,0,0,0-2.725,1.849,8.511,8.511,0,0,0-1.791,2.821,9.771,9.771,0,0,0-.648,3.621,9.959,9.959,0,0,0,.648,3.621,8.626,8.626,0,0,0,1.791,2.878,8.249,8.249,0,0,0,2.725,1.886,8.575,8.575,0,0,0,3.449.686h6.745a8.811,8.811,0,0,0,3.506-.686,8.276,8.276,0,0,0,4.573-4.765,9.957,9.957,0,0,0,.648-3.621,9.808,9.808,0,0,0-.648-3.6,8.146,8.146,0,0,0-4.573-4.688,9.045,9.045,0,0,0-3.506-.667h-6.745A8.8,8.8,0,0,0,756.713,616.514Zm-42.4,22.2,7.452-27.708h4.84l-5.962,22.868h17.146v4.84Z"
                    transform="translate(-709.607 -611.007)"
                    fill="#fff"
                  />
                </svg> */}
                <div>
                  <h3 className="text-xl text-white font-secondary">
                  Podcasts
                  </h3>
                  <p className="mt-4 text-xs leading-5 text-white font-secondary font-light text-justify w-full">
                  Unfiltered, unforgettable, and impossible to ignore. We create podcasts that cut through the noise—engaging, story-driven, and built to grow your brand’s voice. From concept to production, we handle it all, delivering high-quality audio and video podcasts that captivate audiences and keep them coming back for more.
                  </p>
                  {/* <Link href={"/case-studies/edenmill-ecommerce"}>
                    <button className="block text-right underline text-sm mt-6 text-white font-secondary">
                      <span>Read More</span>
                      <svg
                        className="inline-block ml-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9.903"
                        height="14.116"
                        viewBox="0 0 9.903 17.116"
                      >
                        <path
                          id="Rectangle_8"
                          data-name="Rectangle 8"
                          d="M881.928,1038.33l7.785,7.854-7.785,7.854"
                          transform="translate(-881.218 -1037.626)"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2"
                        />
                      </svg>
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="st-btn bg-secondary p-6 text-center w-full text-primary font-secondary text-xl font-thin flex space-x-2 justify-center items-center -translate-x-full invisible">
          <span>View more </span>
          <strong className="font-semibold">case studies</strong>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60.779"
            height="21.018"
            viewBox="0 0 110.779 21.018"
          >
            <g
              id="Group_5"
              data-name="Group 5"
              transform="translate(-6329 -1000.823)"
            >
              <path
                id="Rectangle_8"
                data-name="Rectangle 8"
                d="M6428.648,1000.527l9.723,9.806-9.723,9.805"
                transform="translate(0 1)"
                fill="none"
                stroke="#fff"
                strokeWidth="1.999"
              />
              <path
                id="Shape_11"
                data-name="Shape 11"
                d="M6437.253,1010.065H6329"
                transform="translate(0 1)"
                fill="none"
                stroke="#fff"
                strokeWidth="1.999"
              />
            </g>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Studies;
