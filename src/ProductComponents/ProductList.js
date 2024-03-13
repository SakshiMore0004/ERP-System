import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ProductList(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({});

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleEdit() {
    if (!isEditing) {
      setIsEditing(true);
      setUpdatedProduct({
        productName: props.productName,
        category: props.category,
        price: props.price,
        stock: props.stock,
      });
    } else {
      props.onEdit(props.id, updatedProduct);
      setIsEditing(false);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUpdatedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  }

  return (
    <div className="order">
      {isEditing ? (
        <>
          <input name="productName" value={updatedProduct.productName} onChange={handleChange} />
          <input name="category" value={updatedProduct.category} onChange={handleChange} />
          <input name="price" value={updatedProduct.price} onChange={handleChange} />
          <input name="stock" value={updatedProduct.stock} onChange={handleChange} />
        </>
      ) : (
        <>
          <h1>Product Name: {props.productName}</h1>
          <p>Catagory: {props.category}</p>
          <p>Price: {props.price}</p>
          <p>Stock: {props.stock}</p>
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

export default ProductList;
