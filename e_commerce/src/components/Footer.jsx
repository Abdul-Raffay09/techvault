import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="modern-footer">
      <div className="footer-container">
        <div className="footer-section">
          <div className="footer-brand">
            <span className="footer-logo">⚡ TechVault</span>
            <p className="footer-tagline">Your premium tech marketplace</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="/products?category=Laptops">Laptops</a></li>
            <li><a href="/products?category=Smartphones">Smartphones</a></li>
            <li><a href="/products?category=Audio">Audio</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/shipping">Shipping Info</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TechVault. All rights reserved. Built with ❤️</p>
      </div>
    </footer>
  );
}

export default Footer;
