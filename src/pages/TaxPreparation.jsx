import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import taxIllustration from '../images/taxillustration.png'; // Add a relevant illustration here

const TaxPreparation = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>Tax Preparation | Lotus Accounting Services</title>
        <meta name="description" content="Individual, company, trust, and partnership tax returns. Expert tax preparation ensuring compliance and maximum legitimate refund." />
        <link rel="canonical" href="https://lotusaccounting.com.au/taxpreparation" />
      </Helmet>
      <button
        onClick={goBack}
        className="mb-6 bg-[#C41E3A] text-white py-2 px-4 rounded hover:bg-[#9B1B30] transition-colors duration-300"
      >
        Back
      </button>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={taxIllustration} alt="Tax Preparation" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaFileInvoiceDollar className="text-[#C41E3A] mr-2" />
            Tax Preparation
          </h2>
          <p className="text-gray-600 mb-6">
            At Lotus Accounting, we provide expert tax preparation services that ensure compliance with the latest tax regulations and maximum legitimate refund. Our team of certified professionals takes the stress out of tax season, handling everything from individual tax returns to complex corporate filings.
          </p>
          <h3 className="text-xl text-gray-800 mb-4">Our Tax Preparation Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Individual Tax Return</li>
            <li>Sole Trader Tax Return</li>
            <li>Company Tax Return</li>
            <li>Partnership Tax Return</li>
            <li>Trust Tax Return</li>
            <li>Self-Manage Superfund Tax Return</li>
            <li>Payroll Tax</li>
            <li>Instalment Activity</li>
            <li>Capital Gain Tax</li>
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
