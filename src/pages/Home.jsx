import Carousel from '../components/Carousel';
import ServiceCards from '../components/ServiceCards';
import AboutUs from './AboutUs';
import MapComponent from '../components/MapComponent';
import StatsSection from '../components/StatsSection';
import { Link } from 'react-router-dom';
import {
  FaRocket, FaUserTie, FaHome, FaConciergeBell, FaHardHat,
  FaHospital, FaGraduationCap, FaChild, FaLaptopCode,
  FaUtensils, FaPlane, FaCut, FaDumbbell, FaTree,
  FaAward, FaShieldAlt, FaHandshake
} from 'react-icons/fa';
import tpbLogo from '../images/taxpractitioner.png';
import ipaLogo from '../images/ipa.png';
import xeroLogo from '../images/xero.png';
import asicLogo from '../images/asic.png';

const industries = [
  { name: 'Startups', icon: <FaRocket /> },
  { name: 'Corporate Executives', icon: <FaUserTie /> },
  { name: 'Real Estate', icon: <FaHome /> },
  { name: 'Hospitality', icon: <FaConciergeBell /> },
  { name: 'Construction', icon: <FaHardHat /> },
  { name: 'Medical Industries', icon: <FaHospital /> },
  { name: 'Education', icon: <FaGraduationCap /> },
  { name: 'Childcare Centres', icon: <FaChild /> },
  { name: 'IT Contractors', icon: <FaLaptopCode /> },
  { name: 'Restaurants & Cafes', icon: <FaUtensils /> },
  { name: 'Travel Agencies', icon: <FaPlane /> },
  { name: 'Beauty Salons', icon: <FaCut /> },
  { name: 'Fitness Services', icon: <FaDumbbell /> },
  { name: 'Landscape & Gardener', icon: <FaTree /> },
];

function Home() {
  return (
    <div>
      <div className='swiper-root'>
        <Carousel />
      </div>

      <section className="py-14 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                <FaAward className="text-3xl text-[#C41E3A]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Experienced</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Over a decade of expertise in accounting, taxation, and business solutions for individuals and businesses.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                <FaShieldAlt className="text-3xl text-[#C41E3A]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Trusted Since 2019</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Trusted by individuals and businesses across Australia with a proven track record of delivering results.</p>
            </div>
            <div className="flex flex-col items-center text-center p-8 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                <FaHandshake className="text-3xl text-[#C41E3A]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Professional Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Dedicated client management with transparent, competitive pricing and no hidden charges.</p>
            </div>
          </div>
        </div>
      </section>

      <AboutUs />
      <ServiceCards />

      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Trusted by Individuals and Businesses in Australia Since 2019
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            We assist our clients with comprehensive business support, providing tailored advice and
            consultations to meet their unique needs. With extensive experience working with both
            individuals and businesses, we ensure that our clients receive personalized guidance and
            strategies that drive growth and success.
          </p>
          <Link
            to="/contactus"
            className="inline-block bg-[#2E7D32] text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-[#1B5E20] transition-colors duration-300 shadow-lg"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-[#F5F5F5] rounded-lg hover:shadow-md hover:bg-red-50 transition-all duration-300 border border-transparent hover:border-[#C41E3A]"
              >
                <div className="text-3xl text-[#C41E3A] mb-3">{industry.icon}</div>
                <span className="text-gray-700 font-medium text-center text-sm">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Our Accreditations & Partners
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            <div className="flex flex-col items-center">
              <img src={tpbLogo} alt="Tax Practitioners Board - Registered Tax Agent 25996964" className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex flex-col items-center">
              <img src={ipaLogo} alt="Institute of Public Accountants" className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex flex-col items-center">
              <img src={xeroLogo} alt="Xero Certified Partner" className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
            <div className="flex flex-col items-center">
              <img src={asicLogo} alt="ASIC Registered Agent" className="h-20 md:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>
        </div>
      </section>

      <MapComponent />
    </div>
  );
}

export default Home;
  