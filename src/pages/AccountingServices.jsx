// src/pages/AccountingServices.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCalculator } from 'react-icons/fa';
import accountingServicesIllustration from '../images/accounting.png';
import { useNavigate } from 'react-router-dom';

const AccountingServices = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
  return (
    <div className="container mx-auto px-6 py-12">
        <Helmet>
          <title>Accounting Services | Lotus Accounting Services</title>
          <meta name="description" content="General ledger, bank reconciliation, financial statements, payslip processing, and superannuation compliance." />
          <link rel="canonical" href="https://lotusaccounting.com.au/accountingservices" />
        </Helmet>
        <button 
            onClick={goBack}
            className="mb-6 bg-[#C41E3A] text-white py-2 px-4 rounded hover:bg-[#9B1B30] transition-colors duration-300">
            Back
        </button>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={accountingServicesIllustration} alt="Accounting Services" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaCalculator className="text-[#C41E3A] mr-2" />
            Accounting Services
          </h2>
          <p className="text-gray-600 mb-6">
            We offer a full range of accounting services to help your business maintain accurate financial records, comply with regulations, and make informed financial decisions. Our team of experienced accountants is dedicated to delivering personalized solutions that fit your business needs.
          </p>
          <h3 className="text-xl text-gray-800 mb-4">Our Accounting Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>General Ledger Maintenance</li>
            <li>Accounts Payable and Receivable</li>
            <li>Bank Reconciliations</li>
            <li>Financial Statement Preparation</li>
            <li>Budgeting and Forecasting</li>
            <li>Send Payslip to Employee</li>
            <li>Superannuation Paid as per ATO Rule</li>
          </ul>
          <p className="text-gray-600">
            With our accounting services, you can focus on running your business while we take care of the numbers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountingServices;
