import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>MakeWith</h3>
          <p>Connecting creators and shoppers everywhere.</p>
        </div>
        
        <div className="footer-links">
          <h4>Links</h4>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-social">
          <h4>Follow Us</h4>
          <p>placeholder_social_icons</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 MakeWith. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;