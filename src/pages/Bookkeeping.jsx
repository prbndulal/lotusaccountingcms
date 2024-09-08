// src/pages/Bookkeeping.jsx
import React from 'react';
import { FaBook } from 'react-icons/fa';
import bookkeepingIllustration from '../images/bookkeeping.png'; // Add a relevant illustration here

const Bookkeeping = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={bookkeepingIllustration} alt="Bookkeeping" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaBook className="text-blue-500 mr-2" />
            Bookkeeping
          </h2>
          <p className="text-gray-600 mb-6">
            At Lotus Accounting, we offer meticulous bookkeeping services to ensure that your financial records are accurate and up-to-date. Our team handles everything from transaction recording to financial reporting, allowing you to focus on growing your business with confidence.
          </p>
          <h3 className="text-xl text-gray-800 mb-4">Our Bookkeeping Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Daily Transaction Recording</li>
            <li>Bank Reconciliation</li>
            <li>Accounts Payable and Receivable Management</li>
            <li>Financial Statement Preparation</li>
            <li>Monthly and Year-End Closing</li>
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
