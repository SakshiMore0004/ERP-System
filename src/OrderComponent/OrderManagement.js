// OrderManagement.js

import React, { useState, useEffect } from "react";
import OrderList from "./OrderList";
import CreateArea from "./CreateArea";

function OrderManagement({updateOrderCount}) {
  const [orders, setOrders] = useState([]);

  function addNote(newOrder) {
    setOrders((prevOrder) => {
      return [...prevOrder, newOrder];
    });
  }

  function deleteOrder(id) {
    setOrders((prevOrder) => {
      return prevOrder.filter((orderItem, index) => {
        return index !== id;
      });
    });
  }

  function editOrder(id, updatedOrder) {
    setOrders((prevOrders) => {
      return prevOrders.map((orderItem, index) => {
        if (index === id) {
          return updatedOrder;
        }
        return orderItem;
      });
    });
  }
  

  useEffect(() => {
    // Update product count whenever products change
    updateOrderCount(orders.length);
  }, [orders, updateOrderCount]);


  return (
    <div>
    <h2 className="heading">Order Management</h2>
      <CreateArea onAdd={addNote} />
      {orders.map((orderItem, index) => {
        return (
          <OrderList
            key={index}
            id={index}
            orderId={orderItem.orderId}
            custName={orderItem.custName}
            orderDate={orderItem.orderDate}
            status={orderItem.status}
            onEdit={editOrder}
            onDelete={deleteOrder}
          />
        );
      })}
    </div>
  );
}

export default OrderManagement;
