import React from 'react';
import './fourthSection.css';

const NewProductsCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.mainImage}
          alt={product.title}
          className="product-image"
        />
        <img
          src={product.hoverImage}
          alt={`${product.title} hover`}
          className="hover-image"
        />
        <div className="hover-overlay">
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="product-info">
        <p className="product-title">{product.title}</p>
        <p className="product-price">{product.price} €</p>
      </div>
    </div>
  );
};

export default NewProductsCard;
