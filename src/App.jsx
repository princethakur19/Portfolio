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
  SiTailwindcss,
} from "react-icons/si";

function Skills() {

  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
      className: "html",
    },

    {
      icon: <FaCss3Alt />,
      name: "CSS3",
      className: "css",
    },

    {
      icon: <FaJs />,
      name: "JavaScript",
      className: "js",
    },

    {
      icon: <FaReact />,
      name: "React",
      className: "react",
    },

    {
      icon: <FaNodeJs />,
      name: "Node.js",
      className: "node",
    },

    {
      icon: <SiExpress />,
      name: "Express.js",
      className: "express",
    },

    {
      icon: <SiMongodb />,
      name: "MongoDB",
      className: "mongo",
    },

    {
      icon: <FaGitAlt />,
      name: "Git",
      className: "git",
    },

    {
      icon: <FaGithub />,
      name: "GitHub",
      className: "github",
    },

    {
      icon: <FaLinux />,
      name: "Linux",
      className: "linux",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind",
      className: "tailwind",
    },
  ];

  return (
    <section className="skills" id="skills">

      {/* BLUR EFFECTS */}
      <div className="skills-blur blur-1"></div>
      <div className="skills-blur blur-2"></div>

      <p className="skills-subtitle">
        Skills & Technologies
      </p>

      <h2 className="skills-title">
        My Tech Stack
      </h2>

      <p className="skills-description">
        Technologies and tools I use to build
        modern full stack web applications.
      </p>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className={`skill-icon ${skill.className}`}>
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <span>
              Modern Development
            </span>

            <div className="skill-glow"></div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;