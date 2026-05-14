import "./About.css";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

function About() {
  return (
    <section className="about">

      {/* Blur Effects */}
      <div className="about-blur about-blur-1"></div>
      <div className="about-blur about-blur-2"></div>

      {/* LEFT SIDE */}
      <div className="about-content">

        <p className="section-subtitle">
          About Me
        </p>

        <h2 className="section-title">
          Passionate
          <span> MERN Stack Developer</span>
        </h2>

        <p className="about-description">
          I am an MCA student and passionate MERN Stack
          Developer focused on building modern,
          responsive and scalable web applications.

          I enjoy creating interactive frontend UI,
          backend APIs and database-driven applications
          using MongoDB, Express.js, React and Node.js.

          Currently, I am also learning DevOps,
          Linux and modern development workflows
          to improve my full stack development skills.
        </p>

        {/* INFO SECTION */}
        <div className="about-info">

          <div className="info-box">
            <span>Name</span>
            <p>Prince Thakur</p>
          </div>

          <div className="info-box">
            <span>Email</span>
            <p>princethakur7778@gmail.com</p>
          </div>

          <div className="info-box">
            <span>Education</span>
            <p>MCA Student</p>
          </div>

          <div className="info-box">
            <span>Specialization</span>
            <p>MERN Stack Development</p>
          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="about-cards">

        <div className="about-card">
          <FaReact className="card-icon" />
          <h3>React</h3>
          <p>Modern Frontend UI</p>
        </div>

        <div className="about-card">
          <FaNodeJs className="card-icon" />
          <h3>Node.js</h3>
          <p>Backend Development</p>
        </div>

        <div className="about-card">
          <FaDatabase className="card-icon" />
          <h3>MongoDB</h3>
          <p>Database Management</p>
        </div>

        <div className="about-card">
          <FaCode className="card-icon" />
          <h3>REST APIs</h3>
          <p>API Integration & Development</p>
        </div>

      </div>

    </section>
  );
}

export default About;