import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileInvoiceDollar, FaBriefcase, FaBook, FaMoneyBillWave, FaFileAlt, FaChartLine, FaBalanceScale, FaHandHoldingUsd, FaUniversity } from 'react-icons/fa';

function ServiceCards() {
  const services = [
    {
      title: 'Tax Preparation',
      description: 'Professional tax preparation services ensuring compliance and maximum returns.',
      icon: <FaFileInvoiceDollar />,
      link: '/taxpreparation'
    },
    {
      title: 'Business Advisory',
      description: 'Expert advice to help your business grow and optimize financial strategies.',
      icon: <FaBriefcase />,
      link: '/businessadvisory'
    },
    {
      title: 'Accounting Services',
      description: 'Comprehensive accounting services to keep your finances in check.',
      icon: <FaBook />,
      link: '/accountingservices'
    },
    {
      title: 'Payroll Management',
      description: 'Efficient payroll management ensuring timely and accurate employee payments.',
      icon: <FaMoneyBillWave />,
      link: '/payrollmanagement'
    },
    {
      title: 'GST Filing',
      description: 'Accurate GST filing services to keep your business compliant with tax regulations.',
      icon: <FaFileAlt />,
      link: '/gstfiling'
    },
    {
      title: 'Financial Planning',
      description: 'Strategic financial planning services to secure your financial future.',
      icon: <FaChartLine />,
      link: '/financialplanning'
    },
    {
      title: 'Bookkeeping',
      description: 'Ensure accurate financial records and seamless bookkeeping for your business.',
      icon: <FaBalanceScale />,
      link: '/bookkeeping'
    },
    {
      title: 'Investment Properties',
      description: 'Expert guidance on tax-effective property investment and rental property management.',
      icon: <FaHandHoldingUsd />,
      link: '/investmentadvisory'
    },
    {
      title: 'Self Managed Super Fund',
      description: 'Simplify your SMSF accounting, compliance, and annual auditing requirements.',
      icon: <FaUniversity />,
      link: '/smsf'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-center font-bold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="no-underline">
            <div
              className="bg-white shadow-md hover:shadow-xl p-6 rounded-lg border-l-4 border-transparent hover:border-[#C41E3A] transform hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-red-50 flex flex-col items-center"
            >
              <div className="text-6xl text-[#C41E3A] mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
