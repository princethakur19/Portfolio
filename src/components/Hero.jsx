import "./Hero.css";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {

  const roleRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {
    if (!nameRef.current || !roleRef.current) {
      return undefined;
    }

    // TYPING NAME ANIMATION
    const typedName = new Typed(
      nameRef.current,
      {
        strings: ["Prince Thakur"],
        typeSpeed: 90,
        startDelay: 250,
        showCursor: false,
        loop: false,
      }
    );

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

        typeSpeed: 75,
        backSpeed: 50,
        backDelay: 1500,
        startDelay: 1300,
        loop: true,

      }
    );

    return () => {
      typedName.destroy();
      typedRole.destroy();
    };
  }, []);

  return (

    <section className="hero" id="home">

      {/* BLUR EFFECTS */}

      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      <div className="mesh mesh-1"></div>
      <div className="mesh mesh-2"></div>
      <div className="hero-noise"></div>
      <div className="light-beam beam-1"></div>
      <div className="light-beam beam-2"></div>

      {/* HERO CONTENT */}

      <div className="hero-content">

        <p className="hero-subtitle">
          Hello, I'm
        </p>

        <h1 className="hero-title">

          <span
            ref={nameRef}
            className="name-text"
          >
            Prince Thakur
          </span>

        </h1>

        <h2 className="hero-role">

          I'm a{" "}

          <span
            ref={roleRef}
            className="typing-text"
          >
            Frontend Developer
          </span>

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
