// src/pages/PayrollManagement.jsx
import React from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';
import payrollManagementIllustration from '../images/payroll.png';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook

const PayrollManagement = () => {
    // Import the useNavigate hook
   
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
          <img src={payrollManagementIllustration} alt="Payroll Management" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaMoneyBillWave className="text-[#C41E3A] mr-2" />
            Payroll Management
          </h2>
          <p className="text-gray-600 mb-6">
            Lotus Accounting Services is pleased to take the pressure of payroll processing off your
            back ensuring your business is more efficient and productive. Over the years we have
            developed payroll procedures to provide your business with an excellent payroll service that
            includes:
          </p>
          <h3 className="text-xl text-gray-800 mb-4">Our Payroll Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Paying all staff whether full time, part time, casual or contractors</li>
            <li>Calculating PAYG withholding</li>
            <li>Calculating Superannuation entitlements</li>
            <li>Calculating leave entitlements</li>
            <li>Reporting and paying superannuation by due dates</li>
            <li>Advice on employee's minimum wage rate as per award agreements</li>
            <li>Advice on fair work matters</li>
            <li>Providing you with extensive payroll reports to help you better manage your finances</li>
            <li>Minimising your risk of being employer obligations audits or receiving an enquiry from Fair Work</li>
            <li>Providing your staff with up-to-date payment slips issuing end of year payment summaries</li>
          </ul>
          <p className="text-gray-600">
            Let us take the pressure of payroll processing off your back so you can focus on growing your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PayrollManagement;
