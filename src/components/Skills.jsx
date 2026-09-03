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
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Linux", icon: FaLinux },
      { name: "Vite", icon: SiVite },
      { name: "NPM", icon: SiNpm },
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
                {group.skills.map(({ name, icon: SkillIcon }) => (
                  <div className="skill-item" key={name}>
                    <SkillIcon className="skill-icon" aria-hidden="true" />
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
