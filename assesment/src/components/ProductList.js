import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const products = useSelector((state) => state.products.products);
  const navigate = useNavigate();
  console.log("Product list page Opened!");

  const handleCreateProduct = () => {
    navigate('/CreateProduct');
  };

  return (
    <div className="product-list-container">
      <h1>Product List</h1>
      <button className="create-product-btn" onClick={handleCreateProduct}>
        Create Product
      </button>
      
      <div className="product-list">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <h3>{product.name}</h3>
            <p>Total Cost: {product.totalCost}</p>
            <button 
              className="view-details-btn" 
              onClick={() => navigate(`/ProductDetails/${product.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
