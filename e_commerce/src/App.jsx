import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AddProductPage from './pages/AddProductPage';
import NotFoundPage from './pages/NotFoundPage';
import { products as initialProducts } from './data/products';
import './App.css';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  const addProduct = (product) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { id: Date.now(), ...product },
    ]);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <div className="app">
        <Navbar 
          cartCount={cart.length} 
          currentUser={currentUser}
          onLogout={handleLogout}
        />
        
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage products={products} onAddToCart={addToCart} />} 
            />
            <Route 
              path="/products" 
              element={<ProductsPage products={products} onAddToCart={addToCart} />} 
            />
            <Route 
              path="/products/:id" 
              element={<ProductDetailsPage products={products} onAddToCart={addToCart} />} 
            />
            <Route 
              path="/cart" 
              element={<CartPage cart={cart} onRemoveFromCart={removeFromCart} onClearCart={clearCart} />} 
            />
            <Route 
              path="/checkout" 
              element={<CheckoutPage cart={cart} onClearCart={clearCart} />} 
            />
            <Route 
              path="/admin" 
              element={<AddProductPage onAddProduct={addProduct} />} 
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
