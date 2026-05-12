import "./Hero.css";
// import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero">

      {/* Background Blur */}
      <div className="blur blur-1"></div>
      <div className="blur blur-2"></div>

      {/* LEFT SIDE */}
      <div className="hero-content">

        <p className="hero-subtitle">
          Hello, I'm
        </p>

        <h1 className="hero-title">
          Prince <span>Thakur</span>
        </h1>

        <h2 className="hero-role">
          Frontend Developer
        </h2>

        <p className="hero-description">
          I build modern, responsive and visually
          appealing web applications with clean UI
          and smooth user experience.
        </p>

        <div className="hero-buttons">
          <button className="hire-btn">
            Hire Me
          </button>

          <button className="project-btn">
            View Projects
          </button>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="hero-image">

        {/* <div className="image-card">
          <img src={profile} alt="Profile" />
        </div> */}

      </div>

    </section>
  );
}

export default Hero;