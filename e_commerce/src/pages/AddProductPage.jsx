import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProductPage.css';

function AddProductPage({ onAddProduct }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: 'Laptops',
    stock: '',
    rating: 4.5,
    reviews: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({
      ...formData,
      price: parseFloat(formData.price),
      stock: parseInt(formData.stock),
      rating: parseFloat(formData.rating),
      reviews: parseInt(formData.reviews)
    });
    alert('Product added successfully!');
    navigate('/products');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="admin-page">
      <h1 className="admin-title">Add New Product</h1>

      <div className="admin-container">
        <form onSubmit={handleSubmit} className="admin-form">
          <div className="form-section">
            <h2>Product Information</h2>

            <div className="form-group">
              <label>Product Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="MacBook Pro 16"
              />
            </div>

            <div className="form-group">
              <label>Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                placeholder="Powerful laptop with M3 Max chip..."
                rows="4"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Price ($) *</label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  placeholder="1999.99"
                />
              </div>

              <div className="form-group">
                <label>Stock *</label>
                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                  min="0"
                  placeholder="50"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="Laptops">Laptops</option>
                <option value="Smartphones">Smartphones</option>
                <option value="Audio">Audio</option>
                <option value="Tablets">Tablets</option>
                <option value="Wearables">Wearables</option>
                <option value="Accessories">Accessories</option>
                <option value="Monitors">Monitors</option>
              </select>
            </div>

            <div className="form-group">
              <label>Image URL *</label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Rating (0-5)</label>
                <input
                  type="number"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  min="0"
                  max="5"
                  step="0.1"
                  placeholder="4.5"
                />
              </div>

              <div className="form-group">
                <label>Reviews Count</label>
                <input
                  type="number"
                  name="reviews"
                  value={formData.reviews}
                  onChange={handleChange}
                  min="0"
                  placeholder="100"
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-submit">
              Add Product
            </button>
            <button 
              type="button" 
              className="btn-cancel"
              onClick={() => navigate('/products')}
            >
              Cancel
            </button>
          </div>
        </form>

        {formData.image && (
          <div className="product-preview">
            <h2>Preview</h2>
            <div className="preview-card">
              <img src={formData.image} alt="Preview" />
              <h3>{formData.name || 'Product Name'}</h3>
              <p>{formData.description || 'Product description...'}</p>
              <div className="preview-price">${formData.price || '0.00'}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddProductPage;
