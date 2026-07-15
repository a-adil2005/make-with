// src/components/Navbar/Navbar.jsx
import React from "react";
import "./Navbar.css";
import "./Navbar_hover.css";
import "./Navbar_mobile.css";
import logo from "../../assets/icons/logo.jpg";

import { Link } from "react-router-dom";

function Navbar({ toggleTheme, isDark }) {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-logo">
              <a href="#intro">
                <img src={logo} alt="Make With" />
              </a>
            </div>
            <div className="nav-links">
              <a href="#about">About</a>
              <a href="#features">Features</a>
              <a href="#marketplace">Market</a>
              <a href="#reels">Reels</a>
              <a href="#testmonials">Review</a>
              <a href="#app">App</a>
              <a href="#faq">FAQ's</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="nav-cta">
              {/* Toggle Button */}
              <button onClick={toggleTheme} className="theme-toggle">
                {isDark ? "☀️ Light" : "🌙 Dark"}
              </button>
              <Link to="/login" className="login-btn">
                <button className="login-btn">Login</button>
              </Link>
              <button className="waitlist btn">
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
