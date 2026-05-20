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

      {/* TOP */}

      <div className="footer-top">

        {/* LOGO */}

        <div className="footer-logo">

          <h2>
            Prince
          </h2>

          <p>
            MERN Stack Developer passionate
            about building modern and
            responsive web applications.
          </p>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#skills">
            Skills
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>

        {/* SOCIAL LINKS */}

        <div className="footer-social">

          <h3>
            Follow Me
          </h3>

          <div className="footer-icons">

            {/* GITHUB */}

            <a
              href="https://github.com/princethakur19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/prince-thakur-a99144264"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            {/* X */}

            <a
              href="https://x.com/PinceThakur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>

            {/* INSTAGRAM */}

            <a
              href="https://instagram.com/princethakur.19"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

          </div>

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