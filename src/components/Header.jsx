import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../Header.css'; // Import your CSS file for the header
import logo from '../logo.png';
import { PhoneIcon } from '@heroicons/react/24/solid';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => {
      const newState = !prevState;
      if (newState) {
        document.body.classList.add('menu-open');
      } else {
        document.body.classList.remove('menu-open');
        setIsMenuOpen(false);
      }
      return newState;
    });
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        document.body.classList.remove('menu-open');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header>
      <div className="top-bar">
        <div className="contact-info">
          <span className="flex items-center text-white text-lg">
            <PhoneIcon className="w-6 h-6 text-2xl mr-2" />
            <a href="tel:0412305150" className="hover:underline text-white">
              0412 305 150
            </a>
          </span>
        </div>
      </div>
      <div className="main-header">
        <div className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="Lotus Accounting"
              className="w-24 md:w-32 lg:w-40 xl:w-48" // Tailwind responsive width classes
            />
          </Link>
        </div>

        {/* Hamburger / Cross Icon */}
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <nav className="navbar">
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`} ref={menuRef}>
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/aboutus" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
            <li><Link to="/contactus" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
