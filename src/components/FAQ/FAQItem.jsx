import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="faq-question">
        {question}
      </button>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

export default FAQItem;