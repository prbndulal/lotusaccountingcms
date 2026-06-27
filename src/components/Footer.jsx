import { FaLinkedin, FaFacebook, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white border-t-2 border-[#C41E3A]">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          <div>
            <h3 className="text-xl font-bold mb-4">Lotus Accounting Services</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              A Public Practice firm delivering exceptional accounting, taxation, and business solutions with ethical standards and competitive rates.
            </p>
            <div className="flex space-x-4">
              <a href="/#" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C41E3A] transition-colors duration-300">
                <FaFacebook className="text-sm" />
              </a>
              <a href="/#" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C41E3A] transition-colors duration-300">
                <FaLinkedin className="text-sm" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/aboutus" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">Services</Link></li>
              <li><Link to="/contactus" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/taxpreparation" className="text-gray-400 hover:text-white transition-colors text-sm">Tax Preparation</Link></li>
              <li><Link to="/accountingservices" className="text-gray-400 hover:text-white transition-colors text-sm">Accounting Services</Link></li>
              <li><Link to="/bookkeeping" className="text-gray-400 hover:text-white transition-colors text-sm">Bookkeeping</Link></li>
              <li><Link to="/payrollmanagement" className="text-gray-400 hover:text-white transition-colors text-sm">Payroll Management</Link></li>
              <li><Link to="/gstfiling" className="text-gray-400 hover:text-white transition-colors text-sm">GST Filing</Link></li>
              <li><Link to="/smsf" className="text-gray-400 hover:text-white transition-colors text-sm">Self Managed Super Fund</Link></li>
              <li><Link to="/investmentadvisory" className="text-gray-400 hover:text-white transition-colors text-sm">Investment Properties</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#C41E3A] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">39 Venture Dr, Griffin QLD 4503</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-[#C41E3A] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  <a href="tel:0412305150" className="hover:text-white transition-colors">0412 305 150</a>
                  <br />
                  <a href="tel:0430215596" className="hover:text-white transition-colors">0430 215 596</a>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-[#C41E3A] mt-1 flex-shrink-0" />
                <a href="mailto:info@lotusaccounting.com.au" className="text-gray-400 hover:text-white transition-colors text-sm">info@lotusaccounting.com.au</a>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="text-[#C41E3A] mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Mon - Fri: 9:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Lotus Accounting Services. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs text-center">
              Liability limited by a scheme approved under Professional Standards Legislation.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/terms-of-service" className="text-gray-500 hover:text-gray-300 text-xs">
                Terms of Service
              </Link>
              <span className="text-gray-600 text-xs">|</span>
              <Link to="/privacy-policy" className="text-gray-500 hover:text-gray-300 text-xs">
                Privacy Policy
              </Link>
              <span className="text-gray-600 text-xs">|</span>
              <a href="https://storyset.com/people" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-300 text-xs">
                Illustrations by Storyset
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
