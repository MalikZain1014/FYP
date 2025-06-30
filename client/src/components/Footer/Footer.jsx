import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">
          <img src="/logo.jpg" alt="univeersity logo" />
        </h1>

        <h2>Address</h2>

        <address>
          2 KM Multan Road Renala Khurd Bypass, Okara
          <br />
          <Link to="/contactus" className="footer__btn">
            Contact Us
          </Link>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Our Campus</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Acedemics</a>
            </li>

            <li>
              <a href="#">Planning & Administration</a>
            </li>

            <li>
              <a href="#">Campus Safety</a>
            </li>
            <li>
              <a href="#">Office of the Chancellor</a>
            </li>
            <li>
              <a href="#">Facility Services</a>
            </li>
            <li>
              <a href="#">Human Resources</a>
            </li>
          </ul>
        </li>

        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Campus Life</h2>

          <ul className="nav__ul nav__ul--extra">
            <li>
              <a href="#">Accessiblitiy</a>
            </li>

            <li>
              <a href="#">Financial Aid</a>
            </li>

            <li>
              <a href="#">Food Services</a>
            </li>

            <li>
              <a href="#">Housing</a>
            </li>

            <li>
              <a href="#">Artificial Intelligence</a>
            </li>

            <li>
              <a href="#">Student Life</a>
            </li>
          </ul>
        </li>

        <li className="nav__item">
          <h2 className="nav__title">Academics</h2>

          <ul className="nav__ul">
            <li>
              <a href="#">Convas</a>
            </li>

            <li>
              <a href="#">Catalyst</a>
            </li>

            <li>
              <a href="#">Library</a>
            </li>
            <li>
              <a href="#">Time Schedule</a>
            </li>
            <li>
              <a href="#">Apply For Admissions</a>
            </li>
            <li>
              <a href="#">Pay My Tuition</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>&copy; 2025 Something. All rights reserved.</p>

        <div className="legal__links">
          <span>
            Made By <span className="heart">♥</span> Usama Ahmad
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
