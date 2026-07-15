import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h1 className='title'>Get In Touch</h1>
        <p>Have questions? We'd love to hear from you.</p>
        
        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit" className="submit btn">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;