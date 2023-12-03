import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import axios from 'axios';
import {toast} from 'react-toastify'

const SingleProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState(null);
  const handlebuy = async()=>{
    const promise = new Promise((resolve) => {
        toast.success('Item are in processing Soon item will be at your door!', {
          position: 'top-center',
          autoClose: 3000, // Close the notification after 3 seconds
          onClose: () => resolve(),
        });
      });
  
      // Wait for the toast notification to be closed
      await promise;
  
  }
  const singleProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/all-product/${params.slug}`);
      setProduct(data.singleProduct);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    singleProduct();
  }, []);

  if (!product) {
    return null;
  }

  const imgSrc = `http://localhost:5000/product-photo/${product._id}`;

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <img src={imgSrc} className="image-zoom" height="400px" width="400px" alt={product.name} />
          </div>
          <div className="col-sm-4">
            <h3 className="testing">{product.title}</h3>
            <p>{product.desc}</p>
            <p className="text-bg-danger p-2">Price: {product.price}</p>
            <button className="btn btn-success" onClick={handlebuy}>Buy Now</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleProduct;
