import "./Skills.css";
import { useState } from "react";
import { IconCloud } from "./ui/interactive-icon-cloud";

import {
  FaCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

const skillIconSlugs = [
  "html5",
  "css",
  "javascript",
  "react",
  "tailwindcss",
  "nodedotjs",
  "express",
  "mongodb",
  "git",
  "github",
  "linux",
  "vite",
  "npm",
  "visualstudiocode",
];

function Skills() {

  const [activeTab, setActiveTab] = useState("frontend");

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

        {/* TABS */}

        <div className="skills-tabs">

          {/* FRONTEND */}

          <button
            className={
              activeTab === "frontend"
              ? "active-tab"
              : ""
            }
            onClick={() => setActiveTab("frontend")}
          >

            <FaCode className="tab-icon" />

            Frontend

          </button>

          {/* BACKEND */}

          <button
            className={
              activeTab === "backend"
              ? "active-tab"
              : ""
            }
            onClick={() => setActiveTab("backend")}
          >

            <FaServer className="tab-icon" />

            Backend

          </button>

          {/* TOOLS */}

          <button
            className={
              activeTab === "tools"
              ? "active-tab"
              : ""
            }
            onClick={() => setActiveTab("tools")}
          >

            <FaTools className="tab-icon" />

            Tools

          </button>

        </div>

        {/* FRONTEND */}

        {activeTab === "frontend" && (

          <div className="skills-content">

            {/* HTML */}
            <div className="skill-item">

              <div className="skill-info">
                <h3>HTML5</h3>
                <span>80%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "80%" }}
                ></div>
              </div>

            </div>

            {/* CSS */}
            <div className="skill-item">

              <div className="skill-info">
                <h3>CSS3</h3>
                <span>60%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "60%" }}
                ></div>
              </div>

            </div>

            {/* JS */}
            <div className="skill-item">

              <div className="skill-info">
                <h3>JavaScript</h3>
                <span>67%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "67%" }}
                ></div>
              </div>

            </div>

            {/* React */}
            <div className="skill-item">

              <div className="skill-info">
                <h3>React</h3>
                <span>60%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "60%" }}
                ></div>
              </div>

            </div>

            {/* Tailwind */}
            <div className="skill-item">

              <div className="skill-info">
                <h3>Tailwind CSS</h3>
                <span>45%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "45%" }}
                ></div>
              </div>

            </div>

          </div>

        )}

        {/* BACKEND */}

        {activeTab === "backend" && (

          <div className="skills-content">

            {/* NODE */}
            <div className="skill-item">

              <div className="skill-info">
                <h3>Node.js</h3>
                <span>70%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "80%" }}
                ></div>
              </div>

            </div>

            {/* EXPRESS */}
            <div className="skill-item">

              <div className="skill-info">
                <h3>Express.js</h3>
                <span>78%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "78%" }}
                ></div>
              </div>

            </div>

            {/* MONGODB */}
            <div className="skill-item">

              <div className="skill-info">
                <h3>MongoDB</h3>
                <span>64%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "64%" }}
                ></div>
              </div>

            </div>

          </div>

        )}

        {/* TOOLS */}

        {activeTab === "tools" && (

          <div className="skills-content">

            {/* GIT */}
            <div className="skill-item">

              <div className="skill-info">
                <h3>Git</h3>
                <span>48%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "48%" }}
                ></div>
              </div>

            </div>

            {/* GITHUB */}
            <div className="skill-item">

              <div className="skill-info">
                <h3>GitHub</h3>
                <span>60%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "60%" }}
                ></div>
              </div>

            </div>

            {/* LINUX */}
            <div className="skill-item">

              <div className="skill-info">
                <h3>Linux</h3>
                <span>63%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: "63%" }}
                ></div>
              </div>

            </div>

          </div>

        )}

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
