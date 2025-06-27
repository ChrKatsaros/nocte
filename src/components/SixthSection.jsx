// SixthSection.jsx
import React from 'react';
import './SixthSection.css';
import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';

const SixthSection = () => {
  return (
    <div className="sixth-section">
      <h2 className="sixth-title">
        Signup and Save <span className="save">10%</span> on your next order.
      </h2>

      <form className="subscribe-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="email-input"
          required
        />
        <button type="submit" className="subscribe-button">
          Subscribe
        </button>
      </form>

      <div className="social-icons">
        <FaInstagram />
        <FaFacebookF />
        <FaEnvelope />
        <FaPhoneAlt />
      </div>
    </div>
  );
};

export default SixthSection;
