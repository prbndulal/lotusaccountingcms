// src/components/MapComponent.jsx
import React from 'react';
import './MapComponent.css';
const MapComponent = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3546.9612382762007!2d153.01755687598586!3d-27.251745007455686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b93e4d3e4dd3a2b%3A0xf188553190f3d009!2s39%20Venture%20Dr%2C%20Griffin%20QLD%204503!5e0!3m2!1sen!2sau!4v1725080942501!5m2!1sen!2sau"
        loading="lazy"
        title="Office Location Map"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
