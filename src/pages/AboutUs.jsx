import React from 'react';
import '../../src/AboutUs.css';
import aboutUsImage from '../aboutus.png'; // Adjust the path according to your project structure
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
              At Lotus Accounting, our mission is to empower businesses and individuals with reliable, 
              precise financial solutions. With a team of seasoned professionals, we bring a wealth of 
              experience and dedication to every client we serve. Our commitment to excellence is reflected 
              in our personalized approach, ensuring that each client's unique financial goals are not just 
              met, but exceeded.
            </p>
            <p className="text-gray-600 mb-6">
              We understand the complexities of the financial landscape and are here to simplify them for you. 
              Whether you're a small business owner, an entrepreneur, or an individual seeking expert financial 
              advice, Lotus Accounting is your trusted partner. We are more than just accountants; we are 
              strategists, advisors, and most importantly, your allies in achieving financial success.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:flex md:items-center">
          <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
            <h2 className="text-3xl text-gray-800 mb-4">Why Choose Lotus Accounting?</h2>
            <p className="text-gray-600 mb-6">
              ● Comprehensive Services: We offer a full spectrum of accounting, taxation, and business 
              advisory services, providing you with a one-stop solution for all your financial needs.
            </p>
            <p className="text-gray-600 mb-6">
              ● Dedicated Client Management: Every client is assigned a dedicated manager who ensures 
              your needs are met with precision and timeliness, giving you peace of mind.
            </p>
            <p className="text-gray-600 mb-6">
              ● Flexible Pricing: Our flexible pricing plans allow you to bundle services into a fixed monthly 
              payment, spreading your costs evenly throughout the year, while accessing our broad range of services.
            </p>
            <p className="text-gray-600 mb-6">
              ● Professional Network: We collaborate with a network of trusted professionals, including legal, 
              insurance, finance, and real estate advisors, providing you with comprehensive support beyond 
              accounting.
            </p>
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
