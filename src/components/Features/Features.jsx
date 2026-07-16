import React from 'react';
import './Features.css';
import { featuresData } from '../../data/features';
import FeatureCard from './FeatureCard';

function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <h1 className='features-title'>Why Choose MakeWith?</h1>
        <div className="grid">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} desc={feature.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;