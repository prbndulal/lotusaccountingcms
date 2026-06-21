// src/pages/FinancialPlanning.jsx
import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import financialPlanningIllustration from '../images/business.png'; // Add a relevant illustration here
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook


const FinancialPlanning = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook
    const goBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
    <div className="container mx-auto px-6 py-12">
        {/* Back Button */}
        <button
            onClick={goBack}
            className="mb-6 bg-[#C41E3A] text-white py-2 px-4 rounded hover:bg-[#9B1B30] transition-colors duration-300" >
            Back
        </button>


      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={financialPlanningIllustration} alt="Financial Planning" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaChartLine className="text-[#C41E3A] mr-2" />
            Financial Planning
          </h2>
          <p className="text-gray-600 mb-6">
            At Lotus Accounting, we provide tailored financial planning services to help you achieve your financial goals and secure your future. Our experts work with you to create comprehensive plans that align with your objectives, whether you're planning for retirement, managing investments, or optimizing your overall financial strategy.
          </p>
          <h3 className="text-xl text-gray-800 mb-4">Our Financial Planning Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Personal Financial Planning</li>
            <li>Retirement Planning</li>
            <li>Investment Strategy and Management</li>
            <li>Debt Management and Reduction</li>
            <li>Estate Planning and Wealth Transfer</li>
          </ul>
          <p className="text-gray-600">
            Our goal is to provide you with a clear path towards financial success, using expert insights and customized strategies. Let us help you navigate complex financial decisions and build a solid foundation for your future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinancialPlanning;
