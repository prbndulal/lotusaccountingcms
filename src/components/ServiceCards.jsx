import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileInvoiceDollar, FaBriefcase, FaCalculator, FaMoneyBillWave, FaFileInvoice, FaChartLine, FaBookOpen, FaBuilding, FaPiggyBank } from 'react-icons/fa';
import taxImg from '../images/taxillustration.png';
import accountingImg from '../images/accounting.png';
import bookkeepingImg from '../images/bookkeeping.png';
import payrollImg from '../images/payroll.png';
import investmentImg from '../images/investment.png';
import businessImg from '../images/business.png';

function ServiceCards() {
  const services = [
    {
      title: 'Tax Preparation',
      description: 'Professional tax preparation services ensuring compliance and maximum returns.',
      icon: <FaFileInvoiceDollar />,
      image: taxImg,
      link: '/taxpreparation'
    },
    {
      title: 'Business Advisory',
      description: 'Expert advice to help your business grow and optimize financial strategies.',
      icon: <FaBriefcase />,
      image: businessImg,
      link: '/businessadvisory'
    },
    {
      title: 'Accounting Services',
      description: 'Comprehensive accounting services to keep your finances in check.',
      icon: <FaCalculator />,
      image: accountingImg,
      link: '/accountingservices'
    },
    {
      title: 'Payroll Management',
      description: 'Efficient payroll management ensuring timely and accurate employee payments.',
      icon: <FaMoneyBillWave />,
      image: payrollImg,
      link: '/payrollmanagement'
    },
    {
      title: 'GST Filing',
      description: 'Accurate GST filing services to keep your business compliant with tax regulations.',
      icon: <FaFileInvoice />,
      image: taxImg,
      link: '/gstfiling'
    },
    {
      title: 'Financial Planning',
      description: 'Strategic financial planning services to secure your financial future.',
      icon: <FaChartLine />,
      image: businessImg,
      link: '/financialplanning'
    },
    {
      title: 'Bookkeeping',
      description: 'Ensure accurate financial records and seamless bookkeeping for your business.',
      icon: <FaBookOpen />,
      image: bookkeepingImg,
      link: '/bookkeeping'
    },
    {
      title: 'Investment Properties',
      description: 'Expert guidance on tax-effective property investment and rental property management.',
      icon: <FaBuilding />,
      image: investmentImg,
      link: '/investmentadvisory'
    },
    {
      title: 'Self Managed Super Fund',
      description: 'Simplify your SMSF accounting, compliance, and annual auditing requirements.',
      icon: <FaPiggyBank />,
      image: investmentImg,
      link: '/smsf'
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl text-center font-bold mb-3">Our Services</h2>
      <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">Comprehensive accounting, taxation, and business solutions tailored to your needs</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="no-underline group">
            <div className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group-hover:-translate-y-1">
              <div className="h-44 overflow-hidden bg-white">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl text-[#C41E3A]">{service.icon}</span>
                  <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                <span className="inline-block mt-4 text-[#C41E3A] font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                  Learn More →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
