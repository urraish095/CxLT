import React from "react";
import Link from "next/link";
const { useRef, useState, getBoundingClientRect } = React;

// Dependencies
import gsap from "gsap";

const Header = ({ ...props }) => {
  const screenMenu = useRef();
  const mobileMenu = useRef();

  const [menuStatus, setMenuStatus] = useState(false);

  const toggleMenu = () => {
    let viewport = window.innerWidth;

    if (viewport > "1024") {
      gsap.to(screenMenu.current, {
        duration: 0.5,
        translateY: menuStatus ? "-100%" : "0",
        ease: "none",
        display: "block",
      });
    } else {
      gsap.to(mobileMenu.current, {
        duration: 0.5,
        translateX: menuStatus ? "100%" : "0",
        ease: "none",
        display: "block",
      });
    }
  };

  const mobileScroll = (id) => {
    gsap.to(window, { duration: 1, scrollTo: id });
  };

  const ArrowSVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="95.779"
        height="17.018"
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
    );
  };

  return (
    <>
      {/* Header */}
      <div
        className={`fixed w-full z-40 px-6 lg:px-10 xl:px-20 py-4 lg:py-8 bg-secondary/80 backdrop-blur-sm lg:backdrop-blur-none lg:bg-transparent border-b border-white/10 lg:border-none ${props.hide && "opacity-0"
          }`}
      >
        <div className="flex justify-between items-center">
          <a href={"/"}>
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="68.315" viewBox="0 0 201.705 68.315">
              <g id="Group_76" data-name="Group 76" transform="translate(-451 -93)">
                <g id="Group_73" data-name="Group 73" transform="translate(451 93)">
                  <path id="Path_3" data-name="Path 3" d="M413.466,25.176h42.577v15.3h-4.353l-2.176-10.2H439.175V68.569l7.209,1.632v3.945h-23.26V70.2l7.209-1.632V30.277H419.927l-2.109,10.2h-4.353Z" transform="translate(-277.358 -15.985)" fill="#f903a1" />
                  <path id="Path_5" data-name="Path 5" d="M403.92,31.664H446.5v15.3h-4.353l-2.176-10.2H429.629V75.057l7.209,1.632v3.945H413.578V76.689l7.209-1.632V36.765H410.381l-2.108,10.2H403.92Z" transform="translate(-271.294 -20.107)" fill="#04ff00" />
                  <g id="Group_26" data-name="Group 26" transform="translate(44.655 25.236)">
                    <g id="Group_27" data-name="Group 27" transform="translate(0 0)">
                      <path id="Path_2" data-name="Path 2" d="M154.924,63.434l-4.51-8.319h-.1l-4.46,8.319H129.266l12.228-17.89L129.968,28.155h17.54l3.858,7.717h.1l4.009-7.717h16.487L159.735,45.042l12.879,18.391Z" transform="translate(-128.759 -28.155)" fill="#f903a1" />
                      <path id="Path_4" data-name="Path 4" d="M144.013,68.043l-4.27-7.876h-.095l-4.223,7.876h-15.7L131.3,51.105,120.386,34.642h16.606l3.653,7.306h.095l3.8-7.306h15.609L148.568,50.631l12.193,17.412Z" transform="translate(-119.722 -32.763)" fill="#04ff00" />
                      <path id="Path_11" data-name="Path 11" d="M153.558,68.043l-4.27-7.876h-.095l-4.223,7.876h-15.7l11.576-16.937L129.931,34.643h16.605l3.653,7.306h.1l3.8-7.306h15.609L158.113,50.631l12.193,17.412Z" transform="translate(-126.838 -32.764)" fill="#fff" />
                    </g>
                  </g>
                  <path id="Path_15" data-name="Path 15" d="M413.466,31.664h42.577v15.3h-4.353l-2.176-10.2H439.175V75.057l7.209,1.632v3.945h-23.26V76.69l7.209-1.632V36.765H419.927l-2.109,10.2h-4.353Z" transform="translate(-277.358 -20.072)" fill="#fff" />
                  <path id="Path_16" data-name="Path 16" d="M553.855,24.649l3.624,4.787-4.026,2.819-3.624-4.877-3.534,4.7-3.937-2.819,3.624-4.652-5.771-1.924,1.566-4.474,5.682,1.968V14.36h4.921v5.816l5.682-1.79,1.521,4.474Z" transform="translate(-357.876 -5.169)" fill="#04ff00" />
                  <g id="Group_71" data-name="Group 71" transform="translate(88.122 0)">
                    <rect id="Rectangle_2" data-name="Rectangle 2" width="44.685" height="68.315" transform="translate(0)" fill="#e4e4e5" />
                    <g id="Group_70" data-name="Group 70" transform="translate(0 5.237)">
                      <path id="Path_12" data-name="Path 12" d="M290.946,67.275V56.12h3.4V25.514h-3.4V14.359h28.7V25.514h-6.257V56.12h6.121V49.863h13.535V67.275Z" transform="translate(-287.465 -14.359)" fill="#f903a1" />
                      <path id="Path_13" data-name="Path 13" d="M281.4,73.762V62.608h3.4V32h-3.4V20.847h28.7V32h-6.257V62.608h6.121V56.35H323.5V73.762Z" transform="translate(-281.402 -18.481)" fill="#04ff00" />
                      <path id="Path_14" data-name="Path 14" d="M290.946,73.763V62.609h3.4V32h-3.4V20.848h28.7V32h-6.257V62.609h6.121V56.351h13.535V73.763Z" transform="translate(-287.465 -18.481)" fill="#13120b" />
                    </g>
                  </g>
                  <g id="Group_28" data-name="Group 28" transform="translate(0 7.424)">
                    <path id="Path_1" data-name="Path 1" d="M46.272,72.466a25.785,25.785,0,0,1-10.814,2.143,28.212,28.212,0,0,1-10.3-1.837A23.793,23.793,0,0,1,11.516,59.51,26.417,26.417,0,0,1,9.544,49.171,26.386,26.386,0,0,1,11.551,38.7a23.288,23.288,0,0,1,5.543-7.992,24.552,24.552,0,0,1,8.3-5.067,29.741,29.741,0,0,1,20.3.034,19.209,19.209,0,0,1,7.992,5.271l-7.89,7.89A9.769,9.769,0,0,0,41.511,35.5a14.224,14.224,0,0,0-5.442-1.088,13.784,13.784,0,0,0-5.611,1.122,13.164,13.164,0,0,0-4.386,3.095,14.107,14.107,0,0,0-2.857,4.659,16.456,16.456,0,0,0-1.02,5.883,16.926,16.926,0,0,0,1.02,5.985,13.923,13.923,0,0,0,2.823,4.659,12.7,12.7,0,0,0,4.319,3.026,13.725,13.725,0,0,0,5.509,1.088,12.809,12.809,0,0,0,6.053-1.36,11.739,11.739,0,0,0,4.149-3.537l8.094,7.618a22.925,22.925,0,0,1-7.89,5.815" transform="translate(-8.782 -23.87)" fill="#f903a1" />
                    <path id="Path_6" data-name="Path 6" d="M10.895,74.057A24.1,24.1,0,0,1,5.453,66,26.42,26.42,0,0,1,3.481,55.66,26.383,26.383,0,0,1,5.488,45.186a23.294,23.294,0,0,1,5.543-7.992,24.564,24.564,0,0,1,8.3-5.067,28.675,28.675,0,0,1,8.465-1.713c-.557-.032-1.116-.055-1.676-.055a29.281,29.281,0,0,0-10.27,1.768,24.554,24.554,0,0,0-8.3,5.067,23.287,23.287,0,0,0-5.543,7.992A26.378,26.378,0,0,0,0,55.659,26.4,26.4,0,0,0,1.972,66,23.789,23.789,0,0,0,15.609,79.26a28.212,28.212,0,0,0,10.3,1.836c.6,0,1.179-.02,1.755-.05a27.556,27.556,0,0,1-8.577-1.786,24.194,24.194,0,0,1-8.2-5.2" transform="translate(0 -27.992)" fill="#04ff00" />
                    <path id="Union_2" data-name="Union 2" d="M24.188,50.688h0A27.558,27.558,0,0,1,15.609,48.9,23.793,23.793,0,0,1,1.972,35.64,26.423,26.423,0,0,1,0,25.3,26.384,26.384,0,0,1,2.006,14.827,23.3,23.3,0,0,1,7.55,6.835a24.56,24.56,0,0,1,8.3-5.067A28.661,28.661,0,0,1,24.312.055h0c.6-.032,1.2-.055,1.806-.055A29.027,29.027,0,0,1,36.149,1.8a19.213,19.213,0,0,1,7.992,5.271l-7.89,7.89a9.668,9.668,0,0,0-1.7-1.784,10.086,10.086,0,0,0-2.587-1.549,14.232,14.232,0,0,0-5.442-1.088,15.436,15.436,0,0,0-1.791.113,13.163,13.163,0,0,0-8.206,4.1,14.106,14.106,0,0,0-2.857,4.659,16.445,16.445,0,0,0-1.02,5.883,16.917,16.917,0,0,0,1.02,5.985,13.918,13.918,0,0,0,2.822,4.659,12.7,12.7,0,0,0,4.319,3.027,13.2,13.2,0,0,0,3.809.986,15.976,15.976,0,0,1-1.781.1,13.72,13.72,0,0,1-5.509-1.088,12.7,12.7,0,0,1-4.319-3.026,13.929,13.929,0,0,1-2.823-4.659A16.918,16.918,0,0,1,9.169,25.3a16.918,16.918,0,0,0,1.021,5.985,13.929,13.929,0,0,0,2.823,4.659,12.7,12.7,0,0,0,4.319,3.026A13.72,13.72,0,0,0,22.84,40.06a15.976,15.976,0,0,0,1.781-.1,15.328,15.328,0,0,0,1.7.1,12.809,12.809,0,0,0,6.053-1.36,12.476,12.476,0,0,0,2.544-1.77l4.732,4.454-4.732-4.454a11.1,11.1,0,0,0,1.6-1.766l8.093,7.618a22.924,22.924,0,0,1-7.89,5.815,25.785,25.785,0,0,1-10.814,2.143C25.33,50.739,24.757,50.718,24.188,50.688ZM9.169,25.3Zm0,0a16.447,16.447,0,0,1,1.021-5.883A16.444,16.444,0,0,0,9.169,25.3Zm3.877-10.543A13.844,13.844,0,0,0,10.58,18.48a13.838,13.838,0,0,1,2.466-3.721,12.928,12.928,0,0,1,1.543-1.411A12.937,12.937,0,0,0,13.046,14.759ZM17.592,11.6a14.116,14.116,0,0,1,7.09-.946,14.1,14.1,0,0,0-7.09.946Z" transform="translate(3.481 2.366)" fill="#fff" stroke="rgba(0,0,0,0)" strokeMiterlimit="10" strokeWidth="1" />
                  </g>
                </g>
              </g>
            </svg>
          </a>

          {!props.close ? (
            <button
              className={`lg:bg-[#1b2934] p-4 rounded-full text-white opacity-100 nav-icon btn-scale ${props.headerStatus && "opacity-100"
                } duration-300 ease-in-out`}
              onClick={() => {
                setMenuStatus(!menuStatus);
                toggleMenu();
              }}
            >
              {menuStatus ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.054"
                  height="24.024"
                  viewBox="0 0 40.034 40.024"
                >
                  <g transform="translate(0.707 0.707)">
                    <line
                      x1="38.61"
                      y2="38.61"
                      transform="translate(0.01)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <line
                      x2="38.61"
                      y2="38.61"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27.143"
                  height="21.958"
                  viewBox="0 0 27.143 21.958"
                >
                  <g
                    id="Component_2_2"
                    data-name="Component 2 – 2"
                    transform="translate(0 0.999)"
                  >
                    <line
                      id="Shape_1"
                      data-name="Shape 3"
                      x1="27.143"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="1.999"
                    />
                    <line
                      id="Shape_2"
                      data-name="Shape 3"
                      x1="27.143"
                      fill="none"
                      transform="translate(0 3.959) rotate(30)"
                      stroke="#fff"
                      strokeWidth="1.999"
                    />
                    <line
                      id="Shape_3"
                      data-name="Shape 3"
                      x1="27.143"
                      fill="none"
                      transform="translate(0 19.959)"
                      stroke="#fff"
                      strokeWidth="1.999"
                    />
                  </g>
                </svg>
              )}
            </button>
          ) : (
            <Link
              href={{
                pathname: "/",
                query: "section=case-studies",
              }}
            >
              <button
                className={`bg-[#1b2934] p-4 rounded-full text-white opacity-100 nav-icon btn-scale ${props.headerStatus && "opacity-100"
                  } duration-300 ease-in-out`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24.054"
                  height="24.024"
                  viewBox="0 0 40.034 40.024"
                >
                  <g transform="translate(0.707 0.707)">
                    <line
                      x1="38.61"
                      y2="38.61"
                      transform="translate(0.01)"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <line
                      x2="38.61"
                      y2="38.61"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Desktop Menu */}
      <div
        className="fixed h-screen w-screen z-30 bg-secondary px-20 pt-28 pb-20 mb-20 -translate-y-full hidden lg:block"
        ref={screenMenu}
      >
        <nav
          className="grid grid-rows-2 grid-cols-3 gap-6 h-full relative"
          role="navigation"
        >
          <button
            data-id="#panel-3"
            data-panel="3"
            className="anchor group menu-btn orange-sacle"
            onClick={() => {
              setMenuStatus(!menuStatus);
              toggleMenu();
            }}
          >
            <p className="btn-box-p group-hover:text-white">01</p>
            <h4 className="btn-box-h4">
              Strategy
            </h4>
            <span className="btn-box-svg group-hover:opacity-100">
              <ArrowSVG />
            </span>
          </button>

          <button
            data-id="#panel-4"
            data-panel="4"
            className="anchor group menu-btn"
            onClick={() => {
              setMenuStatus(!menuStatus);
              toggleMenu();
            }}
          >
            <p className="btn-box-p group-hover:text-white">02</p>
            <h4 className="btn-box-h4">
              Design
            </h4>
            <span className="btn-box-svg group-hover:opacity-100">
              <ArrowSVG />
            </span>
          </button>

          <button
            data-id="#panel-5"
            data-panel="5"
            className="anchor group menu-btn"
            onClick={() => {
              setMenuStatus(!menuStatus);
              toggleMenu();
            }}
          >
            <p className="btn-box-p group-hover:text-white">03</p>
            <h4 className="btn-box-h4">
              Digital Marketing
            </h4>
            <span className="btn-box-svg group-hover:opacity-100">
              <ArrowSVG />
            </span>
          </button>

          <button
            data-id="#panel-6"
            data-panel="6"
            className="anchor group menu-btn"
            onClick={() => {
              setMenuStatus(!menuStatus);
              toggleMenu();
            }}
          >
            <p className="btn-box-p group-hover:text-white">04</p>
            <h4 className="btn-box-h4">
              Technology
            </h4>
            <span className="btn-box-svg group-hover:opacity-100">
              <ArrowSVG />
            </span>
          </button>

          <button
            data-id="#panel-7"
            data-panel="7"
            className="anchor group menu-btn"
            onClick={() => {
              setMenuStatus(!menuStatus);
              toggleMenu();
            }}
          >
            <p className="btn-box-p group-hover:text-white">05</p>
            <h4 className="btn-box-h4">
              Content Creation
            </h4>
            <span className="btn-box-svg group-hover:opacity-100">
              <ArrowSVG />
            </span>
          </button>

          <button
            data-id="#panel-8"
            data-panel="8"
            className="anchor group menu-btn"
            onClick={() => {
              setMenuStatus(!menuStatus);
              toggleMenu();
            }}
          >
            <p className="btn-box-p group-hover:text-white">06</p>
            <h4 className="btn-box-h4">
              Contact Us
            </h4>
            <span className="btn-box-svg group-hover:opacity-100">
              <ArrowSVG />
            </span>
          </button>

          {/* <div className="w-full absolute bottom-0 left-0 text-xs font-secondary font-light tracking-wider flex justify-center items-end uppercase gap-5 text-white -mb-12">
            <a
              href="https://www.instagram.com/adeo.group/"
              target="_blank"
              rel="noreferrer"
              className="href-scale"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com/adeogroup"
              target="_blank"
              rel="noreferrer"
              className="href-scale"
            >
              Twitter
            </a>
            <a
              href="https://www.facebook.com/adeogroup"
              target="_blank"
              rel="noreferrer"
              className="href-scale"
            >
              Facebook
            </a>
            <a
              href="https://www.linkedin.com/company/adeo-group"
              target="_blank"
              rel="noreferrer"
              className="href-scale"
            >
              Linkedin
            </a>
            <a
              href="https://vimeo.com/adeovideo"
              target="_blank"
              rel="noreferrer"
              className="href-scale"
            >
              Vimeo
            </a>
          </div> */}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className="fixed h-screen w-screen z-30 bg-secondary pt-28 pb-10 px-6 translate-x-full lg:block hidden"
        ref={mobileMenu}
      >
        <ul>
          <li className="mb-8">
            <button
              className="flex items-center text-left gap-8 text-2xl"
              onClick={() => {
                mobileScroll("#panel-3"), setMenuStatus(!menuStatus);
                toggleMenu();
              }}
            >
              <span className="text-primary orange-scale font-secondary font-light">
                01
              </span>
              <span className="text-white font-primary">
                Strategy
              </span>
            </button>
          </li>
          <li className="mb-8">
            <button
              className="flex items-center text-left gap-8 text-2xl"
              onClick={() => {
                mobileScroll("#panel-4"), setMenuStatus(!menuStatus);
                toggleMenu();
              }}
            >
              <span className="text-primary orange-scale font-secondary font-light">
                02
              </span>
              <span className="text-white font-primary">
                Design
              </span>
            </button>
          </li>
          <li className="mb-8">
            <button
              className="flex items-center text-left gap-8 text-2xl"
              onClick={() => {
                mobileScroll("#panel-5"), setMenuStatus(!menuStatus);
                toggleMenu();
              }}
            >
              <span className="text-primary orange-scale font-secondary font-light">
                03
              </span>
              <span className="text-white font-primary">
                Digital Marketing
              </span>
            </button>
          </li>
          <li className="mb-8">
            <button
              className="flex items-center text-left gap-8 text-2xl"
              onClick={() => {
                mobileScroll("#panel-6"), setMenuStatus(!menuStatus);
                toggleMenu();
              }}
            >
              <span className="text-primary orange-scale font-secondary font-light">
                04
              </span>
              <span className="text-white font-primary">
                Technology
              </span>
            </button>
          </li>
          <li className="mb-8">
            <button
              className="flex items-center text-left gap-8 text-2xl"
              onClick={() => {
                mobileScroll("#panel-7"), setMenuStatus(!menuStatus);
                toggleMenu();
              }}
            >
              <span className="text-primary orange-scale font-secondary font-light">
                05
              </span>
              <span className="text-white font-primary">
                Content Creation
              </span>
            </button>
          </li>
          <li className="mb-8">
            <button
              className="flex items-center text-left gap-8 text-2xl"
              onClick={() => {
                mobileScroll("#panel-7"), setMenuStatus(!menuStatus);
                toggleMenu();
              }}
            >
              <span className="text-primary orange-scale font-secondary font-light">
                06
              </span>
              <span className="text-white font-primary">
                Contact Us
              </span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;