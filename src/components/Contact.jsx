// src/components/ContactSection.jsx
import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'; // Ensure you have the correct heroicons installed
import './Contact.css'; // Import the updated CSS
import Form from './Form'; // Import the updated Form component

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
        <Form/>
      </div>
    </div>
  );
};

export default ContactSection;
