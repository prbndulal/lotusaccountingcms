// src/components/ServiceCards.jsx
import React from 'react';

function ServiceCards() {
  const services = [
    {
      title: 'Tax Preparation',
      description: 'Professional tax preparation services ensuring compliance and maximum returns.',
      icon: '📊', // You can replace this with an appropriate icon
    },
    {
      title: 'Business Advisory',
      description: 'Expert advice to help your business grow and optimize financial strategies.',
      icon: '💼',
    },
    {
      title: 'Accounting Services',
      description: 'Comprehensive accounting services to keep your finances in check.',
      icon: '📚',
    },
    {
      title: 'Payroll Management',
      description: 'Efficient payroll management ensuring timely and accurate employee payments.',
      icon: '💵',
    },
    {
      title: 'GST Filing',
      description: 'Accurate GST filing services to keep your business compliant with tax regulations.',
      icon: '🧾',
    },
    {
      title: 'Financial Planning',
      description: 'Strategic financial planning services to secure your financial future.',
      icon: '📈',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg">
            <div className="text-5xl mb-4 text-center">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
