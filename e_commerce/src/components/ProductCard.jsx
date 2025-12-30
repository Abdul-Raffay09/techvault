import React from 'react';
import './ProductCard.css';

function ProductCard({ product, onAddToCart, onViewDetails }) {
  const { name, description, price, image, rating, reviews, stock, category } = product;

  return (
    <div className="modern-product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        {stock < 10 && <span className="low-stock-badge">Only {stock} left!</span>}
        <span className="category-badge">{category}</span>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(rating) ? 'star filled' : 'star'}>
                ★
              </span>
            ))}
          </div>
          <span className="rating-text">{rating} ({reviews} reviews)</span>
        </div>
        
        <div className="product-footer">
          <div className="price-section">
            <span className="price">${price}</span>
            <span className="stock-info">{stock} in stock</span>
          </div>
          
          <div className="action-buttons">
            <button 
              className="btn-add-cart" 
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
            >
              <span>🛒</span> Add to Cart
            </button>
            <button 
              className="btn-view-details" 
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(product);
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
