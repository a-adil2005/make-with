import React from 'react';
import './FAQ.css';
import { faqData } from '../../data/faq';
import FAQItem from './FAQItem';

function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h1 className='title'>Frequently Asked Questions</h1>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;