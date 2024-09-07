import React from 'react';
import MapComponent from '../components/MapComponent';
import Form from '../components/Form';
import '../ContactUs.css'; // For custom styling
import ContactSection from '../components/Contact';

function ContactUs() {
  return (
    <div >
      <div className='contact-section'>
    
      </div>
      <ContactSection/>
      { <Form /> }
       <MapComponent />
       
     
     
    </div>
    
  );
}

export default ContactUs;