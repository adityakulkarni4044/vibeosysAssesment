import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './ProductDetails.css'; // Importing the CSS file

const ProductDetails = () => {
  const { productId } = useParams();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === Number(productId))
  );

  if (!product) {
    return <div className="not-found">Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <h1 className="product-name">{product.name}</h1>
      <h2>Materials</h2>
      <ul className="materials-list">
        {product.materials.map((material) => (
          <li key={material.id} className="material-item">
            {material.name} - {material.quantity} x {material.price} 
            (Total: {material.quantity * material.price})
          </li>
        ))}
      </ul>
      <h3 className="total-cost">Total Cost: {product.totalCost}</h3>
    </div>
  );
};

export default ProductDetails;
