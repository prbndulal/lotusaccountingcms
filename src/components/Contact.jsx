// src/components/ContactSection.jsx
import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'; // Ensure you have the correct heroicons installed
import './Contact.css'; // Import the updated CSS

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-details">
        <h2 className="contact-title">Get in touch</h2>
        <p>Our highly experienced and qualified team are ready to speak with you. You can contact us on any of the below methods…</p>

        <div className="contact-item">
          <span className="icon">
            <MapPinIcon className="icon-style" />
          </span>
          <div className="contact-info">
            <h2>Address</h2>
           <p>39 Venture Dr. Griffin QLD 4503</p>
          </div>
        </div>

        <div className="contact-item">
          <span className="icon">
            <PhoneIcon className="icon-style" />
          </span>
          <div className="contact-info">
            <h2>Phone</h2>
            <p>+61 412 305 150</p>
          </div>
        </div>

        <div className="contact-item">
          <span className="icon">
            <EnvelopeIcon className="icon-style" />
          </span>
          <div className="contact-info">
            <h2>Email</h2>
            <p>info@lotusaccounting.com.au</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <form method="post" className="contact-form-element" aria-label="Contact form">
          <p>
            <label>
              Your Name (required)
              <br />
              <input type="text" name="your-name" className="form-control" required />
            </label>
          </p>
          <p>
            <label>
              Your Email (required)
              <br />
              <input type="email" name="your-email" className="form-control" required />
            </label>
          </p>
          <p>
            <label>
              Your Message
              <br />
              <textarea name="your-message" rows="10" className="form-control"></textarea>
            </label>
          </p>
          <p>
            <button type="submit" className="submit-button">
              Send
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
