//CreateArea.js

import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';


function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [validate, setValidate] = useState("");

  const [newOrder, setNewOrder] = useState({
    orderId: "",
    custName: "",
    orderDate: "",
    status: "",
  });

  function handleValidate(){
    if(newOrder.orderId && newOrder.custName && newOrder.orderDate && newOrder.status){
      setValidate("")
      return true;
    }
    else{
      let errorFields = [];
      for(const [key, value] of Object.entries(newOrder)){
        if(!value){
          errorFields.push(key)
        }
      }
      setValidate(errorFields.join(", "))
      return false;
    }
}

  function handleChange(event) {

    const { name, value } = event.target;

    setNewOrder((prevOrder) => {
      return {
        ...prevOrder,
        [name]: value,
      };
    });
  }


  function submitOrder(event) {
    event.preventDefault();

    if(!handleValidate()) return;

    props.onAdd(newOrder);
    setNewOrder({
      orderId: "",
      custName: "",
      orderDate: "",
      status: "",
    });

  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-order">
        {isExpanded && (
          <div>
            <input
              className="input-field"
              name="orderId"
              value={newOrder.orderId}
              onChange={handleChange}
              placeholder="Order Id"
            />
            <input
              className="input-field"
              name="custName"
              onChange={handleChange}
              value={newOrder.custName}
              placeholder="Customer Name"
            />
            <input style={{width: "35%", border: "1px solid #c5bfbf"}}
              className="input-field"
              type="date"
              name="orderDate"
              onChange={handleChange}
              value={newOrder.orderDate}
              placeholder="Order Date"
            />
            
            <input
              className="input-field"
              name="status"
              onChange={handleChange}
              value={newOrder.status}
              placeholder="Status"
            />
          </div>
        )}

        <textarea
          onClick={expand}
          placeholder={!isExpanded ? "Add a new order..." : null}
          rows={isExpanded ? 1 : 1}
        />
        {validate && <div className="error-msg">{`Please enter: ${validate}`}</div>}
        <button type="submit" onClick={submitOrder}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
