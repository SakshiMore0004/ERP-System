//CreateArea.js

import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [validate, setValidate] = useState("");

  const [newProduct, setNewProduct] = useState({
    productName: "",
    category: "",
    price: "",
    stock: "",
  });

  function handleValidate(){
    if(newProduct.productName && newProduct.category && newProduct.price && newProduct.stock){
      setValidate("")
      return true;
    }
    else{
      let errorFields = [];
      for(const [key, value] of Object.entries(newProduct)){
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

    setNewProduct((prevProduct) => {
      return {
        ...prevProduct,
        [name]: value,
      };
    });
  }


  function submitProduct(event) {
    event.preventDefault();

    if(!handleValidate()) return;

    props.onAdd(newProduct);
    setNewProduct({
      productName: "",
      category: "",
      price: "",
      stock: "",
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
              name="productName"
              value={newProduct.productName}
              onChange={handleChange}
              placeholder="Product Name"
            />
            <input
            className="input-field"
            
              name="category"
              onChange={handleChange}
              value={newProduct.category}
              placeholder="Catagory"
            />
            <input
            className="input-field"
              name="price"
              onChange={handleChange}
              value={newProduct.price}
              placeholder="Price"
            />
            <input
            className="input-field"

              name="stock"
              onChange={handleChange}
              value={newProduct.stock}
              placeholder="Stock"
            />
          </div>
        )}

        <textarea
          onClick={expand}
          placeholder={!isExpanded ? "Add a new product..." : null}
          rows={isExpanded ? 1 : 1}
        />
        {validate && <div className="error-msg">{`Please enter: ${validate}`}</div>}
        <button type="submit" onClick={submitProduct}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
