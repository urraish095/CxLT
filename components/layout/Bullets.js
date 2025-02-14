import React from "react";
const { useEffect, useContext } = React;

// Dependencies
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Context API
import Context from "../../lib/Context";

// Register GSAP Plugins
gsap.registerPlugin(ScrollToPlugin);

const Bullets = () => {
  // Use Context
  const { index } = useContext(Context);
  const [activeIndex, setActiveIndex] = index;

  useEffect(() => {
    const panelsSection = document.querySelector(".scroll-container");

    document.querySelectorAll(".anchor").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        const dataPanel = this.getAttribute("data-panel");
        const targetElem = document.querySelector(this.getAttribute("data-id"));
        const panelsContainer = document.querySelector(".scroll-container");

        const containerOffset =
          dataPanel == 1
            ? panelsSection.offsetTop + targetElem.offsetLeft - 0
            : dataPanel == 2
            ? panelsSection.offsetTop + targetElem.offsetLeft - 1100
            : dataPanel == 3
            ? panelsSection.offsetTop + targetElem.offsetLeft + 1250
            : dataPanel == 4
            ? panelsSection.offsetTop + targetElem.offsetLeft + 4600
            : dataPanel == 5
            ? panelsSection.offsetTop + targetElem.offsetLeft + 9700
            : dataPanel == 6
            ? panelsSection.offsetTop + targetElem.offsetLeft + 14100
            : dataPanel == 7
            ? panelsSection.offsetTop + targetElem.offsetLeft + 18800
            : dataPanel == 8
            ? panelsSection.offsetTop + targetElem.offsetLeft + 24000
            : null;

        gsap.to(window, {
          scrollTo: {
            y: containerOffset,
            autoKill: false,
          },
          duration: 1.5,
          onComplete: () => {
            setActiveIndex(dataPanel);
          },
        });
      });
    });
  }, [setActiveIndex]);

  return (
    <div
      className={`fixed left-0 pl-10 xl:pl-20 z-20 hidden lg:block opacity-100 ${
        activeIndex == 2 ? "!opacity-0" : ""
      } ease-in-out duration-300`}
    >
      <nav className="grid gap-3 h-screen content-center" role="navigation">
        <button data-id="#panel-1" data-panel="1" className="anchor bullet">
          <span
            className={`${activeIndex == 1 ? "ml-0" : "-ml-10"} bulletIndex`}
          >
            1
          </span>
        </button>
        <button data-id="#panel-2" data-panel="2" className="anchor bullet">
          <span
            className={`${activeIndex == 2 ? "ml-0" : "-ml-10"} bulletIndex`}
          >
            2
          </span>
        </button>
        <button data-id="#panel-3" data-panel="3" className="anchor bullet">
          <span
            className={`${activeIndex == 3 ? "ml-0" : "-ml-10"} bulletIndex`}
          >
            3
          </span>
        </button>
        <button data-id="#panel-3" data-panel="4" className="anchor bullet">
          <span
            className={`${activeIndex == 4 ? "ml-0" : "-ml-10"} bulletIndex`}
          >
            4
          </span>
        </button>
        <button data-id="#panel-3" data-panel="5" className="anchor bullet">
          <span
            className={`${activeIndex == 5 ? "ml-0" : "-ml-10"} bulletIndex`}
          >
            5
          </span>
        </button>
        <button data-id="#panel-3" data-panel="6" className="anchor bullet">
          <span
            className={`${activeIndex == 6 ? "ml-0" : "-ml-10"} bulletIndex`}
          >
            6
          </span>
        </button>
        <button data-id="#panel-3" data-panel="7" className="anchor bullet">
          <span
            className={`${activeIndex == 7 ? "ml-0" : "-ml-10"} bulletIndex`}
          >
            7
          </span>
        </button>
        <button data-id="#panel-3" data-panel="8" className="anchor bullet">
          <span
            className={`${activeIndex == 8 ? "ml-0" : "-ml-10"} bulletIndex`}
          >
            8
          </span>
        </button>
      </nav>
    </div>
  );
};

export default Bullets;
