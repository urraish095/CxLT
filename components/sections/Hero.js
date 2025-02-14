import React from "react";
const { useRef, useEffect, useContext } = React;

// Dependencies
import gsap from "gsap";

// Context API
import Context from "../../lib/Context";

const Hero = () => {
  // Use Context
  const { animation } = useContext(Context);
  const [runAnimation, setRunAnimation] = animation;

  const the = useRef();
  const outcome = useRef();
  const agency = useRef();

  const block1 = useRef();
  const block2 = useRef();
  const block3 = useRef();
  const block4 = useRef();

  const rights = useRef();
  const button = useRef();

  useEffect(() => {
    if (runAnimation == true) {
      gsap.to([the.current, agency.current], {
        delay: 0.2,
        duration: 1,
        translateX: "-100%",
        ease: "none",
      });

      gsap.to(outcome.current, {
        delay: 0.2,
        duration: 1,
        translateX: "100%",
        ease: "none",
      });

      const timeline = gsap.timeline();

      timeline
        .to(block1.current, {
          delay: 0.2,
          duration: 0.8,
          translateY: 0,
          opacity: 1,
          ease: "none",
        })
        .to(block2.current, {
          duration: 0.8,
          translateY: 0,
          opacity: 1,
          ease: "none",
        })
        .to(block3.current, {
          duration: 0.8,
          translateY: 0,
          opacity: 1,
          ease: "none",
        })
        .to(block4.current, {
          duration: 0.8,
          translateY: 0,
          opacity: 1,
          ease: "none",
        })
        .to([button.current, rights.current], {
          duration: 2,
          opacity: 1,
        });
    }
  }, [runAnimation]);

  return (
    <div className="bg-secondary lg:w-screen h-screen sm:h-auto grid sm:block">
      <div className="grid md:grid-cols-2 relative">
        <div className="flex justify-center lg:justify-end pr-0 lg:pr-8 xl:pr-0 items-center md:h-screen mt-32 md:mt-0">
          <div className="font-primary">
            <h2 className="text-3xl sm:text-5xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white text-left relative overflow-hidden">
              <span
                className="absolute block top-0 left-0 z-10 h-full translate-x-0 bg-secondary w-fit text-transparent"
                ref={the}
              >
                
              </span>
              <span></span>
            </h2>
            <h1 className="text-5xl sm:text-7xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-8xl text-white orange-scale uppercase relative overflow-hidden">
              <span
                className="absolute block top-0 left-0 z-10 h-full translate-x-0 bg-secondary w-fit text-transparent"
                ref={outcome}
              >
                Join The
              </span>
              <span>Join The </span>
            </h1>
            <h2 className="text-7xl sm:text-5xl md:text-4xl xl:text-5xl 2xl:text-9xl text-primary text-right pb-6 relative overflow-hidden">
              <span
                className="absolute block top-0 right-0 z-10 h-full translate-x-0 bg-secondary w-fit text-transparent"
                ref={agency}
              >
                CxLT
              </span>
              <span>CxLT</span>
            </h2>
          </div>
        </div>

        <div className="flex justify-center items-center md:h-screen px-6 md:px-0">
          <div className="font-secondary overflow-hidden text-xs lg:text-base">
            <div
              className="border-l-2 border-primary p-5 ml-[0.1rem] -translate-y-24 opacity-0 relative z-40 bg-secondary"
              ref={block1}
            >
              <p className="text-white text-3xl">
                <strong>The Rebellious Full-Service Agency</strong>
              </p>
            </div>
            <div
              className="px-6 py-10 -translate-y-40 opacity-0 z-10"
              ref={block4}
            >
              <p className="text-white font-light leading-7 text-1xl">
                We craft brands, build websites, engineer growth, {" "}
                <br className="hidden lg:block" />
                and disrupt the ordinary. From strategy and design to {" "}
                <br className="hidden lg:block" />
                digital marketing, tech, and content—everything we do is {" "}
                <br className="hidden lg:block" />
                built to convert. Whether you need a go-to-market plan, AI {" "}
                <br className="hidden lg:block" />
                automation, or killer videography, we make it bold, fast, and {" "}
                <br className="hidden lg:block" />
                f***ing effective. {" "}
                <br className="hidden lg:block" />
                <br className="hidden lg:block" /><strong>Welcome to the CxLT.</strong>
                
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 uppercase font-secondary font-normal tracking-wider text-xs text-white ml-10 lg:ml-20 mb-10 lg:mb-16 opacity-0 hidden md:block"
          ref={rights}
        >
          <p className="mb-10">© {new Date().getFullYear()} CxLT</p>
          <div className="w-full flex justify-start items-end uppercase gap-5">
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
          </div>
        </div>

        <button
          data-id="#panel-3"
          data-panel="3"
          type="button"
          className="group anchor absolute bottom-0 right-0 uppercase font-primary btn-scale text-white mr-10 lg:mr-20 mb-10 lg:mb-16 border-2 border-white px-6 py-2.5 opacity-0 hidden md:flex justify-between items-center space-x-3 hover:border-primary hover:text-primary ease-in-out duration-300"
          ref={button}
        >
          <p>Scroll</p>
          <p className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="79.475"
              height="25.642"
              viewBox="0 0 79.475 25.642"
              className="absolute right-0 z-10 h-5 opacity-0 bottom-0 invisible group-hover:opacity-100 group-hover:visible ease-in-out duration-500"
            >
              <g transform="translate(-6360.304 -1000.823)">
                <path
                  d="M6428.648,1000.527l9.723,9.806-9.723,9.805"
                  transform="translate(0 1)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.999"
                />
                <path
                  d="M6437.253,1010.065h-25.983l-12.992,12.988v-12.988H6360.3"
                  transform="translate(0 1)"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="1.999"
                />
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110.779"
              height="21.018"
              viewBox="0 0 110.779 21.018"
              className="h-5 group-hover:opacity-0 group-hover:invisible ease-in-out duration-500"
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
          </p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
