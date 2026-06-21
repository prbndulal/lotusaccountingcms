// src/pages/Bookkeeping.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaBookOpen } from 'react-icons/fa';
import bookkeepingIllustration from '../images/bookkeeping.png'; // Add a relevant illustration here
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const Bookkeeping = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const goBack = () => {
        navigate(-1); // Go back to the previous page
    };
  return (
    <div className="container mx-auto px-6 py-12">
        <Helmet>
          <title>Bookkeeping | Lotus Accounting Services</title>
          <meta name="description" content="Professional bookkeeping services — payments, receipts, bank reconciliation, and financial reporting for your business." />
          <link rel="canonical" href="https://lotusaccounting.com.au/bookkeeping" />
        </Helmet>
        <button
            onClick={goBack}
            className="mb-6 bg-[#C41E3A] text-white py-2 px-4 rounded hover:bg-[#9B1B30] transition-colors duration-300">
            Back

        </button>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={bookkeepingIllustration} alt="Bookkeeping" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaBookOpen className="text-[#C41E3A] mr-2" />
            Bookkeeping
          </h2>
          <p className="text-gray-600 mb-6">
            At Lotus Accounting, we offer meticulous bookkeeping services to ensure that your financial records are accurate and up-to-date. Our team handles everything from transaction recording to financial reporting, allowing you to focus on growing your business with confidence.
          </p>
          <h3 className="text-xl text-gray-800 mb-4">Our Bookkeeping Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Management of all payments, expenses and purchases</li>
            <li>Management of all receipts, income and sales</li>
            <li>Recording, reviewing and reconciliation of bank transactions</li>
            <li>Reporting of outstanding creditors and debtors</li>
            <li>Generation financial annual or monthly reports</li>
          </ul>
          <p className="text-gray-600">
            We provide reliable and efficient bookkeeping solutions to help you maintain financial accuracy and transparency. Trust us to handle your bookkeeping needs and give you peace of mind with comprehensive and organized financial records.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bookkeeping;
