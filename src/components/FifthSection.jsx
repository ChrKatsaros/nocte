// FifthSection.jsx
import React from 'react';
import './fifthSection.css';
import AccessoryImage from '../assets/5SIMG1.webp'; // φρόντισε η εικόνα να υπάρχει

const FifthSection = () => {
  return (
    <div className="fifth-section">
      <img
        src={AccessoryImage}
        alt="Accessories Banner"
        className="fifth-section-image"
      />

      <div className="fifth-section-overlay">
        <p className="fifth-section-subtext">
          contact lenses – cases – cleaning kits – cords – cloths
        </p>
        <h1 className="fifth-section-title">Accessories</h1>
        <div className="fifth-section-divider">──────</div>
        <p className="fifth-section-description">
          Discover essential accessories to complete your eyewear experience.
          Functional, stylish, and crafted for everyday convenience.
        </p>
        <button className="fifth-section-button">Shop Accessories</button>
      </div>
    </div>
  );
};

export default FifthSection;
