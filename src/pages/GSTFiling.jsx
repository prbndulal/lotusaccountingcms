// src/pages/GSTFiling.jsx
import React from 'react';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import gstIllustration from '../images/taxillustration.png'; // Add a relevant illustration here

const GSTFiling = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={gstIllustration} alt="GST Filing" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaFileInvoiceDollar className="text-blue-500 mr-2" />
            GST Filing
          </h2>
          <p className="text-gray-600 mb-6">
            At Lotus Accounting, we offer comprehensive GST filing services designed to help businesses comply with Goods and Services Tax regulations efficiently. Our skilled team ensures accurate reporting and timely submissions to avoid penalties and streamline your financial processes.
          </p>
          <h3 className="text-xl text-gray-800 mb-4">Our GST Filing Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Preparation and Filing of GST Returns</li>
            <li>GST Registration and Deregistration</li>
            <li>Monthly and Quarterly GST Compliance</li>
            <li>GST Audit Support and Representation</li>
            <li>Consultation on GST Planning and Optimization</li>
          </ul>
          <p className="text-gray-600">
            Our goal is to simplify the GST filing process for you, ensuring accurate and timely submissions while maximizing compliance. Rely on our expertise to handle all your GST-related needs and keep your business on track with current regulations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GSTFiling;
