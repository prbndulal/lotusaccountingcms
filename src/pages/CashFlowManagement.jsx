// src/pages/CashFlowManagement.jsx
import React from 'react';
import { FaCashRegister } from 'react-icons/fa';
import cashFlowManagementIllustration from '../images/accounting.png'; // Add a relevant illustration here

const CashFlowManagement = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={cashFlowManagementIllustration} alt="Cash Flow Management" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaCashRegister className="text-blue-500 mr-2" />
            Cash Flow Management
          </h2>
          <p className="text-gray-600 mb-6">
            At Lotus Accounting, we specialize in cash flow management services designed to help your business maintain liquidity and optimize cash flow. Our team provides insights and strategies to ensure you have the cash on hand to meet your operational needs and achieve your financial goals.
          </p>
          <h3 className="text-xl text-gray-800 mb-4">Our Cash Flow Management Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Cash Flow Forecasting</li>
            <li>Budgeting and Financial Planning</li>
            <li>Receivables and Payables Management</li>
            <li>Cash Flow Analysis and Reporting</li>
            <li>Liquidity and Working Capital Optimization</li>
          </ul>
          <p className="text-gray-600">
            Our goal is to help you effectively manage your cash flow, ensuring your business remains financially healthy and well-positioned for growth. Let us provide you with the tools and expertise to maintain optimal cash flow and make informed financial decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CashFlowManagement;
