import "./Navbar.css";
import logo from "../assets/logo.png";
import { useState } from "react";
import { FaDownload } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar">
        {/* LOGO */}

        <a href="#home" className="logo" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </a>

        {/* MOBILE MENU BUTTON */}

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAV LINKS */}

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>

        {/* RESUME BUTTON */}

        <a
          href="/resume.pdf"
          download="Prince_Thakur_Resume.pdf"
          className="resume-btn"
        >
          <FaDownload />
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
