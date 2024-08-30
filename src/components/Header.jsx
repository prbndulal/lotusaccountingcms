import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Header.css'; // Import your CSS file for the header
import logo from '../logo.png'; 
import { PhoneIcon } from '@heroicons/react/24/solid';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Effect to add/remove 'menu-open' class on body
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => {
      document.body.classList.remove('menu-open');
    };
  }, [isMenuOpen]);

  return (
    <header>
      <div className="top-bar">
        <div className="contact-info">
          <span className="flex items-center text-white text-lg">
            <PhoneIcon className="w-6 h-6 text-2xl mr-2" /> 0412 305 150
          </span>
        </div>
      </div>
      <div className="main-header">
        <div className="logo">
          <img src={logo} alt="Lotus Accounting" />
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className="navbar">
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/aboutus" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/contactus" onClick={toggleMenu}>Contact</Link></li>
          </ul>
          {/* <button className="consultation-button">Book a Consultation</button> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
