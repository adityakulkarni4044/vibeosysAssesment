import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import CreateProduct from './components/CreateProduct';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/CreateProduct" element={<CreateProduct />} />
        <Route path="/ProductDetails/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
