// src/pages/InvestmentAdvisory.jsx
import React from 'react';
import { FaHandHoldingUsd } from 'react-icons/fa';
import investmentAdvisoryIllustration from '../images/investment.png';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const InvestmentAdvisory = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const goBack = () => {
        navigate(-1); // Go back to the previous page
        };

  return (
    <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <button
            onClick={goBack}
            className="mb-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"  
        >
            Back
        </button>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={investmentAdvisoryIllustration} alt="Investment Advisory" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaHandHoldingUsd className="text-blue-500 mr-2" />
            Investment Advisory
          </h2>
          <p className="text-gray-600 mb-6">
            Our Investment Advisory services are designed to help you make informed and strategic investment decisions that align with your financial goals. Whether you're looking to grow your wealth, plan for retirement, or manage risk, our expert advisors are here to guide you every step of the way.
          </p>
          <h3 className="text-xl text-gray-800 mb-4">Our Investment Advisory Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Personalized Investment Strategies</li>
            <li>Portfolio Management</li>
            <li>Risk Assessment and Management</li>
            <li>Retirement Planning</li>
            <li>Ongoing Market Analysis and Insights</li>
          </ul>
          <p className="text-gray-600">
            At Lotus Accounting, we believe that smart investing is the key to long-term financial success. Our advisors work closely with you to understand your unique needs and provide tailored solutions that help you achieve your financial objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAdvisory;
