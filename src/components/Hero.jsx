import "./Hero.css";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { scrollToSection } from "../utils/smoothScroll";

function Hero() {
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (!nameRef.current || !roleRef.current) return;

    // 1. Typing effect for the Name (Plays once)
    const typedName = new Typed(nameRef.current, {
      strings: ["Prince Thakur."],
      typeSpeed: 70,
      startDelay: 200,
      showCursor: false, // Hidden to avoid dual cursors on screen
      loop: false,
    });

    // 2. Typing effect for the Role (Loops continuously)
    const typedRole = new Typed(roleRef.current, {
      strings: [
        "MERN Stack Developer.",
        "Full Stack Developer.",
        "Building modern and responsive web applications.",
        "MCA Graduate.",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 2000,
      startDelay: 1500, // Waits a moment for the name to finish typing
      loop: true,
      cursorChar: "|",
    });

    return () => {
      typedName.destroy();
      typedRole.destroy();
    };
  }, []);

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    
    setMousePos({ x, y });
  };

  return (
    <section 
      className="hero" 
      id="home"
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`
      }}
    >
      {/* DYNAMIC AURORA BACKGROUND */}
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* INTERACTIVE SPOTLIGHT & GRID */}
      <div className="hero-interactive-bg"></div>

      {/* HERO CONTENT */}
      <div className="hero-container">
        <p className="hero-greeting">👋 Hello World, my name is</p>
        
        <h1 className="hero-name">
          <span ref={nameRef}></span>
        </h1>
        
        <h2 className="hero-role">
          I build things for the web as a <br className="mobile-break" />
          <span ref={roleRef} className="highlight-text"></span>
        </h2>

        <p className="hero-bio">
          I specialize in building exceptional digital experiences using React. From interactive user interfaces to robust booking systems, I focus on creating modern, responsive, and visually striking web applications.
        </p>

        {/* BUTTONS */}
        <div className="hero-cta-group">
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection("contact")}
          >
            Let's Talk
          </button>
          
          <button
            className="btn btn-secondary"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
