import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosconfig/axiosinstance";
import { useSelector } from "react-redux";

export default function product() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const LoaderState = useSelector((state) => state.loader.isLoading);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [products, setproducts] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((res) => {
        console.log(res.data);
        setproducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {LoaderState&& <div class="justify-content-center">
          <div class="spinner-border text-danger" role="status"></div>
        </div>}
        
        {products.map((product) => {
          return (
            <div class="col" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  style={{ height: "300px", width: "300px" }}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <Link to={`/details/${product.id}`}>Details</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
