import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartCount, currentUser, onLogout }) {
  return (
    <nav className="modern-navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="logo">
            <span className="logo-icon">⚡</span>
            <span className="logo-text">TechVault</span>
          </div>
        </Link>
        
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          {currentUser && currentUser.role === 'admin' && (
            <Link to="/admin" className="nav-link">Admin</Link>
          )}
        </div>
        
        <div className="navbar-actions">
          {currentUser ? (
            <>
              <span className="user-greeting">Hi, {currentUser.name}!</span>
              <button onClick={onLogout} className="btn-logout">Logout</button>
            </>
          ) : (
            <Link to="/login" className="btn-login">Login</Link>
          )}
          <Link to="/cart" className="cart-icon-btn">
            🛒
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
