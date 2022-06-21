import React from 'react'
import { useParams} from "react-router-dom";
import { useEffect,useState} from "react";
import axios from "axios";
import axiosInstance from '../axiosconfig/axiosinstance';


export default function productdetails(props) {

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [product,setproduct]  =useState({})
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(()=>{
    axiosInstance
    .get(`/products/${params.id}`)
    .then((res) => {
      console.log(res.data);
       setproduct(res.data);

    })
    .catch((err) => {
      console.log(err);
    });

  },[]);
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const params = useParams();

  return (
    <>
   <div class="row row-cols-1 row-cols-md-3 g-4">
      
        <div class="col" key={product.id}>
        <div className='card h-100 card border-warning mb-3 text-danger'>
          <img src={product.image} className="card-img-top" style={{height:"300px",width:"300px"}} alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
          </div>
        </div>
        </div>
      
  </div>
</>
    )
}
