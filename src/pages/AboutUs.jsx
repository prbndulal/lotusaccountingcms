// src/components/AboutUs.jsx
import React from 'react';
import '../../src/AboutUs.css';
import aboutUsImage from '../about.png'; // Adjust the path according to your project structure

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 md:flex md:items-center">
        <div className="md:w-1/2 md-80">
          <img src={aboutUsImage} alt="About Us" className="w-full h-auto object-cover" />
        </div>
        <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
          <h2 className="text-3xl  text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 mb-6">
            At Lotus Accounting, we are committed to providing top-notch financial services to our clients.
            Our team of experts works tirelessly to ensure that your financial needs are met with precision
            and care. We pride ourselves on our attention to detail and our ability to customize our services
            to fit the unique needs of each client.
          </p>
          <a href="/aboutus" className="inline-block bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;