import React from 'react';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../data/testimonials';

function Testimonials() {
  return (
    <section id='testmonials' className="testimonials-section">
      <div className="testimonials-container">
        <h1 className='title'>What People Say</h1>
        <div className="grid">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;