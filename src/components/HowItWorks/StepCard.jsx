import React from 'react';

function StepCard({ id, title, desc }) {
  return (
    <div className="card">
      <div className="step-number">{id}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default StepCard;