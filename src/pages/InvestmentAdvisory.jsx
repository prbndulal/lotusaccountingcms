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
            className="mb-6 bg-[#C41E3A] text-white py-2 px-4 rounded hover:bg-[#9B1B30] transition-colors duration-300"  
        >
            Back
        </button>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={investmentAdvisoryIllustration} alt="Investment Properties" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaHandHoldingUsd className="text-[#C41E3A] mr-2" />
            Investment Properties
          </h2>
          <p className="text-gray-600 mb-6">
            Whether you're thinking of buying a rental property, renting out your current property, or
            thinking of selling it, you need to understand your record-keeping and tax obligations.
          </p>
          <p className="text-gray-600 mb-6">
            When you obtain a rental property, it's important to start keeping records straight away.
            To work out your tax correctly, you'll need records of who owns the property (you may
            co-own it with other people), the date and costs of buying it, and the ongoing rental
            income and expenses. This can be a daunting and costly task without expert assistance.
            At Lotus Accounting Services, we offer you the expertise you need to manage and grow
            your property portfolio, we develop tax effective property investment strategies that suits
            your needs and meet your objectives.
          </p>
          <h3 className="text-xl text-gray-800 mb-4">We can assist you with:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Develop the most tax effective property investment strategy</li>
            <li>Establish the correct structure to protect your investment</li>
            <li>Turn your negative gearing into an important growth factor</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAdvisory;
