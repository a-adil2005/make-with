import React from 'react';
import './AppShowcase.css';

function AppShowcase() {
  const screens = ["Home Feed", "Reels", "Marketplace", "Chat", "Profile"];

  return (
    <section id='app' className="app-showcase-section">
      <div className="app-showcase-container">
        <h1 className='title'>App Showcase</h1>
        <div className="showcase-grid">
          {screens.map((screen, index) => (
            <div key={index} className="card phone-mockup">
              <div className="screen-placeholder">{screen}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AppShowcase;