import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function OrderList(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedOrder, setUpdatedOrder] = useState({});

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    if (!isEditing) {
      setIsEditing(true);
      setUpdatedOrder({
        orderId: props.orderId,
        custName: props.custName,
        orderDate: props.orderDate,
        status: props.status,
      });
    } else {
      props.onEdit(props.id, updatedOrder);
      setIsEditing(false);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdatedOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  }

  return (
    <div className="order">
      {isEditing ? (
        <>
          <input name="orderId" value={updatedOrder.orderId} onChange={handleChange} />
          <input name="custName" value={updatedOrder.custName} onChange={handleChange} />
          <input type="date" name="orderDate" value={updatedOrder.orderDate} onChange={handleChange} />
          <input name="status" value={updatedOrder.status} onChange={handleChange} />
        </>
      ) : (
        <>
          <h1>Order Id: {props.orderId}</h1>
          <p>Customer Name: {props.custName}</p>
          <p>Order Date: {props.orderDate}</p>
          <p>Status: {props.status}</p>
        </>
      )}
      <button className="edit-btn" onClick={handleEdit}>
        {isEditing ? "Save" : <EditIcon/>}
      </button>
      <button className="delete-btn" onClick={handleClick}>
        <DeleteIcon/>
      </button>
    </div>
  );
}

export default OrderList;
