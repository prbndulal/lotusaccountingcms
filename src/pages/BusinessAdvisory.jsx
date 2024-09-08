// src/pages/BusinessAdvisory.jsx
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import businessAdvisoryIllustration from '../images/business.png';

const BusinessAdvisory = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={businessAdvisoryIllustration} alt="Business Advisory" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaBriefcase className="text-blue-500 mr-2" />
            Business Advisory
          </h2>
          <p className="text-gray-600 mb-6">
            Our Business Advisory services are designed to provide strategic guidance to help your business grow and thrive. We offer a range of services that focus on optimizing financial strategies, improving operational efficiency, and ensuring long-term sustainability.
          </p>
          <h3 className="text-xl text-gray-800 mb-4">Our Business Advisory Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Financial and Strategic Planning</li>
            <li>Risk Management</li>
            <li>Market and Competitor Analysis</li>
            <li>Business Process Improvement</li>
            <li>Corporate Governance</li>
          </ul>
          <p className="text-gray-600">
            We work closely with you to understand your unique challenges and opportunities, providing actionable insights that drive success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessAdvisory;
