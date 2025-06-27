import React from 'react';

const EyewearCard = ({ title, image }) => {
  return (
    <div className="eyewear-card">
      <h3 className="card-title">{title}</h3>
      <div className="image-wrapper">
        <img src={image} alt={title} className="card-image" />
        <a href="#" className="image-overlay">
          DISCOVER
        </a>
      </div>
    </div>
  );
};

export default EyewearCard;
