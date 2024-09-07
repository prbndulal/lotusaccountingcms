// src/components/StatsSection.jsx
import React from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  return (
    <section className="stats-section bg-white-100 py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
        <div className="flex flex-wrap justify-around">
          <div className="stat-item text-center p-4 md:w-1/3">
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={10} duration={2} /> {/* Adjust end and duration as needed */}
            </h3>
            <p className="text-lg font-medium">Years of Experience</p>
          </div>
          <div className="stat-item text-center p-4 md:w-1/3">
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={4000} duration={2} separator="," /> {/* Adjust end and duration as needed */}
            </h3>
            <p className="text-lg font-medium">Clients Served</p>
          </div>
          <div className="stat-item text-center p-4 md:w-1/3">
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={3800} duration={2} /> {/* Adjust end and duration as needed */}
            </h3>
            <p className="text-lg font-medium">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
