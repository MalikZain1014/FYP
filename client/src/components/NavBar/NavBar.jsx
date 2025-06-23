import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, AirplaneHelix45Deg } from "iconoir-react";
import "./NavBar.css";

const NavBar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="outerNavContainer">
      <nav className={`navbar ${isMobileNavOpen ? "open" : ""}`}>
        <div className="navbar-left">
          <div className="navbar-logo">
            <Link to="/">
              <img src="/logo.jpg" alt="University Logo" />
            </Link>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-links">
            <Link
              to="/"
              className={`navbar-link ${
                location.pathname === "/" ? "activeRoute" : ""
              }`}
            >
              Home
            </Link>
            <div className="navbar-link">
              Pages
              <div className="hoveritemsContainer">
                <ul>
                  <li>
                    <Link className="myLiLink" to="/about">
                      About EDU
                    </Link>
                  </li>
                  <li>
                    <Link to="/ourblogs">Blogs</Link>
                  </li>
                  <li>Featured</li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>Gallary</li>
                  <li>Price Table</li>
                </ul>
              </div>
            </div>

            <Link
              to="/academic"
              className={`navbar-link ${
                location.pathname === "/academic" ? "activeRoute" : ""
              }`}
            >
              Academics
            </Link>
            <Link
              to="/admissions"
              className={`navbar-link ${
                location.pathname === "/admissions" ? "activeRoute" : ""
              }`}
            >
              Admissions
            </Link>
            <Link
              to="/ourcourses"
              className={`navbar-link ${
                location.pathname === "/ourcourses" ? "activeRoute" : ""
              }`}
            >
              Courses
            </Link>
            <Link
              to="/ethletic"
              className={`navbar-link ${
                location.pathname === "/ethletic" ? "activeRoute" : ""
              }`}
            >
              Athletics
            </Link>
            <Link
              to="/universitylife"
              className={`navbar-link ${
                location.pathname === "/universitylife" ? "activeRoute" : ""
              }`}
            >
              University Life
            </Link>
            {/* Add other links */}
          </div>
          <div className="navbar-search" onClick={toggleMobileNav}>
            <Search />
          </div>
        </div>
        <div className={`mobile-nav ${isMobileNavOpen ? "open" : ""}`}>
          <div className="close-icon" onClick={toggleMobileNav}>
            <AirplaneHelix45Deg className="closeIcon" />
          </div>
          <ul className="mobile-nav-list">
            <li>Home</li>
            <li>Pages</li>
            <li>Academics</li>
            <li>Admissions</li>
            <li>Courses</li>
            <li>Altheltics</li>
            <li>University Life</li>
            {/* Add more items */}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
