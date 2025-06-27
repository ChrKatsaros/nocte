import React from 'react';
import headerIMG from '../assets/headerIMG.jpg';
import '../components/header.css';

function Header() {
  return (
    <div className="header-container">
      <img src={headerIMG} className="header-img" alt="Header" />
      <div className="header-content">
        <span className="small-title">NEW COLLECTION SS25</span>
        <h1 className="main-title">Brands You Love</h1>
        <p className="description">
          Discover the latest trends and timeless styles
        </p>
        <button className="shop-button">SHOP NOW</button>
      </div>
    </div>
  );
}

export default Header;
