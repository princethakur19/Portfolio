import "./Projects.css";

import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

function Projects() {
  return (
    <section className="projects" id="projects">

      <p className="projects-subtitle">
        My Work
      </p>

      <h2 className="projects-title">
        Featured Projects
      </h2>

      <div className="projects-container">

        {/* PROJECT 1 */}
        <div className="project-card">

          <div className="project-image">
            <img src={project1} alt="Project" />
          </div>

          <div className="project-content">

            <h3>
              MERN Blog Application
            </h3>

            <p>
              Full stack blog platform with
              authentication, CRUD operations
              and responsive UI.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

            <div className="project-buttons">

              <a href="#">
                Live Demo
              </a>

              <a href="#">
                GitHub
              </a>

            </div>

          </div>

        </div>

        {/* PROJECT 2 */}
        <div className="project-card">

          <div className="project-image">
            <img src={project2} alt="Project" />
          </div>

          <div className="project-content">

            <h3>
              Portfolio Website
            </h3>

            <p>
              Modern responsive developer
              portfolio built using React
              and custom CSS.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>Responsive</span>
            </div>

            <div className="project-buttons">

              <a href="#">
                Live Demo
              </a>

              <a href="#">
                GitHub
              </a>

            </div>

          </div>

        </div>

        {/* PROJECT 3 */}
        <div className="project-card">

          <div className="project-image">
            <img src={project3} alt="Project" />
          </div>

          <div className="project-content">

            <h3>
              Weather App
            </h3>

            <p>
              Weather forecast app using
              API integration and responsive
              modern UI design.
            </p>

            <div className="project-tech">
              <span>JavaScript</span>
              <span>API</span>
              <span>CSS</span>
            </div>

            <div className="project-buttons">

              <a href="#">
                Live Demo
              </a>

              <a href="#">
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