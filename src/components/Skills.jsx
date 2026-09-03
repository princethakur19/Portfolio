import "./Skills.css";
import { IconCloud } from "./ui/interactive-icon-cloud";

import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNpm,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

const skillIconSlugs = [
  "html5",
  "css",
  "javascript",
  "react",
  "tailwindcss",
  "nodedotjs",
  "express",
  "mysql",
  "mongodb",
  "git",
  "github",
  "linux",
  "vite",
  "npm",
  "visualstudiocode",
];

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#e34f26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
      { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
      { name: "React", icon: FaReact, color: "#61dafb" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#5fa04e" },
      { name: "Express.js", icon: SiExpress, color: "#111827" },
      { name: "MySQL", icon: SiMysql, color: "#4479a1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "#f05032" },
      { name: "GitHub", icon: FaGithub, color: "#181717" },
      { name: "Linux", icon: FaLinux, color: "#fbc02d" },
      { name: "Vite", icon: SiVite, color: "#646cff" },
      { name: "NPM", icon: SiNpm, color: "#cb3837" },
    ],
  },
];

function Skills() {
  return (
    <section className="skills" id="skills">

      {/* TITLE */}

      <p className="skills-subtitle">
        My Skills
      </p>

      <h2 className="skills-title">
        Skills & Technologies
      </h2>

      <p className="skills-description">
        Technologies and tools I use to build
        modern full stack web applications.
      </p>

      {/* SKILLS BOX */}

      <div className="skills-box">

        <div className="skills-content">
          {skillGroups.map((group) => (
            <div className="skill-category" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-tags">
                {group.skills.map(({ name, icon: SkillIcon, color }) => (
                  <div className="skill-item" key={name}>
                    <SkillIcon
                      className="skill-icon"
                      style={{ color }}
                      aria-hidden="true"
                    />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-cloud-section">
          <div className="skills-cloud" aria-label="Interactive technology icon globe">
            <IconCloud iconSlugs={skillIconSlugs} />
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;
