import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
    return(
        <header className="header">
            <nav className="navbar">

                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>

                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <button className="resume-btn">Resume</button>
            </nav>
        </header>
    )
}

export default Navbar;