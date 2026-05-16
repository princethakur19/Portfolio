import "./About.css";
// import kk from "../assets/profile.png";

function About() {
  return (
    <section className="about" id="about">

      {/* LEFT SIDE IMAGE */}
      {/* <div className="about-image">
        <img src={kk} alt="Profile" />
      </div> */}

      {/* RIGHT SIDE CONTENT */}
      <div className="about-content">

        <p className="about-subtitle">
          About Me
        </p>

        <h2 className="about-title">
          MERN Stack Developer
        </h2>

        <p className="about-description">
          I am an MCA student and passionate MERN Stack
          Developer focused on building modern,
          responsive and scalable web applications.

          I enjoy creating interactive frontend UI,
          backend APIs and database-driven applications
          using MongoDB, Express.js, React and Node.js.
        </p>

        {/* INFO SECTION */}
        <div className="about-info">

          <div className="info-row">
            <span>Name:</span>
            <p>Prince Thakur</p>
          </div>

          <div className="info-row">
            <span>Email:</span>
            <p>princethakur7778@gmail.com</p>
          </div>

          <div className="info-row">
            <span>Education:</span>
            <p>MCA Student</p>
          </div>

          <div className="info-row">
            <span>Specialization:</span>
            <p>MERN Stack Development</p>
          </div>

          <div className="info-row">
            <span>Location:</span>
            <p>India</p>
          </div>

        </div>

        {/* EXPERIENCE */}
        <div className="about-projects">
          <h3>5+</h3>
          <p>Projects Completed</p>
        </div>

        {/* BUTTON */}
        <button className="download-btn">
          Download CV
        </button>

      </div>

    </section>
  );
}

export default About;