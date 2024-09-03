import React from 'react';
import MapComponent from '../components/MapComponent';
import Form from '../components/Form';
import '../ContactUs.css'; // For custom styling
import ContactSection from '../components/Contact';
import Carousel from '../components/Carousel';

function ContactUs() {
  return (
    <div >
      <div className='contact-section'>
    
      </div>
      <Carousel/>
      <ContactSection/>
       <MapComponent />
       
      {/* <Form /> */}
     
    </div>
    
  );
}

export default ContactUs;