// pages/DashboardPage.js
import React from 'react';

const DashboardPage = ({ productCount, orderCount }) => {

  return (
    <dl className="dictionary">
        <div className="term">
          <dt>
            <span className="count">
              {productCount}
            </span>
            <span>Total Products</span>
          </dt>
        </div>
        <div className="term">
          <dt>
            <span className="count">
            {orderCount}
            </span>
            <span>Total Orders</span>
          </dt>
        </div>
    </dl>
    
  );
};

export default DashboardPage;
