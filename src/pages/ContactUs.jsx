import React from 'react';
import { Helmet } from 'react-helmet-async';
import MapComponent from '../components/MapComponent';
import '../ContactUs.css'; // For custom styling
import ContactSection from '../components/Contact';

function ContactUs() {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Lotus Accounting Services</title>
        <meta name="description" content="Get in touch with Lotus Accounting Services. Call 0412 305 150 or visit us at 39 Venture Dr, Griffin QLD 4503." />
        <link rel="canonical" href="https://lotusaccounting.com.au/contactus" />
      </Helmet>
      <ContactSection/>
       <MapComponent />
       
     
     
    </div>
    
  );
}

export default ContactUs;