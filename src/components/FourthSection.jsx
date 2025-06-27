// FourthSection.jsx
import React from 'react';
import './fourthSection.css';
import NewProductsArray from './NewProductsArray';

const FourthSection = () => {
  return (
    <div className="fourth-section">
      <div className="fourth-section-title">
        <h1>New Collection</h1>
      </div>

      <NewProductsArray />

      <div className="show-more-button">
        <button>Show More</button>
      </div>
    </div>
  );
};

export default FourthSection;
