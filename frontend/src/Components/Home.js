import React, { useEffect, useState } from 'react'
import Layout from '../Layout/Layout'
import { Link } from 'react-router-dom'
import slide_1 from '../images/slide-1.jpeg'
import slide_2 from '../images/slide-2.png'
import slide_3 from '../images/slide-3.jpg'
import { useAuth } from '../Context/auth'
import axios from 'axios'
import {toast } from 'react-toastify'
const Home = () => {
  const [auth] = useAuth()
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCarousel, setShowCarousel] = useState(true);
  const [category,setCategory] = useState('');
  useEffect(() => {

  }, [auth])
  const [products, setProducts] = useState([]);
  const homeData = async () => {
    try {
      
      const { data } = await axios.get('http://localhost:5000/all-products')

      console.log(data.allProducts)
      setProducts(data.allProducts)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    homeData()
  }, [])

  const fetchProductsByCategory = async (category) => {
    try {
      const { data } = await axios.get(`http://localhost:5000/category/${category}`);
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  // ... other code ...

  // Call the fetchProductsByCategory function with the selected category
  const handleCategoryClick = (category) => {
    fetchProductsByCategory(category);
  };

  const handlecart = async()=>{
    const promise = new Promise((resolve) => {
      toast.success('Item added successfully!', {
        position: 'top-center',
        autoClose: 3000, // Close the notification after 3 seconds
        onClose: () => resolve(),
      });
    });

    // Wait for the toast notification to be closed
    await promise;

  }
  return (
    <Layout>

      <div className='container mt-3'>
       
        <div className='row'>
          <div className='col-sm-12 header-nav'>
            <Link className='secondary-nav' to='/best'>Best Selling Products</Link>
            <Link className='secondary-nav' to='/best'>New Arrivals</Link>
            <Link className='secondary-nav' to='/best'>Products</Link>
            <Link className='secondary-nav' to='/best'>Sale</Link>
            <Link className='secondary-nav' to='/category' onClick={() => 
               {setShowCarousel(false)
               handleCategoryClick('1')
               setCategory('Only For Mens')}}>
             GROOM
           </Link>
            <Link className='secondary-nav' to='/category' onClick={() =>
              {setShowCarousel(false) 
              handleCategoryClick('2')
              setCategory('Only For Womens')}}>
              BRIDE
           </Link>
            <Link className='secondary-nav' to='/category' onClick={() => 
               {setShowCarousel(false)
               handleCategoryClick('3')
               setCategory('Only For kids')}}>
               kids
           </Link>

           
            <Link className='secondary-nav' to='/best'>Recently </Link>
            <Link className='secondary-nav' to='/best'>Ads</Link>
          </div>
        </div>
      </div>

      {/* //carasoule */}
      {showCarousel && (<div id="carouselExample" className="carousel slide mt-3">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide_1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide_2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slide_3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>)}

      <div className=' mt-5 container'>
         {category && (<h3 className='mt-3 mb-4 testing'>{category}</h3>)}
        <div className='row'>
          { products
            .filter(
              (product) =>
                selectedCategory === '' || product.category === selectedCategory
            )
            .map((product) => {
            return (
              
                
                   <div className="card col-sm-4 mx-3 mb-5" style={{ width: '18rem' }}>
                
                <img src={`http://localhost:5000/product-photo/${product._id}`} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h6 className="card-title">{product.title}</h6>
                  <h6 className="card-title text-bg-danger p-2">Rs.{product.price}</h6>
                  <p className="card-text">{product.desc}</p>
                  <div>
                  <Link  className="btn btn-primary mx-2" onClick={handlecart}>Add to Cart</Link>
                  <Link  className="btn btn-success mx-2" to={`/all-product/${product.slug}`}>Check it</Link>
                  </div>
                </div>
              </div>
               
           
            )

          })}
        </div>
      </div>
    </Layout>
  )
}

export default Home