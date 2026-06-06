import "./About.css";
import { useEffect, useRef, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [projectsCount, setProjectsCount] = useState(0);
  const sectionRef = useRef(null);

  // Scroll Animation Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Number Counter Animation
  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = 5;
      const duration = 1500;
      const incrementTime = Math.abs(Math.floor(duration / end));
      
      const timer = setInterval(() => {
        start += 1;
        setProjectsCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className={`about-container ${isVisible ? "animate-in" : ""}`}>
        
        {/* LEFT SIDE: BIO CONTENT */}
        <div className="about-bio">
          <p className="about-subtitle">Who am I?</p>
          <h2 className="about-title">MERN Stack Developer</h2>
          
          <div className="about-text-block">
            <p>
              I am an MCA student and a passionate developer focused on building modern, responsive, and scalable web applications. 
            </p>
            <p>
              I enjoy creating interactive frontend UIs, robust backend APIs, and database-driven applications using MongoDB, Express.js, React, and Node.js.
            </p>
          </div>

          <button className="download-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Download CV
          </button>
        </div>

        {/* RIGHT SIDE: BENTO GRID INFO */}
        <div className="about-bento-grid">
          
          {/* Card 1: Location */}
          <div className="bento-card">
            <div className="bento-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <span className="bento-label">Location</span>
            <p className="bento-value">India</p>
          </div>

          {/* Card 2: Education */}
          <div className="bento-card">
            <div className="bento-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
            </div>
            <span className="bento-label">Education</span>
            <p className="bento-value">MCA Student</p>
          </div>

          {/* Card 3: Contact */}
          <div className="bento-card full-width">
            <div className="bento-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </div>
            <span className="bento-label">Email Me</span>
            <p className="bento-value">princethakur7778@gmail.com</p>
          </div>

          {/* Card 4: Specialization */}
          <div className="bento-card full-width">
            <div className="bento-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            <span className="bento-label">Specialization</span>
            <p className="bento-value">MERN Stack Development</p>
          </div>

          {/* Card 5: Stats */}
          <div className="bento-card stat-card full-width">
            <div className="stat-content">
              <h3>{projectsCount}+</h3>
              <p>Completed Projects</p>
            </div>
            <div className="stat-deco"></div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;