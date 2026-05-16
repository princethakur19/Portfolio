import "./Projects.css";

import project1 from "../assets/tradefair.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <p className="projects-subtitle">My Work</p>

      <h2 className="projects-title">Featured Project</h2>

      <div className="projects-container">
        {/* PROJECT CARD */}
        <div className="project-card">
          {/* PROJECT IMAGE */}
          <div className="project-image">
            <img src={project1} alt="Trade Fair Stall Booking System" />
          </div>

          {/* PROJECT CONTENT */}
          <div className="project-content">
            <h3>Trade Fair Stall Booking System</h3>

            <p>
              A full stack MERN application for managing trade fair stall
              bookings with authentication, booking management and responsive
              UI.
            </p>

            {/* TECH STACK */}
            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>MongoDB</span>
              <span>MERN Stack</span>
            </div>

            {/* BUTTONS */}
            <div className="project-buttons">
              {/* LIVE DEMO */}
              <a href="#">Coming Soon</a>

              {/* GITHUB */}
              <a
                href="https://github.com/princethakur19/TradeFairBook"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
