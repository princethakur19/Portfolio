import "./Hero.css";
import profile from "../assets/profile.jpeg";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {

  const roleRef = useRef(null);
  const nameRef = useRef(null);

  useEffect(() => {

    // Name typing animation
    const typedName = new Typed(nameRef.current, {
      strings: ["Prince Thakur"],
      typeSpeed: 120,
      showCursor: false
    });

    // Role typing animation
    const typedRole = new Typed(roleRef.current, {
      strings: [
        "Frontend Developer",
        "React Developer",
        "Web Designer",
        "UI Creator"
      ],

      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true
    });

    return () => {
      typedName.destroy();
      typedRole.destroy();
    };

  }, []);

  return (
    <section className="hero">

      {/* Background Blur */}
      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>

      {/* LEFT SIDE */}
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

        <div className="hero-buttons">

          <button className="hire-btn">
            Hire Me
          </button>

          <button className="project-btn">
            View Projects
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="hero-image">

        <div className="image-card">
          <img src={profile} alt="Profile" />
        </div>

      </div>

    </section>
  );
}

export default Hero;