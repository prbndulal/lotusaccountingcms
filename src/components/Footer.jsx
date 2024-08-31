// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Lotus Accounting Services</h3>
          <p>© 2024 All Rights Reserved</p>
        </div>
        <div className="footer-middle">
          <ul className="footer-links">
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <a href="https://www.linkedin.com">LinkedIn</a>
          <a href="https://www.twitter.com">Twitter</a>
          <a href="https://www.facebook.com">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
