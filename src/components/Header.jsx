import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';
import logo from '../logo.png';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => {
      const newState = !prevState;
      if (newState) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
      }
      return newState;
    });
  };

  return (
    <header className="sticky top-0 z-[999]">
      <div className="top-bar">
        <div className="contact-info">
          <span className="flex items-center text-white text-sm gap-4 flex-wrap">
            <span className="flex items-center">
              <PhoneIcon className="w-4 h-4 mr-1" />
              <a href="tel:0412305150" className="hover:underline text-white">
                0412 305 150
              </a>
            </span>
            <span className="text-white/40 hidden sm:inline">|</span>
            <a href="tel:0430215596" className="hover:underline text-white hidden sm:inline">
              0430 215 596
            </a>
            <span className="text-white/40 hidden md:inline">|</span>
            <span className="items-center hidden md:flex">
              <EnvelopeIcon className="w-4 h-4 mr-1" />
              <a href="mailto:info@lotusaccounting.com.au" className="hover:underline text-white">
                info@lotusaccounting.com.au
              </a>
            </span>
          </span>
        </div>
        <div className="top-bar-right">
          <div className="social-icons-top flex items-center gap-3 mr-4">
            <a href="/#" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <FaFacebook className="w-4 h-4" />
            </a>
            <a href="/#" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
          <div
            ref={hamburgerRef}
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="main-header">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Lotus Accounting"
              className="w-24 md:w-32 lg:w-40 xl:w-48"
            />
          </Link>
        </div>

        <nav className="navbar">
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/aboutus" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/contactus" onClick={toggleMenu}>Contact</Link></li>
            <li className="nav-cta">
              <Link to="/contactus" onClick={toggleMenu} className="book-btn">
                Book Appointment
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
