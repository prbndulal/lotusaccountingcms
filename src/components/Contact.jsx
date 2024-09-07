// src/components/ContactSection.jsx
import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'; // Ensure you have the correct heroicons installed
import Form from './Form'; // Import the updated Form component

const ContactSection = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:p-12">
      <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg mb-6">
        Our highly experienced and qualified team is ready to speak with you. You can contact us using any of the methods below:
      </p>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-6 mb-8 md:mb-0">
          <div className="flex items-start space-x-4">
            <MapPinIcon className="w-6 h-6 text-gray-600" />
            <div>
              <h3 className="text-lg font-semibold">Address</h3>
              <p className="text-gray-700">39 Venture Dr, Griffin QLD 4503</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <PhoneIcon className="w-6 h-6 text-gray-600" />
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-gray-700">+61 412 305 150</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <EnvelopeIcon className="w-6 h-6 text-gray-600" />
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-gray-700">info@lotusaccounting.com.au</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
            <p className="text-gray-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="text-gray-700">Sunday: Closed</p>
          </div>
        </div>

        <div className="flex-1">
          <div className="contact-form">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
