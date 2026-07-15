import React from 'react';

function TestimonialCard({ name, role, feedback }) {
  return (
    <div className="card">
      <p>"{feedback}"</p>
      <h4>{name}</h4>
      <span>{role}</span>
    </div>
  );
}

export default TestimonialCard;