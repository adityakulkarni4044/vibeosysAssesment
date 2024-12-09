import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../redux/slices/productSlice';
import { addMaterial } from '../redux/slices/materialSlice';
import './CreateProduct.css';

const CreateProduct = () => {
  const [productName, setProductName] = useState('');
  const [materialName, setMaterialName] = useState('');
  const [materialQuantity, setMaterialQuantity] = useState(0);
  const [materialPrice, setMaterialPrice] = useState(0);
  const [materials, setMaterials] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  console.log("products : ",products);
  const handleAddMaterial = () => {
    const material = {
      id: Date.now(),
      name: materialName,
      quantity: materialQuantity,
      price: materialPrice,
    };
    setMaterials([...materials, material]);
    dispatch(addMaterial(material));
  };

  const handleCreateProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: productName,
      materials: materials,
    };
    dispatch(addProduct(newProduct));
  };

  return (
    <div className="create-product-container">
      <h1>Create Product</h1>
      <div className="product-input-group">
        <input
          type="text"
          placeholder="Product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>

      <h2>Add Materials</h2>
      <div className="material-input-group">
        <input
          type="text"
          placeholder="Material Name"
          value={materialName}
          onChange={(e) => setMaterialName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={materialQuantity}
          onChange={(e) => setMaterialQuantity(Number(e.target.value))}
        />
        <input
          type="number"
          placeholder="Price"
          value={materialPrice}
          onChange={(e) => setMaterialPrice(Number(e.target.value))}
        />
        <button className="add-material-btn" onClick={handleAddMaterial}>
          Add Material
        </button>
      </div>

      <h3>Materials Added:</h3>
      <ul className="materials-list">
        {materials.map((material) => (
          <li key={material.id}>
            {material.name} - {material.quantity} x {material.price}
          </li>
        ))}
      </ul>

      <button className="create-product-btn" onClick={handleCreateProduct}>
        Create Product
      </button>
    </div>
  );
};

export default CreateProduct;
