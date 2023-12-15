import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import axios from 'axios';
import { toast } from 'react-toastify'
import { TiTick } from "react-icons/ti";
import '../css/singlepage.css'
import { Link } from 'react-router-dom'
const SingleProduct = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [cateProducts, setCateProducts] = useState([])
  const [icon, setIcon] = useState('hidden')
  const [count, setCount] = useState(1)
  const [cross, setCross] = useState('no-drop')
  let [totalPrice, setTotalPrice] = useState()


  const handlebuy = async () => {
    const promise = new Promise((resolve) => {
      toast.info('added to cart', {
        position: 'top-center',
        autoClose: 3000, // Close the notification after 3 seconds
        onClose: () => resolve(),
      });
    });

  
    // Wait for the toast notification to be closed
    await promise;

  }

  useEffect(()=>{
    const singleProduct = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/all-product/${params.slug}`);
        setProduct(data.singleProduct);
      } catch (error) {
        console.log(error);
      }
    };
    singleProduct();
  },[params.slug])
  useEffect(() => {
    const prodcutByCategory = async () => {
      if (product) {
        const { data } = await axios.get(`http://localhost:5000/category/${product.category}`)
        console.log(data.products)
        setCateProducts(data.products)
      }
    }
    prodcutByCategory();
  }, [product])

  if (!product) {
    return null;
  }

  const imgSrc = `http://localhost:5000/product-photo/${product._id}`;

  const storingDataLocally = () =>{
    localStorage.setItem('image', imgSrc)
    localStorage.setItem('count', count)
    localStorage.setItem('title',product.title)
    localStorage.setItem('price',product.price)
}

  const handlecolors = (n) => {
    if (n === 1) {
      return setIcon('tick-icon')
    }
    else if (n === 2) {
      return setIcon('tick-red-loc')
    }
    else if (n === 3) {
      return setIcon('tick-pink-loc')
    }
  }

  const increase = () => {
    setCount(count + 1)
    setTotalPrice(prevTotalPrice => prevTotalPrice + product.price);
    setCross('')

  }
  const decrease = () => {
    if (count === 1) {
      setCross('no-drop')
    }
    else {
      setTotalPrice(prevTotalPrice => prevTotalPrice - product.price)
      setCount(count - 1)
    }
  }






  return (
    <Layout>

      <div className="container-fluid bg-image">
        <p className='single-nav'>{product.title}</p>

      </div>

      <div className="container">
        <div className="row">
          <div className="col-2">
            {cateProducts.length > 0 ? (
              cateProducts.map(product => (
              <Link to={`/all-product/${product.slug}`}>
                <img
                  key={product._id}
                  src={`http://localhost:5000/product-photo/${product._id}`}
                  alt={product.title}
                  className="category-image"
                />
              </Link>
              ))
            ) : (
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )}
          </div>

          <div className="col-5">
            <img src={imgSrc} className="image-zoom" height="400px" width="400px" alt={product.name} />
          </div>
          <div className="col-5">
            <h3 className='fw-semibold'>{product.title}</h3>
            <h5 className='mt-2 '>${product.price}</h5>
            <p className='mt-3'>{product.desc}</p>
            <p className='fw-bold mt-2'>Availability : <span className='btn btn-success'></span> 200 in stock</p>
            <p>Colors:</p>
            <div className='d-flex position-relative'>
              <div className="green" onClick={() => handlecolors(1)} ></div>
              <div className="red " onClick={() => handlecolors(2)} ></div>
              <div className="pink " onClick={() => handlecolors(3)}></div>
              <TiTick className={`${icon}`} size={30} />

            </div>
            <h6 className=' mt-4 '>Quantity:</h6>
            <div className='d-flex align-items-center'>

              <div className='border-1 border-black border mx-3 p-2'><span onClick={decrease} className='fw-bold mx-3 cursor'>-</span><span className="cursor">{count}</span><span className='fw-bold mx-3 cursor' onClick={increase}>+</span></div>
              <button className='btn btn-outline-dark p-3 rounded-0' onClick={handlebuy}>Add To Cart</button>
            </div>
            <Link className='btn btn-dark w-100 mt-3 rounded-0' to={`/buy/${product.slug}`} onClick={storingDataLocally}>Buy Now</Link>
          </div>
        </div>
      </div>
      {/* <div className="container mt-5">
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
      </div> */}
    </Layout>
  );
};

export default SingleProduct;
