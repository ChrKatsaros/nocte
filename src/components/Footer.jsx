import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';
import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="footer-section">
          <h4>Info</h4>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>FAQs</li>
            <li>Shipping</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Store</h4>
          <ul>
            <li>Shop All</li>
            <li>Collections</li>
            <li>New Arrivals</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Socials</h4>
          <div className="footer-social-icons">
            <FaInstagram />
            <FaFacebookF />
            <FaEnvelope />
            <FaPhoneAlt />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Nocté. All rights reserved. Made By
          C.Katsaros
        </p>
      </div>
    </footer>
  );
};

export default Footer;
