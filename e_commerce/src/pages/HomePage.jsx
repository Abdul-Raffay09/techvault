import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './HomePage.css';

function HomePage({ products, onAddToCart }) {
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">TechVault</span>
          </h1>
          <p className="hero-subtitle">
            Discover premium tech products at unbeatable prices
          </p>
          <button className="hero-cta" onClick={() => navigate('/products')}>
            Shop Now →
          </button>
        </div>
        <div className="hero-decoration">
          <div className="floating-card">⚡</div>
          <div className="floating-card">💻</div>
          <div className="floating-card">🎧</div>
        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <span className="feature-icon">🚚</span>
          <h3>Free Shipping</h3>
          <p>On orders over $100</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">✓</span>
          <h3>Quality Guarantee</h3>
          <p>100% authentic products</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🔒</span>
          <h3>Secure Payment</h3>
          <p>Safe & encrypted</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">⏰</span>
          <h3>24/7 Support</h3>
          <p>Always here to help</p>
        </div>
      </section>

      <section className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={(p) => navigate(`/products/${p.id}`)}
            />
          ))}
        </div>
        <div className="view-all-container">
          <button className="btn-view-all" onClick={() => navigate('/products')}>
            View All Products →
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
