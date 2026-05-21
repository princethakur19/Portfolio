import "./Navbar.css";
import logo from "../assets/logo.png";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>

          <li>
            <a href="#home" onClick={closeMenu}>Home</a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>About</a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>Skills</a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>

        </ul>

        {/* Resume Button */}
        <button className="resume-btn">
          Resume
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
