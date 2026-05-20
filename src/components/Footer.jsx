import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* LEFT */}

        <div className="footer-logo">

          <h2>
            Prince
          </h2>

          <p>
            MERN Stack Developer
          </p>

        </div>

        {/* CENTER */}

        <div className="footer-links">

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#projects">Projects</a>

          <a href="#skills">Skills</a>

          <a href="#contact">Contact</a>

        </div>

        {/* RIGHT */}

        <div className="footer-icons">

          <a
            href="https://github.com/princethakur19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/prince-thakur-a99144264"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/PinceThakur"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://instagram.com/princethakur.19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © 2026 Prince Thakur. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;