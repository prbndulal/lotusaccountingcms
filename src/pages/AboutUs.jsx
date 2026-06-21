import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/AboutUs.css';
import aboutUsImage from '../aboutus.png';
import offerImage from '../offer.png';

const AboutUs = () => {
  return ( 
    <>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:flex md:items-center">
          <div className="md:w-1/2 md-80">
            <img src={aboutUsImage} alt="About Us" className="w-full h-auto object-cover" />
          </div>
          <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
            <h2 className="text-3xl text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-6">
              Lotus Accounting Services, a Public Practice firm founded in the early 21st century, has
              experienced continuous growth for over a decade. Our primary focus is on delivering
              exceptional accounting, taxation, and business solutions to our valued clients. Our reputation
              has been built on the foundation of ethical accounting and business consulting, all offered at
              competitive rates.
            </p>
            <p className="text-gray-500 text-sm italic mb-6">
              Liability limited by a scheme approved under Professional Standards Legislation.
            </p>
            <Link
              to="/aboutus"
              className="inline-block bg-[#C41E3A] text-white font-semibold py-3 px-6 rounded hover:bg-[#9B1B30] transition-colors duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:flex md:items-center">
          <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
            <h2 className="text-3xl text-gray-800 mb-4">Why Choose Lotus Accounting?</h2>
            <p className="text-gray-600 mb-4">
              At Lotus Accounting Services, our aim is to secure your financial and tax affairs to allow you
              to run your business operations with peace of mind.
            </p>
            <ul className="list-none space-y-4 text-gray-600 mb-6">
              <li className="flex items-start">
                <span className="text-[#C41E3A] font-bold mr-2">●</span>
                <span>Our belief: a good tax agent is much more important than a good price!</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C41E3A] font-bold mr-2">●</span>
                <span>Our services are competitively priced, offering year-round, high quality taxation and accounting support for individuals and businesses. You will receive a comprehensive upfront and transparent quote with no hidden charges.</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C41E3A] font-bold mr-2">●</span>
                <span>Flexible pricing</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 md-80">
            <img src={offerImage} alt="Why Choose Us" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
