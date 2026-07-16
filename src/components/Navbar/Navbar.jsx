// src/components/Navbar/Navbar.jsx
import React from "react";
import "./Navbar.css";
import "./Navbar_hover.css";
import "./Navbar_mobile.css";
import logo from "../../assets/icons/logo.jpg";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom"; // For page navigation
import { Link as ScrollLink } from "react-scroll";     // For in-page scrolling

function Navbar({ toggleTheme, isDark }) {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <a href="#intro"  smooth={true} duration={500}>
                <img src={logo} alt="Make With" />
              </a>
            </div>
            <div className="nav-links">
              <a href="#about" smooth={true} duration={500}>About</a>
              <a href="#features" smooth={true} duration={500}>Features</a>
              <a href="#marketplace" smooth={true} duration={500}>Market</a>
              <a href="#reels" smooth={true} duration={500}>Reels</a>
              <a href="#testmonials" smooth={true} duration={500}>Review</a>
              <a href="#app" smooth={true} duration={500}>App</a>
              <a href="#faq" smooth={true} duration={500}>FAQ's</a>
              <a href="#contact" smooth={true} duration={500}>Contact</a>
            </div>
            <div className="nav-cta">
              {/* Toggle Button */}
              <button onClick={toggleTheme} className="theme-toggle">
                {isDark ? "☀️ Light" : "🌙 Dark"}
              </button>
              <Link to="/login" className="login-btn" smooth={true} duration={500}>
                <button className="login-btn">Login</button>
              </Link>
              <button className="wait btn" smooth={true} duration={500}>
                Join <br /> Waitlist
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
