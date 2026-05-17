import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinux,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
} from "react-icons/si";

function Skills() {
  return (
    <section className="skills" id="skills">

      <p className="skills-subtitle">
        My Skills
      </p>

      <h2 className="skills-title">
        Technologies I Work With
      </h2>

      <div className="skills-container">

        {/* HTML */}
        <div className="skill-card">
          <FaHtml5 className="skill-icon html" />
          <h3>HTML5</h3>
        </div>

        {/* CSS */}
        <div className="skill-card">
          <FaCss3Alt className="skill-icon css" />
          <h3>CSS3</h3>
        </div>

        {/* JS */}
        <div className="skill-card">
          <FaJs className="skill-icon js" />
          <h3>JavaScript</h3>
        </div>

        {/* React */}
        <div className="skill-card">
          <FaReact className="skill-icon react" />
          <h3>React</h3>
        </div>

        {/* Node */}
        <div className="skill-card">
          <FaNodeJs className="skill-icon node" />
          <h3>Node.js</h3>
        </div>

        {/* Express */}
        <div className="skill-card">
          <SiExpress className="skill-icon express" />
          <h3>Express.js</h3>
        </div>

        {/* MongoDB */}
        <div className="skill-card">
          <SiMongodb className="skill-icon mongo" />
          <h3>MongoDB</h3>
        </div>

        {/* Git */}
        <div className="skill-card">
          <FaGitAlt className="skill-icon git" />
          <h3>Git</h3>
        </div>

        {/* GitHub */}
        <div className="skill-card">
          <FaGithub className="skill-icon github" />
          <h3>GitHub</h3>
        </div>

        {/* Linux */}
        <div className="skill-card">
          <FaLinux className="skill-icon linux" />
          <h3>Linux</h3>
        </div>

      </div>

    </section>
  );
}

export default Skills;