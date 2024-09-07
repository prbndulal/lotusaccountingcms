import React from 'react';
import { FaFileInvoiceDollar, FaBriefcase, FaBook, FaMoneyBillWave, FaFileAlt, FaChartLine, FaBalanceScale, FaCashRegister, FaHandHoldingUsd } from 'react-icons/fa';

function ServiceCards() {
  const services = [
    {
      title: 'Tax Preparation',
      description: 'Professional tax preparation services ensuring compliance and maximum returns.',
      icon: <FaFileInvoiceDollar />,
    },
    {
      title: 'Business Advisory',
      description: 'Expert advice to help your business grow and optimize financial strategies.',
      icon: <FaBriefcase />,
    },
    {
      title: 'Accounting Services',
      description: 'Comprehensive accounting services to keep your finances in check.',
      icon: <FaBook />,
    },
    {
      title: 'Payroll Management',
      description: 'Efficient payroll management ensuring timely and accurate employee payments.',
      icon: <FaMoneyBillWave />,
    },
    {
      title: 'GST Filing',
      description: 'Accurate GST filing services to keep your business compliant with tax regulations.',
      icon: <FaFileAlt />,
    },
    {
      title: 'Financial Planning',
      description: 'Strategic financial planning services to secure your financial future.',
      icon: <FaChartLine />,
    },
    {
      title: 'Bookkeeping',
      description: 'Ensure accurate financial records and seamless bookkeeping for your business.',
      icon: <FaBalanceScale />,
    },
    {
      title: 'Cash Flow Management',
      description: 'Efficiently manage your business cash flow and stay ahead of financial hurdles.',
      icon: <FaCashRegister />,
    },
    {
      title: 'Investment Advisory',
      description: 'Expert investment advisory to help you make the right financial decisions.',
      icon: <FaHandHoldingUsd />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-center font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-6 rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer hover:bg-blue-50 flex flex-col items-center"
            onClick={() => alert(`${service.title} Clicked!`)}
          >
            <div className="text-6xl text-blue-500 mb-4">
              {service.icon}
            </div>
            <h3 className="text-xl  mb-2 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
