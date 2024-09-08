// src/pages/PayrollManagement.jsx
import React from 'react';
import { FaMoneyBillWave } from 'react-icons/fa';
import payrollManagementIllustration from '../images/payroll.png';

const PayrollManagement = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={payrollManagementIllustration} alt="Payroll Management" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaMoneyBillWave className="text-blue-500 mr-2" />
            Payroll Management
          </h2>
          <p className="text-gray-600 mb-6">
            Our Payroll Management services ensure your employees are paid accurately and on time, every time. We handle all aspects of payroll processing, including tax calculations, direct deposits, and compliance with government regulations.
          </p>
          <h3 className="text-xl text-gray-800 mb-4">Our Payroll Management Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Payroll Processing and Distribution</li>
            <li>Tax Withholding and Reporting</li>
            <li>Employee Benefits Administration</li>
            <li>Compliance with Labor Laws</li>
            <li>Year-End Tax Forms Preparation</li>
          </ul>
          <p className="text-gray-600">
            Let us take care of your payroll so you can focus on growing your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PayrollManagement;
