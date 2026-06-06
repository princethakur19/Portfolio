import "./About.css";
import { useEffect, useRef, useState } from "react";
// import kk from "../assets/profile.png";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [projectsCount, setProjectsCount] = useState(0);
  const sectionRef = useRef(null);

  // Trigger animation when scrolling to this section
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

  // Number Counter Animation for projects
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
      <div className={`about-wrapper ${isVisible ? "animate-in" : ""}`}>

        {/* LEFT SIDE IMAGE */}
        <div className="about-image-container">
          <div className="about-image-card">
            {/* <img src={kk} alt="Profile" /> */}
            <div className="image-placeholder">
              <span>Your Image Here</span>
            </div>
            
            {/* Floating Stats Badge attached to image */}
            <div className="experience-badge">
              <span className="badge-number">{projectsCount}+</span>
              <span className="badge-text">Projects<br/>Completed</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-content">
          <p className="about-subtitle">About Me</p>
          <h2 className="about-title">MERN Stack Developer</h2>

          <p className="about-description">
            I am an MCA student and passionate MERN Stack Developer focused on building modern, responsive and scalable web applications.
            <br /><br />
            I enjoy creating interactive frontend UI, backend APIs and database-driven applications using MongoDB, Express.js, React and Node.js.
          </p>

          {/* INTERACTIVE INFO GRID */}
          <div className="about-info-grid">
            <div className="info-item">
              <span className="info-label">Name</span>
              <p className="info-value">Prince Thakur</p>
            </div>
            <div className="info-item">
              <span className="info-label">Email</span>
              <p className="info-value">princethakur7778@gmail.com</p>
            </div>
            <div className="info-item">
              <span className="info-label">Education</span>
              <p className="info-value">MCA Student</p>
            </div>
            <div className="info-item">
              <span className="info-label">Specialization</span>
              <p className="info-value">MERN Stack</p>
            </div>
            <div className="info-item location-item">
              <span className="info-label">Location</span>
              <p className="info-value">India</p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="download-btn">
            Download CV
          </button>
        </div>

      </div>
    </section>
  );
}

export default About;