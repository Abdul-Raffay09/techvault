import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetailsPage.css';

function ProductDetailsPage({ products, onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product not found</h2>
        <button onClick={() => navigate('/products')}>Back to Products</button>
      </div>
    );
  }

  const { name, description, price, image, rating, reviews, stock, category } = product;

  return (
    <div className="product-details-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="product-details-container">
        <div className="product-image-section">
          <img src={image} alt={name} className="main-product-image" />
        </div>

        <div className="product-info-section">
          <span className="product-category-badge">{category}</span>
          <h1 className="product-title">{name}</h1>
          
          <div className="product-rating-section">
            <div className="stars-large">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(rating) ? 'star filled' : 'star'}>
                  ★
                </span>
              ))}
            </div>
            <span className="rating-details">{rating} out of 5 ({reviews} reviews)</span>
          </div>

          <div className="product-price-section">
            <span className="product-price">${price}</span>
            <span className="stock-status">{stock > 0 ? `${stock} in stock` : 'Out of stock'}</span>
          </div>

          <p className="product-full-description">{description}</p>

          <div className="product-features">
            <h3>Key Features:</h3>
            <ul>
              <li>✓ Premium quality guaranteed</li>
              <li>✓ 1-year warranty included</li>
              <li>✓ Free shipping on orders over $100</li>
              <li>✓ 30-day return policy</li>
            </ul>
          </div>

          <div className="product-actions">
            <button 
              className="btn-add-to-cart-large"
              onClick={() => {
                onAddToCart(product);
                alert('Added to cart!');
              }}
              disabled={stock === 0}
            >
              🛒 Add to Cart
            </button>
            <button className="btn-buy-now" disabled={stock === 0}>
              ⚡ Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
