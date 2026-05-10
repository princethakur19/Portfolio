import "./Navbar.css";

function Navbar() {
    return(
        <header className="header">
            <nav className="navbar">
                <h1 className="logo">Prince</h1>

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