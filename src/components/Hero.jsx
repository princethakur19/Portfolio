import "./Hero.css";

import {
    FaGithub,
    FaLinkedIn,
    FaInstagram,
} from "react-icons/fs";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">

                <p className="hero-subtitle">
                    Hello, I'm
                </p>

                <h1 className="hero-title">
                    Prince Thakur
                </h1>

                <h2 className="hero-role">
                    Fullstack Developer
                </h2>

                <p className="hero-description">
                    I create modern, responsive and user-friendly web application using React and mordern web technologies.
                </p>

                <div className="hero-buttons">
                    <button className="hire-btn">
                        Hire Me
                    </button>

                    <button className="project-btn">
                        View Projects
                    </button>
                </div>

                <div className="hero-socials">
                    <a href="#">
                        <FaGithub />
                    </a>

                    <a href="#">
                        <FaLinkedIn />
                    </a>

                    <a href="#">
                        <FaInstagram />
                    </a>
                </div>
            </div>

            <div className="hero-image">
             <img src={#} alt="Profile" />
            </div>
        </section>
    );
}

export default Hero;