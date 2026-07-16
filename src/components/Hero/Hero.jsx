import React from "react";
import "./Hero.css";
import "./Hero_mobile.css";
import logo from "../../assets/icons/logo.jpg";
import { Link as RouterLink } from "react-router-dom"; // For page navigation
import { Link as ScrollLink } from "react-scroll"; // For in-page scrolling

function Hero() {
  return (
    <section id="intro" className="hero-container">
      <div className="hero-content">
        <h2 className="hero-title">Experience Modern Social-Commerce</h2>
        <p className="hero-description">
          MakeWith connects brands, creators, and shoppers through AI-powered
          recommendations.
        </p>
        <div>
          <ScrollLink to="down" className="txtsiz btn" smooth={true} duration={1000}>
            Download App
          </ScrollLink>
        </div>
      </div>
      <div className="hero-image">
        {/* Placeholder for the mobile app mockup */}
        <img src={logo} alt="MakeWith App Preview" />
      </div>
    </section>
  );
}

export default Hero;
