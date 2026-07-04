import "./Navbar.css";
import logo from "../assets/logo.png";
import { useLayoutEffect, useState } from "react";
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

  useLayoutEffect(() => {
    const updateActiveSection = () => {
      const sections = navItems
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      const navbarBottom = document
        .querySelector(".navbar")
        ?.getBoundingClientRect().bottom ?? 0;
      const scrollPosition = window.scrollY;
      const activationPosition = scrollPosition + navbarBottom + 2;
      let currentSection = sections[0];

      if (scrollPosition > 5) {
        sections.forEach((section) => {
          const sectionTop = section.getBoundingClientRect().top + scrollPosition;

          if (sectionTop <= activationPosition) {
            currentSection = section;
          }
        });
      }

      const reachedPageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;

      if (reachedPageBottom) {
        currentSection = sections[sections.length - 1];
      }

      setActiveSection((previousSection) =>
        previousSection === currentSection.id ? previousSection : currentSection.id,
      );
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    document.addEventListener("scroll", updateActiveSection, { passive: true, capture: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      document.removeEventListener("scroll", updateActiveSection, { capture: true });
      window.removeEventListener("resize", updateActiveSection);
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
