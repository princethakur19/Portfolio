import "./About.css";
// import kk from "../assets/profile.png"; // Placeholder for profile image

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        
        {/* PROFILE/TEXT COLUMN */}
        <div className="about-text-column">
          <p className="about-subtitle">Who am I?</p>
          <h2 className="about-title">A MCA Student & MERN Stack Developer</h2>
          
          <div className="about-description">
            <p>
              I'm <span className="highlight-text">Prince Thakur</span>, a highly motivated MCA student with a profound passion for modern web architecture. I specialize in the full development lifecycle within the <span className="highlight-text">MERN</span> stack.
            </p>
            <p>
              From architecting robust <span className="highlight-text">Node.js</span> backend APIs to crafting pixel-perfect, responsive user interfaces in <span className="highlight-text">React</span>, my focus is always on delivering smooth, accessible, and engaging digital experiences.
            </p>
          </div>

          <button className="download-btn">
            Download CV
          </button>
        </div>

        {/* DETAILS/CARDS COLUMN */}
        <div className="about-details-column">
          
          <div className="about-bento-grid">
            
            {/* Card 1: Academic Focus */}
            <div className="about-card academics-card">
              <div className="card-header">
                <span className="card-icon">🎓</span>
                <h3>Education & Specialization</h3>
              </div>
              <p><span>MCA Student</span> • MERN Stack Development</p>
            </div>

            {/* Card 2: Contact Info */}
            <div className="about-card contact-card">
              <div className="card-header">
                <span className="card-icon">📍</span>
                <h3>Location & Availability</h3>
              </div>
              <p>Based in <span>India</span></p>
              <p>Available for <span className="highlight-text">Freelance</span> & <span className="highlight-text">Full-time</span></p>
            </div>

            {/* Card 3: Direct Connect */}
            <div className="about-card connect-card">
              <div className="card-header">
                <span className="card-icon">✉️</span>
                <h3>Direct Connect</h3>
              </div>
              <p className="email-link">princethakur7778@gmail.com</p>
            </div>

            {/* Card 4: Main Statistic */}
            <div className="about-card stat-card">
              <div className="stat-content">
                <span className="stat-number">5+</span>
                <p>Full-Stack Projects Completed</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;