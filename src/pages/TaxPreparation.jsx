// src/pages/TaxPreparation.jsx
import React from 'react';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import taxIllustration from '../images/taxillustration.png'; // Add a relevant illustration here

const TaxPreparation = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={taxIllustration} alt="Tax Preparation" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaFileInvoiceDollar className="text-blue-500 mr-2" />
            Tax Preparation
          </h2>
          <p className="text-gray-600 mb-6">
            At Lotus Accounting, we provide expert tax preparation services that ensure compliance with the latest tax regulations and maximize your returns. Our team of certified professionals takes the stress out of tax season, handling everything from individual tax returns to complex corporate filings.
          </p>
          <h3 className="text-xl text-gray-800 mb-4">Our Tax Preparation Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Personal and Business Tax Returns</li>
            <li>Strategic Tax Planning</li>
            <li>Audit Support and Representation</li>
            <li>Tax Compliance and Consulting</li>
            <li>Year-Round Tax Assistance</li>
          </ul>
          <p className="text-gray-600">
            We stay updated with the latest tax laws to provide you with accurate, efficient, and beneficial tax services. Trust us to navigate the complexities of tax preparation and help you achieve your financial goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxPreparation;
