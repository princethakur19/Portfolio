import "./About.css";
import { useEffect, useRef, useState } from "react";
// Uncomment the line below and ensure the path to your image is correct!
import profilePic from "../assets/profile.jpeg";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation when scrolling to this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className={`about-wrapper ${isVisible ? "animate-in" : ""}`}>
        {/* LEFT SIDE IMAGE */}
        <div className="about-image-container">
          <div className="about-image-card">
            {/* --- ADD YOUR PHOTO HERE --- */}
            {/* Remove the image-placeholder div below and uncomment this img tag: */}
            {/* <img src={profilePic} alt="Prince Thakur Profile" /> */}

            <img
              src={profilePic}
              alt="Prince Thakur"
              className="profile-image"
            />
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div className="about-content">
          <p className="about-subtitle">About Me</p>
          <h2 className="about-title">MERN Stack Developer</h2>

          <p className="about-description">
            I am an MCA student and passionate MERN Stack Developer focused on
            building modern, responsive and scalable web applications.
            <br />
            <br />I enjoy creating interactive frontend UI, backend APIs and
            database-driven applications using MongoDB, Express.js, React and
            Node.js.
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
              <p className="info-value">MCA Graduate</p>
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
          <a
            href="/Prince_Thakur_Resume.pdf"
            download="Prince_Thakur_Resume.pdf"
            className="download-btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
