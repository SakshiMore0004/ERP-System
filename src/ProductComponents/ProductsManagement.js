// ProductManagement.js

import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import CreateArea from "./CreateArea";

function ProductManagement({updateProductCount}) {
  const [products, setProducts] = useState([]);

  function addNote(newProduct) {
    setProducts((prevProduct) => {
      return [...prevProduct, newProduct];
    });
  }

  function deleteProduct(id) {
    setProducts((prevProduct) => {
      return prevProduct.filter((productItem, index) => {
        return index !== id;
      });
    });
  }

  function editProduct(id, updatedProduct) {
    setProducts((prevProducts) => {
      return prevProducts.map((productItem, index) => {
        if (index === id) {
          return updatedProduct;
        }
        return productItem;
      });
    });
  }
  

  useEffect(() => {
    // Update product count whenever products change
    updateProductCount(products.length);
  }, [products, updateProductCount]);


  return (
    <div>
    <h2 className="heading">Product Management</h2>
      <CreateArea onAdd={addNote} />
      {products.map((productItem, index) => {
        return (
          <ProductList
            key={index}
            id={index}
            productName={productItem.productName}
            category={productItem.category}
            price={productItem.price}
            stock={productItem.stock}
            onEdit={editProduct}
            onDelete={deleteProduct}
          />
        );
      })}
    </div>
  );
}

export default ProductManagement;
