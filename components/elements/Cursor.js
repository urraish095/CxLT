import React from "react";
const { useRef, useState, useEffect } = React;

// Dependencies
import { gsap, Power4 } from "gsap";

// Stylesheets
import Styles from "../../styles/components/elements/Cursor.module.css";

const Cursor = () => {
  const follower = useRef(null);

  useEffect(() => {
    let posX = 0,
      posY = 0;

    let mouseX = 0,
      mouseY = 0;

    gsap.to(follower.current, {
      duration: 0.018,
      repeat: -1,
      ease: Power4.easeInOut,
      onRepeat: function () {
        posX += (mouseX - posX) / 8;
        posY += (mouseY - posY) / 8;

        gsap.set(follower.current, {
          css: {
            left: posX - 1,
            top: posY - 2,
          },
        });
      },
    });

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    let cursor = document.querySelector(".AdeoCursor");
    let cursorScale = document.querySelectorAll(
      ".orange-scale, .btn-scale, .href-scale"
    );

    cursorScale.forEach((link) => {
      link.addEventListener("mousemove", () => {
        if (link.classList.contains("orange-scale")) {
          cursor.classList.add("blend-cursor");
        }
        if (link.classList.contains("btn-scale")) {
          cursor.classList.add("btn-cursor");
          cursor.classList.add("blend-cursor");
        }
        if (link.classList.contains("href-scale")) {
          cursor.classList.add("grow-cursor");
          cursor.classList.add("blend-cursor");
        }
      });

      link.addEventListener("mouseleave", () => {
        cursor.classList.remove("btn-cursor");
        cursor.classList.remove("blend-cursor");
        cursor.classList.remove("grow-cursor");
      });
    });
  }, []);

  return (
    <div
      className={`AdeoCursor hidden md:inline ${Styles.cursorFollower}`}
      ref={follower}
    ></div>
  );
};

export default Cursor;
