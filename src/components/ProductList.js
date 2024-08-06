import React, { useState, useEffect } from "react";
import style from "./productList.module.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <section>
      <h3>Products:</h3>
      <div className={style.buttons}>
        <button onClick={() => setUrl("http://localhost:8000/products")}>
          All
        </button>
        <button
          onClick={() =>
            setUrl("http://localhost:8000/products?availability=available")
          }
        >
          Available
        </button>
        <button
          onClick={() =>
            setUrl("http://localhost:8000/products?_sort=name&_order=asc")
          }
        >
          Sort by Name
        </button>
        <button
          onClick={() =>
            setUrl("http://localhost:8000/products?_sort=price&_order=asc")
          }
        >
          Sort by Price
        </button>
        <button
          onClick={() =>
            setUrl("http://localhost:8000/products?_sort=stock&_order=asc")
          }
        >
          Sort by Stock
        </button>
      </div>
      <table className={style.productTable}>
        <thead>
          <tr>
            <th>Category Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.categoryId}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price} /-</td>
              <td>{product.stock}</td>
              <td>{product.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductList;
