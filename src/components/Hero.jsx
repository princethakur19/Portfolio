import "./Hero.css";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {

  const roleRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {

    // STATIC NAME

    nameRef.current.innerHTML =
      "Prince Thakur";

    // TYPING ROLE ANIMATION

    const typedRole = new Typed(
      roleRef.current,
      {

        strings: [
          "Frontend Developer",
          "React Developer",
          "UI Creator",
          "Web Designer",
        ],

        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,

      }
    );

    return () => {
      typedRole.destroy();
    };

  }, []);

  return (

    <section className="hero" id="home">

      {/* BLUR EFFECTS */}

      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>

      {/* HERO CONTENT */}

      <div className="hero-content">

        <p className="hero-subtitle">
          Hello, I'm
        </p>

        <h1 className="hero-title">

          <span
            ref={nameRef}
            className="name-text"
          ></span>

        </h1>

        <h2 className="hero-role">

          I'm a{" "}

          <span
            ref={roleRef}
            className="typing-text"
          ></span>

        </h2>

        <p className="hero-description">
          I build modern, responsive and visually
          appealing web applications with clean UI
          and smooth user experience.
        </p>

        {/* BUTTONS */}

        <div className="hero-buttons">

          <button
            className="hire-btn"
            onClick={() => {
              document
                .getElementById("contact")
                .scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            Hire Me
          </button>

          <button
            className="project-btn"
            onClick={() => {
              document
                .getElementById("projects")
                .scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            View Projects
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;