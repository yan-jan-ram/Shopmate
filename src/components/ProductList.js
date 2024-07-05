import React, { useState, useEffect } from "react";
import style from "./productList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h3>Products:</h3>
      <table className={style.productTable}>
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.categoryId}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}{" "}/-</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
