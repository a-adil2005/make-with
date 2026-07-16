import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h1 className='title'>About MakeWith</h1>
        <p className="about-intro">
          MakeWith is a modern social-commerce platform designed to bridge the gap between 
          brands, creators, and shoppers.
        </p>
        
        <div className="grid">
          <div className="card">
            <h3>Our Vision</h3>
            <p>To redefine the social shopping experience through AI-powered personalization.</p>
          </div>
          <div className="card">
            <h3>Our Mission</h3>
            <p>Empowering creators and brands to connect authentically with their audience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;