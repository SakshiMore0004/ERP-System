// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import DashboardPage from './pages/DashboardPage';
import ProductsManagement from './ProductComponents/ProductsManagement.js';
import OrdersManagement from './OrderComponent/OrderManagement.js'; // Import the OrdersManagement component
import './App.css';

const App = () => {
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  const updateProductCount = (count) => {
    setProductCount(count);
  };

  const updateOrderCount = (count) => {
    setOrderCount(count);
  };

  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Header />
          <Sidebar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<DashboardPage productCount={productCount} orderCount={orderCount} />} />
            <Route path="/products" element={<ProductsManagement updateProductCount={updateProductCount} />} />
            <Route path="/orders" element={<OrdersManagement updateOrderCount={updateOrderCount} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
