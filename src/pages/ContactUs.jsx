import React from 'react';
import MapComponent from '../components/MapComponent';
import Form from '../components/Form';
import '../ContactUs.css'; // For custom styling

function ContactUs() {
  return (
    <div >
      <div className='contact-section'>
    <h2>Get in Touch</h2>
    
      </div>
       
       <MapComponent />
    
     
      <Form />
     
    </div>
    
  );
}

export default ContactUs;