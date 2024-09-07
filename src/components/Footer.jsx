import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#3476d2] text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <Link to="/">
            <h1 className="text-2xl">Lotus Accounting Services</h1>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex space-x-6">
            <a href="/aboutus" className="hover:underline">About Us</a>
            <a href="/services" className="hover:underline">Services</a>
            <a href="/contactus" className="hover:underline">Contact Us</a>
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="/#"  rel="noopener noreferrer">
            <FaLinkedin className="text-xl hover:text-gray-300" />
          </a>
          <a href="/#"   rel="noopener noreferrer">
            <FaTwitter className="text-xl hover:text-gray-300" />
          </a>
          <a href="/#"  rel="noopener noreferrer">
            <FaFacebook className="text-xl hover:text-gray-300" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-sm">
          © 2024 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
