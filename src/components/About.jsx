import "./About.css";

function About() {
    return(
        <section className="about">
            <div className="about-content">

                <p className="section-subtitle">
                    About Me
                </p>

                <h2 className="section-subtitle">
                    Passionate Frontend Developer
                </h2>

                <p className="about-description">
                    I am an MCA student and frontend developer
                    passionate about creating modern, responsive,
                    and user-friendly web applications.

                    I enjoy building clean UI designs and learning
                    modern technologies like React, DevOps,
                    and Agentic AI.
                </p>

                <div className="about-info">
                    <div>
                        <span>Name:</span>
                        <p>Prince Thakur</p>
                    </div>

                    <div>
                        <span>Email:</span>
                        <p>princethakur7778@gmail.com</p>
                    </div>

                    <div>
                        <span>Education:</span>
                        <p>MCA</p>
                    </div>

                    <div>
                        <span>Location:</span>
                        <p>India</p>
                    </div>
                </div>

            </div>

            <div className="about-cards">

                <div className="about-card">
                <h3>1+</h3>
                <p>Years Learning</p>
                </div>

                <div className="about-card">
                <h3>5+</h3>
                <p>Projects Completed</p>
                </div>

                <div className="about-card">
                <h3>Frontend</h3>
                <p>React Developer</p>
                </div>

                <div className="about-card">
                <h3>DevOps</h3>
                <p>Learning Linux & Cloud</p>
                </div>

            </div>

    </section>
  );
}

export default About;
