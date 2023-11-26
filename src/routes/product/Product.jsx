import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import { instance } from "../../api";
const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await instance(`/products/${id}`);
        setProduct(reponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(product);
  return (
    <div className="product">
      <h1>product</h1>
      {product && (
        <div className="product-card">
          <img className="img" src={product.images} alt="" />
          <h2 className="title">{product.title}</h2>

          <p className="price">{product.price}$</p>
        </div>
      )}
    </div>
  );
};

export default Product;
