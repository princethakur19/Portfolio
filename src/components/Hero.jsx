import "./Hero.css";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { scrollToSection } from "../utils/smoothScroll";
import { TextScramble } from "./ui/text-scramble";

function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const dots = [];
    const pointer = { x: 0, y: 0, active: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let previous = 0;
    let visible = true;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      const oldWidth = width;
      const oldHeight = height;
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!dots.length) {
        for (let i = 0; i < 125; i += 1) {
          const angle = Math.random() * Math.PI * 2;
          const speed = 5 + Math.random() * 9;
          dots.push({ x: Math.random() * width, y: Math.random() * height,
            vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
            radius: 0.7 + Math.random() * 1.3, alpha: 0.25 + Math.random() * 0.5, ox: 0, oy: 0 });
        }
      } else if (oldWidth && oldHeight) {
        dots.forEach((dot) => { dot.x = (dot.x / oldWidth) * width; dot.y = (dot.y / oldHeight) * height; });
      }
      draw(0, 0);
    };

    const draw = (time, delta) => {
      context.clearRect(0, 0, width, height);
      for (const dot of dots) {
        if (delta) {
          dot.x = (dot.x + dot.vx * delta + width + 12) % (width + 12);
          dot.y = (dot.y + dot.vy * delta + height + 12) % (height + 12);
          let targetX = 0;
          let targetY = 0;
          if (pointer.active) {
            const dx = dot.x - pointer.x;
            const dy = dot.y - pointer.y;
            const distance = Math.hypot(dx, dy) || 1;
            if (distance < 125) {
              const strength = (1 - distance / 125) ** 2 * (3 - 2 * (1 - distance / 125));
              targetX = (dx / distance) * strength * 48;
              targetY = (dy / distance) * strength * 48;
            }
          }
          const ease = 1 - Math.pow(0.0025, delta);
          dot.ox += (targetX - dot.ox) * ease;
          dot.oy += (targetY - dot.oy) * ease;
        }
        context.globalAlpha = dot.alpha * (0.78 + Math.sin(time * 0.0012 + dot.x) * 0.22);
        context.fillStyle = "#bae6fd";
        context.beginPath();
        context.arc(dot.x + dot.ox, dot.y + dot.oy, dot.radius, 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    };

    const loop = (time) => {
      const delta = previous ? Math.min(0.05, (time - previous) / 1000) : 0;
      previous = time;
      draw(time, delta);
      frame = requestAnimationFrame(loop);
    };
    const sync = () => {
      if (reducedMotion) { cancelAnimationFrame(frame); frame = 0; draw(0, 0); return; }
      if (visible && !document.hidden && !frame) frame = requestAnimationFrame(loop);
      if ((!visible || document.hidden) && frame) { cancelAnimationFrame(frame); frame = 0; previous = 0; }
    };
    const onPointer = (event) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = pointer.x >= -125 && pointer.y >= -125 && pointer.x <= width + 125 && pointer.y <= height + 125;
    };
    const onLeave = () => { pointer.active = false; };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); });
    const resizeObserver = new ResizeObserver(resize);
    resize();
    observer.observe(canvas);
    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", sync);
    sync();

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-particle-canvas" aria-hidden="true" />;
}

function Hero() {
  const roleRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (!roleRef.current) return;

    // Typing effect for the role (loops continuously)
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
      typedRole.destroy();
    };
  }, []);

  const handlePointerMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    
    setMousePos({ x, y });
  };

  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    if (!touch) return;
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    setMousePos({
      x: Math.max(0, Math.min(100, ((touch.clientX - left) / width) * 100)),
      y: Math.max(0, Math.min(100, ((touch.clientY - top) / height) * 100)),
    });
  };

  return (
    <section 
      className="hero" 
      id="home"
      onPointerMove={handlePointerMove}
      onTouchMove={handleTouchMove}
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
      <ParticleField />

      {/* HERO CONTENT */}
      <div className="hero-container">
        <p className="hero-greeting">👋 Hello World, my name is</p>
        
        <h1 className="hero-name">
          <TextScramble
            as="span"
            duration={2.2}
            speed={0.07}
            aria-label="Prince Thakur"
          >
            Prince Thakur.
          </TextScramble>
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
