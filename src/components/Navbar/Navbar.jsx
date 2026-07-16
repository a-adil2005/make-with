// src/components/Navbar/Navbar.jsx
import React from "react";
import "./Navbar.css";
import "./Navbar_hover.css";
import "./Navbar_mobile.css";
import logo from "../../assets/icons/logo.jpg";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom"; // For page navigation
import { Link as ScrollLink } from "react-scroll"; // For in-page scrolling

function Navbar({ toggleTheme, isDark }) {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <ScrollLink to="intro" smooth={true} duration={1000}>
                <img src={logo} alt="Make With" />
              </ScrollLink>
            </div>
            <div className="nav-links">
              <ScrollLink to="about" smooth={true} duration={1000}>
                About
              </ScrollLink>
              <ScrollLink to="features" smooth={true} duration={1000}>
                Features
              </ScrollLink>
              <ScrollLink to="marketplace" smooth={true} duration={1000}>
                Market
              </ScrollLink>
              <ScrollLink to="reels" smooth={true} duration={1000}>
                Reels
              </ScrollLink>
              <ScrollLink to="testmonials" smooth={true} duration={1000}>
                Review
              </ScrollLink>
              <ScrollLink to="app" smooth={true} duration={1000}>
                App
              </ScrollLink>
              <ScrollLink to="faq" smooth={true} duration={1000}>
                FAQ's
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={1000}>
                Contact
              </ScrollLink>
            </div>
            <div className="nav-cta">
              {/* Toggle Button */}
              <button onClick={toggleTheme} className="theme-toggle">
                {isDark ? "☀️ Light" : "🌙 Dark"}
              </button>
              <Link
                to="/login"
                className="login-btn"
                smooth={true}
                duration={1000}
              >
                <button className="login-btn">Login</button>
              </Link>
              <button className="btn" smooth={true} duration={1000}>
                <div className="wait">
                  Join <br /> Waitlist
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
