import "./Navbar.css";
import logo from "../assets/logo.png";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { scrollToSection } from "../utils/smoothScroll";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    let animationFrame;

    const updateActiveSection = () => {
      const sections = navItems
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const markerPosition = window.scrollY + window.innerHeight * 0.35;
      let currentSection = sections[0];

      if (pageBottom >= documentHeight - 2) {
        currentSection = sections[sections.length - 1];
      } else {
        sections.forEach((section) => {
          if (section.offsetTop <= markerPosition) {
            currentSection = section;
          }
        });
      }

      setActiveSection((previousSection) =>
        previousSection === currentSection.id ? previousSection : currentSection.id,
      );
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  const handleNavClick = (event, sectionId) => {
    event.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) return;

    scrollToSection(sectionId);
    setActiveSection(sectionId);
    closeMenu();
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* LOGO */}

        <a
          href="#home"
          className="logo"
          onClick={(event) => handleNavClick(event, "home")}
        >
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
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                aria-current={activeSection === item.id ? "page" : undefined}
                onClick={(event) => handleNavClick(event, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
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
