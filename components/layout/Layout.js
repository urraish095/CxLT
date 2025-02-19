import React from "react";
import { useRouter } from "next/router";
const { useState, useEffect, useRef, useContext } = React;

// Dependencies
import gsap, { Linear } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ModalVideo from "react-modal-video";

// Register GSAP Plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

// Components
import Header from "./Header";
import Bullets from "./Bullets";

// Context API
import Context from "../../lib/Context";

// Layout Component
import { useIsomorphicLayoutEffect } from "./LayoutEffect";

const Layout = ({ children, ...props }) => {
  // Use Context
  const { index, animation, videModal } = useContext(Context);
  const [activeIndex, setActiveIndex] = index;
  const [runAnimation, setRunAnimation] = animation;
  const [isOpen, setOpen] = videModal;

  // ScrollSmoother Refs
  const $wrapper = useRef();
  const $content = useRef();

  // Loader & Slide Refs
  const preloader = useRef();
  const layoutSlides = useRef();

  // Page Transition
  let screen = useRef(null);

  // Header
  const [headerStatus, setHeaderStatus] = useState(false);
  const [hidden, setHidden] = useState(props.pageTransition);

  // Smooth Scroll & Preloader
  useIsomorphicLayoutEffect(() => {
    ScrollSmoother.create({
      wrapper: $wrapper.current,
      content: $content.current,
      smooth: 4.5, // how long (in seconds) it takes to "catch up" to the native scroll position
      effects: false, // looks for data-speed and data-lag attributes on elements
      smoothTouch: 0, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
      preventDefault: true,
      normalizeScroll: { allowNestedScroll: true },
      ignoreMobileResize: true,
    });

    if (props.preloader) {
      // gsap.to("#AdeoFilling stop", {
      //   duration: 2,
      //   attr: { offset: "0%" },
      //   yoyo: true,
      //   repeatDelay: 0.5,
      //   ease: "none",
      // });

      gsap.to(preloader.current, {
        delay: props.preloaderDelay,
        duration: 1,
        translateX: "-100%",
      });

      gsap.to(layoutSlides.current, {
        delay: props.preloaderDelay,
        duration: 1,
        translateX: 0,
        onComplete() {
          setRunAnimation(true);
          setHeaderStatus(true);
        },
      });
    }
  }, [props]);

  // Check Active Section
  const router = useRouter();
  const data = router.query;

  useEffect(() => {
    if (data.section == "case-studies") {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const targetElem = document.querySelector("#panel-7");
          setTimeout(() => {
            gsap.to(window, {
              scrollTo: {
                y: targetElem.offsetLeft + 14100,
                autoKill: false,
              },
              duration: 1.5,
              onComplete: () => {
                setActiveIndex(7);
              },
            });
          }, 3000);
        },
        "(max-width: 1023px)": () => {
          gsap.to(window, {
            scrollTo: "#panel-7",
            duration: 1.5,
          });
        },
      });
    }
  }, [data.section, setActiveIndex]);

  // Page Transition
  useEffect(() => {
    if (props.pageTransition) {
      var transitionT = new gsap.timeline();
      transitionT.to(screen, {
        duration: 1.2,
        height: "100%",
        ease: "expo.inOut",
      });
      transitionT.to(screen, {
        duration: 1,
        top: "100%",
        ease: "expo.inOut",
        delay: 0.3,
      });
      transitionT.set(screen, { left: "-100%" });
      gsap.to(layoutSlides.current, {
        delay: 2,
        duration: 0.3,
        opacity: "1",
        pointerEvents: "auto",
        ease: "expo.inOut",
        onComplete: () => {
          setHidden(false);
          setRunAnimation(true);
          setHeaderStatus(true);
        },
      });
    }
  }, [props.pageTransition, setRunAnimation]);

  // All Scrolling Animations
  useIsomorphicLayoutEffect(() => {
    if (runAnimation == true) {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          const sections = gsap.utils.toArray(".scroll-panel");

          const panelStop = [];

          sections.forEach((section, index) => {
            if (section.dataset.pin) panelStop.push(index);
          });

          const mainTimeline = gsap.timeline({
            defaults: {
              ease: "none",
            },
            scrollTrigger: {
              trigger: ".scroll-container",
              pin: true,
              scrub: true,
              end: !props.pageTransition ? "+=25000" : "+=4000",
            },
          });

          panelStop.forEach((stop, index) => {
            let currentSection = sections[stop];

            mainTimeline.to(sections, {
              xPercent: -(100 * stop),
              duration: stop,
            });


            console.log(currentSection)

            // Slogan Section Animation
            if (currentSection.querySelector(".slogan-animation")) {
              mainTimeline
                .to("#bg-image", {
                  delay: 0.3,
                  duration: 3,
                  backgroundPosition: "100% center",
                  ease: Linear.easeInOut,
                  onStart: () => {
                    setActiveIndex(2);
                  },
                  onReverseComplete: () => {
                    setActiveIndex(1);
                  },
                })
                .to(
                  ["#slide-1", "#line-2", "#line-3", "#line-4"],
                  {
                    duration: 3,
                    delay: 0.5,
                    xPercent: -76,
                    opacity: 1,
                    ease: Linear.easeInOut,
                  },
                  "slogan-1"
                )
                .to(
                  "#bg-image",
                  {
                    delay: 0.5,
                    duration: 3,
                    opacity: 0,
                  },
                  "slogan-1"
                )
                .to(["#line-3", "#line-4"], {
                  duration: 1,
                  xPercent: -120,
                  ease: Linear.easeInOut,
                })
                .add("slogan-2")
                .to(
                  ["#line-1", "#line-2"],
                  {
                    duration: 2.6,
                    xPercent: -230,
                    ease: Linear.easeInOut,
                  },
                  "slogan-2"
                )
                .to(
                  "#bg-color",
                  {
                    duration: 4,
                    xPercent: 180,
                  },
                  "slogan-2"
                )
                .to(
                  ["#line-3", "#line-4"],
                  {
                    duration: 3.5,
                    xPercent: -240,
                    ease: Linear.easeInOut,
                  },
                  "slogan-2"
                );
            }

            // Service Section Animation
            if (currentSection.querySelector(".service-animation")) {
              mainTimeline.to(
                "#bg-image-service",
                {
                  delay: 0,
                  duration: 1.5,
                  backgroundPosition: "-80px bottom",
                  ease: Linear.easeInOut,
                  onStart: () => {
                    setActiveIndex(3);
                  },
                  onReverseComplete: () => {
                    setActiveIndex(2);
                  },
                },
                "service-1"
              );

              mainTimeline.to(
                "#text-background",
                {
                  delay: 0,
                  duration: 2,
                  width: "60%",
                  translateX: -52,
                },
                "service-1"
              );

              mainTimeline.to(
                "#text-appear",
                {
                  delay: 0,
                  duration: 2,
                  visibility: "visible",
                  translateY: 0,
                  opacity: 1,
                },
                "service-1"
              );
            }

            // Brand Section Animation
            if (currentSection.querySelector(".brand-animation")) {
              mainTimeline
                .to(
                  ["#branding-1", "#branding-2", "#branding-8"],
                  {
                    delay: 0.8,
                    duration: 2,
                    right: "100%",
                    ease: "none",
                    onStart: () => {
                      setActiveIndex(4);
                    },
                    onReverseComplete: () => {
                      setActiveIndex(3);
                    },
                  },
                  "brand-1"
                )
                .to(
                  ["#branding-1", "#branding-2", "#branding-8"],
                  {
                    delay: 1,
                    duration: 3,
                    right: "0",
                    ease: Linear.easeInOut,
                  },
                  "brand-2"
                );

              mainTimeline
                .to(
                  ["#branding-4", "#branding-3"],
                  {
                    delay: 0.8,
                    duration: 2,
                    left: "100%",
                    ease: Linear.easeInOut,
                  },
                  "brand-1"
                )
                .to(
                  ["#branding-4", "#branding-3"],
                  {
                    delay: 1,
                    duration: 2,
                    left: "0",
                    ease: Linear.easeInOut,
                  },
                  "brand-2"
                );

              mainTimeline
                .to(
                  ["#branding-5", "#branding-7", "#branding-6"],
                  {
                    delay: 0.8,
                    duration: 2,
                    top: "100%",
                    ease: Linear.easeInOut,
                  },
                  "brand-1"
                )
                .to(
                  ["#branding-5", "#branding-7", "#branding-6"],
                  {
                    delay: 1,
                    duration: 2,
                    top: "0",
                    ease: Linear.easeInOut,
                  },
                  "brand-2"
                );

              mainTimeline
                .to(
                  ["#branding-9", "#branding-10"],
                  {
                    delay: 0.8,
                    duration: 2,
                    bottom: "100%",
                    ease: Linear.easeInOut,
                  },
                  "brand-1"
                )
                .to(
                  ["#branding-9", "#branding-10"],
                  {
                    delay: 1,
                    duration: 2,
                    bottom: "0",
                    ease: Linear.easeInOut,
                  },
                  "brand-2"
                )
                .to("#brandImages", {
                  display: "none",
                })
                .to("#brandContent", {
                  display: "block",
                });

              mainTimeline.to(
                "#tag-line",
                {
                  delay: 0.5,
                  duration: 2,
                  translateY: 0,
                  ease: Linear.easeInOut,
                },
                "brand-3"
              );

              mainTimeline.to(
                ["#brand", "#and"],
                {
                  delay: 0.5,
                  duration: 2,
                  left: "100%",
                  ease: Linear.easeInOut,
                },
                "brand-3"
              );

              mainTimeline.to(
                ["#development", "#design"],
                {
                  delay: 0.5,
                  duration: 2,
                  right: "100%",
                  ease: Linear.easeInOut,
                },
                "brand-3"
              );

              mainTimeline.to(
                "#content-description",
                {
                  delay: 0.5,
                  duration: 2,
                  translateX: 0,
                  ease: Linear.easeInOut,
                },
                "brand-3"
              );
            }

            // Creation Section Animation
            if (currentSection.querySelector(".creation-animation")) {
              mainTimeline.to(
                "#grey-box",
                {
                  delay: 1.4,
                  duration: 1.4,
                  height: "auto",
                  opacity: 1,
                  onStart: () => {
                    setActiveIndex(5);
                  },
                  onReverseComplete: () => {
                    setActiveIndex(4);
                  },
                },
                "creation-1"
              );

              mainTimeline.to(
                "#center-text",
                {
                  delay: 1.4,
                  duration: 1.4,
                  width: "auto",
                },
                "creation-1"
              );

              mainTimeline
                .to(
                  "#section-1",
                  {
                    delay: 0.5,
                    duration: 2,
                    width: "65%",
                  },
                  "creation-2"
                )
                .to(
                  "#section-2",
                  {
                    delay: 0.5,
                    duration: 2,
                    width: "35%",
                  },
                  "creation-2"
                )
                .to(
                  "#text-reveal",
                  {
                    delay: 0.5,
                    duration: 2,
                    opacity: 1,
                    right: "20%",
                    marginBottom: "-13.5rem",
                    xPercent: 0,
                  },
                  "creation-2"
                )
                .to(
                  "#move-box",
                  {
                    delay: 0.5,
                    duration: 2,
                    left: "-25%",
                  },
                  "creation-2"
                )
                .to(
                  "#box-text",
                  {
                    delay: 0.5,
                    duration: 1.5,
                    opacity: 0,
                  },
                  "creation-2"
                );
            }

            // Marketing Section Animation
            if (currentSection.querySelector(".marketing-animation")) {
              mainTimeline.to(
                ["#reveal-text-1", "#reveal-text-2"],
                {
                  delay: 0.8,
                  duration: 1.4,
                  right: "100%",
                  ease: Linear.easeInOut,
                  onStart: () => {
                    setActiveIndex(6);
                  },
                  onReverseComplete: () => {
                    setActiveIndex(5);
                  },
                },
                "marketing-1"
              );

              mainTimeline.to(
                "#bg-grey",
                {
                  delay: 1.2,
                  duration: 2,
                  height: "0",
                  ease: Linear.easeInOut,
                },
                "marketing-2"
              );

              mainTimeline.to(
                "#bg-orange",
                {
                  delay: 1.2,
                  duration: 2,
                  top: "100%",
                  ease: Linear.easeInOut,
                },
                "marketing-2"
              );

              mainTimeline.to(
                ["#main-text-1", "#main-text-2"],
                {
                  delay: 1.2,
                  duration: 2,
                  marginBottom: "35%",
                  ease: "none",
                },
                "marketing-2"
              );

              mainTimeline.to(
                "#bg-image-marketing",
                {
                  delay: 1.2,
                  duration: 2,
                  backgroundPositionX: "90%",
                  ease: Linear.easeInOut,
                },
                "marketing-2"
              );

              mainTimeline.to(
                ["#content-title", "#content-desc-marketing"],
                {
                  delay: 1.2,
                  duration: 2,
                  translateX: 0,
                  ease: Linear.easeInOut,
                },
                "marketing-2"
              );
            }

            // Studio Animation
            if (currentSection.querySelector(".studio-animation")) {
              mainTimeline.to(["#c-section-1", "#c-section-2"], {
                ease: "none",
                onStart: () => {
                  setActiveIndex(7);
                },
                onReverseComplete: () => {
                  setActiveIndex(6);
                },
              });
            }

            // Contact Animation
            if (currentSection.querySelector(".contact-animation")) {
              mainTimeline.to(
                ["#c-section-1", "#c-section-2"],
                {
                  delay: 1,
                  duration: 2,
                  translateX: 0,
                  ease: "none",
                  onStart: () => {
                    setActiveIndex(8);
                  },
                  onReverseComplete: () => {
                    setActiveIndex(7);
                  },
                },
                "contact-1"
              );

              mainTimeline.to(
                ["#reveal-section-1", "#reveal-section-2"],
                {
                  delay: 1,
                  duration: 2,
                  translateX: 0,
                  opacity: 1,
                  ease: Linear.easeInOut,
                },
                "contact-1"
              );
            }

            mainTimeline.to(sections, {
              xPercent: -(100 * stop),
              duration: stop,
            });

            if (index === panelStop.length - 1) {
              mainTimeline.to(sections, {
                xPercent: -(100 * (sections.length - 1)),
                duration: sections.length - stop,
              });
            }
          });
        },
        "(max-width: 1023px)": () => {
          // Slogan Section Mobile Animation
          gsap.to("#slogan-bg", {
            duration: 1,
            translateX: 0,
            scrollTrigger: {
              trigger: "#slogan-mobile",
              scrub: true,
              start: "top center",
              end: "center 25%",
            },
          });

          gsap.to(".slogan-text-reveal", {
            duration: 1,
            translateY: 0,
            scrollTrigger: {
              trigger: "#slogan-mobile",
              scrub: true,
              start: "top center",
              end: "center 25%",
            },
          });

          // Software & Development Mobile Animation
          gsap.to(".sd-reveal", {
            duration: 1,
            translateY: 0,
            scrollTrigger: {
              trigger: "#sd-mobile",
              scrub: true,
              start: "top center",
              end: "center 25%",
            },
          });

          // Brands Mobile Animation
          const brandImagesLeft = gsap.timeline({
            defaults: { ease: "none", translateX: "-200%" },
            scrollTrigger: {
              trigger: "#brand-and-design",
              scrub: true,
              start: "top 100%",
              end: "center 40%",
            },
          });

          brandImagesLeft
            .from(
              ".brand-img-left",
              {
                duration: 1.5,
                translateX: "-250%",
              },
              "+=1"
            )
            .to(
              ".brand-img-left",
              {
                delay: 1,
                duration: 1.5,
                translateX: "-250%",
              },
              "+=2"
            );

          const brandImagesRight = gsap.timeline({
            defaults: { ease: "none", translateX: "200%" },
            scrollTrigger: {
              trigger: "#brand-and-design",
              scrub: true,
              start: "top 100%",
              end: "center 35%",
            },
          });

          brandImagesRight
            .from(
              ".brand-img-right",
              {
                duration: 1.5,
                translateX: "250%",
              },
              "+=1"
            )
            .to(
              ".brand-img-right",
              {
                delay: 1,
                duration: 1.5,
                translateX: "250%",
              },
              "+=2"
            );

          gsap.to(".bt-reveal", {
            duration: 1,
            translateY: 0,
            scrollTrigger: {
              trigger: "#brand-details",
              scrub: true,
              start: "top center",
              end: "center 25%",
            },
          });

          // Creation Mobile Animation
          gsap.to(".bg-creation-mobile", {
            duration: 0.5,
            backgroundPosition: "50% center",
            ease: Linear.easeInOut,
            scrollTrigger: {
              trigger: ".bg-creation-mobile",
              scrub: true,
              start: "top center",
              end: "center 25%",
            },
          });

          // Marketing Mobile Animation
          gsap.to(".mt-reveal", {
            duration: 1,
            translateY: 0,
            scrollTrigger: {
              trigger: "#digital-marketing",
              scrub: true,
              start: "top bottom",
              end: "center 0%",
            },
          });

          gsap.to(".bg-marketing-mobile", {
            duration: 1,
            backgroundPosition: "75% center",
            scrollTrigger: {
              trigger: "#digital-marketing",
              scrub: true,
              start: "top bottom",
              end: "center 0%",
            },
          });

          // Studies Mobile Animation
          gsap.to(".st-reveal", {
            duration: 1,
            translateY: 0,
            scrollTrigger: {
              trigger: "#case-studies",
              scrub: true,
              start: "top center",
              end: "center 25%",
            },
          });

          gsap.to(".st-btn", {
            duration: 1,
            translateX: 0,
            scrollTrigger: {
              trigger: ".st-btn",
              scrub: true,
              start: "top bottom",
              end: "top 30%",
            },
          });

          // Contact Mobile Animation
          gsap.to(".from-reveal", {
            duration: 1,
            translateY: 0,
            scrollTrigger: {
              trigger: "#contact-us",
              scrub: true,
              start: "top center",
              end: "center 25%",
            },
          });
        },
      });
    }
  }, [runAnimation]);

  return (
    <>
      {/* Main Header */}
      <Header
        headerStatus={headerStatus}
        hide={hidden}
        close={props.pageTransition && true}
      />

      {/* Side Bullets */}
      {props.bullets && <Bullets />}

      {/* Preloader Startup */}
      {props.preloader && (
        <div
          className="fixed sm:absolute left-0 top-0 z-[999] !w-full !h-full sm:!h-screen sm:!w-screen bg-primary flex justify-center items-center"
          ref={preloader}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="201.705" height="68.315" viewBox="0 0 201.705 68.315">
              <g id="Group_76" data-name="Group 76" transform="translate(-451 -93)">
                <g id="Group_73" data-name="Group 73" transform="translate(451 93)">
                  <path id="Path_3" data-name="Path 3" d="M413.466,25.176h42.577v15.3h-4.353l-2.176-10.2H439.175V68.569l7.209,1.632v3.945h-23.26V70.2l7.209-1.632V30.277H419.927l-2.109,10.2h-4.353Z" transform="translate(-277.358 -15.985)" fill="#f903a1"/>
                  <path id="Path_5" data-name="Path 5" d="M403.92,31.664H446.5v15.3h-4.353l-2.176-10.2H429.629V75.057l7.209,1.632v3.945H413.578V76.689l7.209-1.632V36.765H410.381l-2.108,10.2H403.92Z" transform="translate(-271.294 -20.107)" fill="#04ff00"/>
                  <g id="Group_26" data-name="Group 26" transform="translate(44.655 25.236)">
                    <g id="Group_27" data-name="Group 27" transform="translate(0 0)">
                      <path id="Path_2" data-name="Path 2" d="M154.924,63.434l-4.51-8.319h-.1l-4.46,8.319H129.266l12.228-17.89L129.968,28.155h17.54l3.858,7.717h.1l4.009-7.717h16.487L159.735,45.042l12.879,18.391Z" transform="translate(-128.759 -28.155)" fill="#f903a1"/>
                      <path id="Path_4" data-name="Path 4" d="M144.013,68.043l-4.27-7.876h-.095l-4.223,7.876h-15.7L131.3,51.105,120.386,34.642h16.606l3.653,7.306h.095l3.8-7.306h15.609L148.568,50.631l12.193,17.412Z" transform="translate(-119.722 -32.763)" fill="#04ff00"/>
                      <path id="Path_11" data-name="Path 11" d="M153.558,68.043l-4.27-7.876h-.095l-4.223,7.876h-15.7l11.576-16.937L129.931,34.643h16.605l3.653,7.306h.1l3.8-7.306h15.609L158.113,50.631l12.193,17.412Z" transform="translate(-126.838 -32.764)" fill="#fff"/>
                    </g>
                  </g>
                  <path id="Path_15" data-name="Path 15" d="M413.466,31.664h42.577v15.3h-4.353l-2.176-10.2H439.175V75.057l7.209,1.632v3.945h-23.26V76.69l7.209-1.632V36.765H419.927l-2.109,10.2h-4.353Z" transform="translate(-277.358 -20.072)" fill="#fff"/>
                  <path id="Path_16" data-name="Path 16" d="M553.855,24.649l3.624,4.787-4.026,2.819-3.624-4.877-3.534,4.7-3.937-2.819,3.624-4.652-5.771-1.924,1.566-4.474,5.682,1.968V14.36h4.921v5.816l5.682-1.79,1.521,4.474Z" transform="translate(-357.876 -5.169)" fill="#04ff00"/>
                  <g id="Group_71" data-name="Group 71" transform="translate(88.122 0)">
                    <rect id="Rectangle_2" data-name="Rectangle 2" width="44.685" height="68.315" transform="translate(0)" fill="#e4e4e5"/>
                    <g id="Group_70" data-name="Group 70" transform="translate(0 5.237)">
                      <path id="Path_12" data-name="Path 12" d="M290.946,67.275V56.12h3.4V25.514h-3.4V14.359h28.7V25.514h-6.257V56.12h6.121V49.863h13.535V67.275Z" transform="translate(-287.465 -14.359)" fill="#f903a1"/>
                      <path id="Path_13" data-name="Path 13" d="M281.4,73.762V62.608h3.4V32h-3.4V20.847h28.7V32h-6.257V62.608h6.121V56.35H323.5V73.762Z" transform="translate(-281.402 -18.481)" fill="#04ff00"/>
                      <path id="Path_14" data-name="Path 14" d="M290.946,73.763V62.609h3.4V32h-3.4V20.848h28.7V32h-6.257V62.609h6.121V56.351h13.535V73.763Z" transform="translate(-287.465 -18.481)" fill="#13120b"/>
                    </g>
                  </g>
                  <g id="Group_28" data-name="Group 28" transform="translate(0 7.424)">
                    <path id="Path_1" data-name="Path 1" d="M46.272,72.466a25.785,25.785,0,0,1-10.814,2.143,28.212,28.212,0,0,1-10.3-1.837A23.793,23.793,0,0,1,11.516,59.51,26.417,26.417,0,0,1,9.544,49.171,26.386,26.386,0,0,1,11.551,38.7a23.288,23.288,0,0,1,5.543-7.992,24.552,24.552,0,0,1,8.3-5.067,29.741,29.741,0,0,1,20.3.034,19.209,19.209,0,0,1,7.992,5.271l-7.89,7.89A9.769,9.769,0,0,0,41.511,35.5a14.224,14.224,0,0,0-5.442-1.088,13.784,13.784,0,0,0-5.611,1.122,13.164,13.164,0,0,0-4.386,3.095,14.107,14.107,0,0,0-2.857,4.659,16.456,16.456,0,0,0-1.02,5.883,16.926,16.926,0,0,0,1.02,5.985,13.923,13.923,0,0,0,2.823,4.659,12.7,12.7,0,0,0,4.319,3.026,13.725,13.725,0,0,0,5.509,1.088,12.809,12.809,0,0,0,6.053-1.36,11.739,11.739,0,0,0,4.149-3.537l8.094,7.618a22.925,22.925,0,0,1-7.89,5.815" transform="translate(-8.782 -23.87)" fill="#f903a1"/>
                    <path id="Path_6" data-name="Path 6" d="M10.895,74.057A24.1,24.1,0,0,1,5.453,66,26.42,26.42,0,0,1,3.481,55.66,26.383,26.383,0,0,1,5.488,45.186a23.294,23.294,0,0,1,5.543-7.992,24.564,24.564,0,0,1,8.3-5.067,28.675,28.675,0,0,1,8.465-1.713c-.557-.032-1.116-.055-1.676-.055a29.281,29.281,0,0,0-10.27,1.768,24.554,24.554,0,0,0-8.3,5.067,23.287,23.287,0,0,0-5.543,7.992A26.378,26.378,0,0,0,0,55.659,26.4,26.4,0,0,0,1.972,66,23.789,23.789,0,0,0,15.609,79.26a28.212,28.212,0,0,0,10.3,1.836c.6,0,1.179-.02,1.755-.05a27.556,27.556,0,0,1-8.577-1.786,24.194,24.194,0,0,1-8.2-5.2" transform="translate(0 -27.992)" fill="#04ff00"/>
                    <path id="Union_2" data-name="Union 2" d="M24.188,50.688h0A27.558,27.558,0,0,1,15.609,48.9,23.793,23.793,0,0,1,1.972,35.64,26.423,26.423,0,0,1,0,25.3,26.384,26.384,0,0,1,2.006,14.827,23.3,23.3,0,0,1,7.55,6.835a24.56,24.56,0,0,1,8.3-5.067A28.661,28.661,0,0,1,24.312.055h0c.6-.032,1.2-.055,1.806-.055A29.027,29.027,0,0,1,36.149,1.8a19.213,19.213,0,0,1,7.992,5.271l-7.89,7.89a9.668,9.668,0,0,0-1.7-1.784,10.086,10.086,0,0,0-2.587-1.549,14.232,14.232,0,0,0-5.442-1.088,15.436,15.436,0,0,0-1.791.113,13.163,13.163,0,0,0-8.206,4.1,14.106,14.106,0,0,0-2.857,4.659,16.445,16.445,0,0,0-1.02,5.883,16.917,16.917,0,0,0,1.02,5.985,13.918,13.918,0,0,0,2.822,4.659,12.7,12.7,0,0,0,4.319,3.027,13.2,13.2,0,0,0,3.809.986,15.976,15.976,0,0,1-1.781.1,13.72,13.72,0,0,1-5.509-1.088,12.7,12.7,0,0,1-4.319-3.026,13.929,13.929,0,0,1-2.823-4.659A16.918,16.918,0,0,1,9.169,25.3a16.918,16.918,0,0,0,1.021,5.985,13.929,13.929,0,0,0,2.823,4.659,12.7,12.7,0,0,0,4.319,3.026A13.72,13.72,0,0,0,22.84,40.06a15.976,15.976,0,0,0,1.781-.1,15.328,15.328,0,0,0,1.7.1,12.809,12.809,0,0,0,6.053-1.36,12.476,12.476,0,0,0,2.544-1.77l4.732,4.454-4.732-4.454a11.1,11.1,0,0,0,1.6-1.766l8.093,7.618a22.924,22.924,0,0,1-7.89,5.815,25.785,25.785,0,0,1-10.814,2.143C25.33,50.739,24.757,50.718,24.188,50.688ZM9.169,25.3Zm0,0a16.447,16.447,0,0,1,1.021-5.883A16.444,16.444,0,0,0,9.169,25.3Zm3.877-10.543A13.844,13.844,0,0,0,10.58,18.48a13.838,13.838,0,0,1,2.466-3.721,12.928,12.928,0,0,1,1.543-1.411A12.937,12.937,0,0,0,13.046,14.759ZM17.592,11.6a14.116,14.116,0,0,1,7.09-.946,14.1,14.1,0,0,0-7.09.946Z" transform="translate(3.481 2.366)" fill="#fff" stroke="rgba(0,0,0,0)" stroke-miterlimit="10" stroke-width="1"/>
                  </g>
                </g>
              </g>
            </svg>

        </div>
      )}

      {/* Page Transition */}
      {props.pageTransition && (
        <div className="load-container">
          <div
            className="load-screen grid place-content-center"
            ref={(el) => (screen = el)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="115.937"
              height="34"
              viewBox="0 0 115.937 34"
              className="bg-blend-difference"
            >
              <defs></defs>
              <path
                className="fill-white"
                d="M115.864,60.621a0.913,0.913,0,0,1,.914-0.917h19.567a0.913,0.913,0,0,1,.913.917v3.95a0.913,0.913,0,0,1-.913.917H122.114v7.906h11.877a0.945,0.945,0,0,1,.911.914v4a0.913,0.913,0,0,1-.911.915H122.114v8.435h14.231a0.913,0.913,0,0,1,.913.915v3.953a0.912,0.912,0,0,1-.913.916H116.778a0.913,0.913,0,0,1-.914-0.916V60.621Zm41.714-1.081a17,17,0,1,1-16.9,17.042A16.942,16.942,0,0,1,157.578,59.541Zm0,27.854a10.859,10.859,0,1,0-10.783-10.811A10.867,10.867,0,0,0,157.578,87.394ZM58.7,92.2L73.51,60.065a0.857,0.857,0,0,1,.81-0.525H74.8a0.808,0.808,0,0,1,.809.525L90.279,92.2a0.844,0.844,0,0,1-.81,1.241H85.324a1.368,1.368,0,0,1-1.381-.955l-2.335-5.156H67.366L65.033,92.49a1.435,1.435,0,0,1-1.382.955H59.508A0.843,0.843,0,0,1,58.7,92.2ZM79.275,82.033L74.511,71.526H74.367L69.7,82.033h9.575ZM93.242,59.7H81.821a0.791,0.791,0,0,0-.237.04l2.648,5.781h0l0.016,0.031,2.958-.007h5.453A10.64,10.64,0,0,1,103.5,76.566a10.636,10.636,0,0,1-9.19,10.949l2.572,5.609A16.907,16.907,0,0,0,93.242,59.7Z"
                transform="translate(-58.594 -59.531)"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Video Modal */}
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen}
        videoId="338277203"
        onClose={() => setOpen(false)}
      />

      {/* Scroll Smoother Container */}
      <main className="relative lg:overflow-hidden bg-secondary" ref={$wrapper}>
        <div ref={$content}>
          {/* Horizontal Scroll Container */}
          <div
            data-barba="container"
            className={`scroll-container ${
              props.pageTransition ? "opacity-0" : "lg:translate-x-full"
            }`}
            ref={layoutSlides}
          >
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
