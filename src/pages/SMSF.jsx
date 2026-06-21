import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPiggyBank } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import smsfIllustration from '../images/investment.png';

const SMSF = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <Helmet>
        <title>Self Managed Super Fund | Lotus Accounting Services</title>
        <meta name="description" content="SMSF setup, annual auditing, borrowing structures, and compliance. Take control of your superannuation." />
        <link rel="canonical" href="https://lotusaccounting.com.au/smsf" />
      </Helmet>
      <button
        onClick={goBack}
        className="mb-6 bg-[#C41E3A] text-white py-2 px-4 rounded hover:bg-[#9B1B30] transition-colors duration-300"
      >
        Back
      </button>

      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src={smsfIllustration} alt="Self Managed Super Fund" className="w-full h-auto object-cover mb-6 md:mb-0" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl text-gray-800 font-bold mb-4 flex items-center">
            <FaPiggyBank className="text-[#C41E3A] mr-2" />
            Self Managed Super Fund (SMSF)
          </h2>
          <h3 className="text-xl text-gray-800 font-semibold mb-4">Simplify Your SMSF Accounting & Compliance</h3>
          <p className="text-gray-700 font-semibold mb-3">
            We are a reliable team for SMSF accounting services, and your future is in your hands.
          </p>
          <p className="text-gray-700 font-semibold mb-6">
            Take control of your superannuation with professional SMSF setup, compliance, and
            ongoing management. Maximize your retirement savings with expert guidance.
          </p>
          <p className="text-gray-600 mb-6">
            Under Australian superannuation law, you can choose to contribute your personal
            superannuation contributions (and in some cases direct your employer to pay employer
            contributions) to a superannuation fund of your choice.
          </p>
          <p className="text-gray-600 mb-6">
            A SMSF is a small superannuation trust that has the primary purpose of providing retirement
            benefits, where the members act as trustees. This means you control & run your own
            superfund by investing in what you want, when you want!
          </p>
          <p className="text-gray-600 mb-6">
            At Lotus Accounting Services, we will make the job of setting up and managing your Super
            fund easier at affordable rates. Our packages have been designed to align your
            superannuation strategies with your financial goals and also ensure you comply with your
            legal obligations, tax and regulatory requirements.
          </p>
          <h3 className="text-xl text-gray-800 mb-4">Our Self-Managed Superfund Services Include:</h3>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Establishment of Self-Managed Superfunds</li>
            <li>Annual Auditing</li>
            <li>SMSF borrowing structures</li>
            <li>Annual compliance and Tax returns</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SMSF;
