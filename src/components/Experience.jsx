import { useEffect, useRef, useState } from "react";
import "./Experience.css";

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section className="exp-minimal" id="experience" ref={sectionRef}>
      <div className={`exp-container ${isVisible ? "fade-in" : ""}`}>
        
        <h2 className="exp-header">Experience.</h2>

        <div className="exp-list">
          
          {/* EXPERIENCE ROW 1 */}
          <article className="exp-row">
            {/* Column 1: Dates */}
            <div className="exp-timeframe">
              <time>Jan 2026 — Apr 2026</time>
            </div>

            {/* Column 2: Timeline Visual */}
            <div className="exp-timeline-node">
              <div className="node-dot"></div>
              <div className="node-line"></div>
            </div>

            {/* Column 3: Details */}
            <div className="exp-details">
              <div className="exp-title-group">
                <h3 className="exp-role">Software Developer Intern</h3>
                <span className="exp-separator">at</span>
                <span className="exp-company">CodeSynergix</span>
              </div>
              
              <p className="exp-summary">
                Engineered a full-stack <span className="highlight">Trade Fair Stall Booking System</span>. Architected the database using MongoDB, built RESTful APIs with Node/Express, and developed a responsive, state-driven user interface in React.
              </p>

              <div className="exp-tech-stack">
                <span>MongoDB</span>
                <span>Express</span>
                <span>React</span>
                <span>Node.js</span>
              </div>
            </div>
          </article>

          {/* EXPERIENCE ROW 2 (Placeholder to show how the line connects) */}
          {/* <article className="exp-row">
            <div className="exp-timeframe">
              <time>Aug 2025 — Dec 2025</time>
            </div>

            <div className="exp-timeline-node">
              <div className="node-dot"></div>
              <div className="node-line"></div>
            </div>

            <div className="exp-details">
              <div className="exp-title-group">
                <h3 className="exp-role">Freelance Web Developer</h3>
                <span className="exp-separator">for</span>
                <span className="exp-company">Local Clients</span>
              </div>
              
              <p className="exp-summary">
                Designed and developed custom landing pages and interactive portfolios for local businesses, focusing on mobile responsiveness and SEO optimization.
              </p>

              <div className="exp-tech-stack">
                <span>JavaScript</span>
                <span>Tailwind CSS</span>
                <span>Figma</span>
              </div>
            </div>
          </article> */}

        </div>
      </div>
    </section>
  );
}

export default Experience;