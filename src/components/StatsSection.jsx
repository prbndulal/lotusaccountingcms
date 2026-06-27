import React from 'react';
import CountUp from 'react-countup';
import { FaClock, FaUsers, FaSmile, FaBriefcase } from 'react-icons/fa';

const StatsSection = () => {
  return (
    <section className="py-16 bg-[#1E1E1E]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <FaClock className="text-4xl text-[#C41E3A] mx-auto mb-4" />
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <CountUp end={7} duration={2} />+
            </h3>
            <p className="text-gray-400 font-medium">Years of Experience</p>
          </div>
          <div className="text-center">
            <FaBriefcase className="text-4xl text-[#C41E3A] mx-auto mb-4" />
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <CountUp end={500} duration={2} />+
            </h3>
            <p className="text-gray-400 font-medium">Business Advisory</p>
          </div>
          <div className="text-center">
            <FaUsers className="text-4xl text-[#C41E3A] mx-auto mb-4" />
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <CountUp end={4000} duration={2} separator="," />+
            </h3>
            <p className="text-gray-400 font-medium">Clients Served</p>
          </div>
          <div className="text-center">
            <FaSmile className="text-4xl text-[#C41E3A] mx-auto mb-4" />
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
              <CountUp end={3800} duration={2} separator="," />+
            </h3>
            <p className="text-gray-400 font-medium">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
