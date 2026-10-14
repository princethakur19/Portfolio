import "./Navbar.css";
import logo from "../assets/logo.png";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaDownload, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import { scrollToSection } from "../utils/smoothScroll";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const menuRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) closeMenu();
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

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
      <nav className={`navbar${menuOpen ? " menu-is-open" : ""}`} ref={menuRef}>
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
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <FaTimes aria-hidden="true" /> : <span className="menu-icon"><i></i><i></i><i></i></span>}
        </button>

        {/* NAV LINKS */}

        <ul id="primary-navigation" className={`nav-links ${menuOpen ? "open" : ""}`}>
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

        <a
          href="/resume.pdf"
          download="Prince_Thakur_Resume.pdf"
          className="mobile-resume-btn"
          onClick={closeMenu}
        >
          <FaDownload /> Download Resume
        </a>

        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>

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
