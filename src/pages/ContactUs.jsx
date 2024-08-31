import React from 'react';
import MapComponent from '../components/MapComponent';
import Form from '../components/Form';
import '../ContactUs.css'; // For custom styling

function ContactUs() {
  return (
    
    <div className="contact-us-container">
       <MapComponent />
      <h2 className="contact-us-title">Contact Us</h2>
      <div className="contact-info-container">
        <div className="contact-info">
          <h3>Our Office</h3>
          <p>Lotus Accounting Services</p>
          <p>123 Main Street, Suite 101</p>
          <p>Sydney, NSW 2000</p>
          <p>Email: info@lotusaccounting.com</p>
          <p>Phone: (02) 1234 5678</p>
        </div>
        <Form />
      </div>
     
    </div>
  );
}

export default ContactUs;