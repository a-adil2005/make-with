import React from 'react';
import './HowItWorks.css';
import { steps } from '../../data/howItWorks';
import StepCard from './StepCard';

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        <h1 className="how-it-works-title">How It Works</h1>
        <div className="steps-grid">
          {steps.map((step) => (
            <StepCard key={step.id} id={step.id} title={step.title} desc={step.desc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;