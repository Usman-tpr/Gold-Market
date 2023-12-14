import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import { Link } from 'react-router-dom'
import icon1 from '../../images/icons1.png'
import icon2 from '../../images/icons2.png'
import icon3 from '../../images/icons3.png'
import icon4 from '../../images/icons4.png'
import flat1 from '../../images/flat-img1 (1).jpg'
import flat2 from '../../images/flat-img2.jpg'
import flat3 from '../../images/flat-img3.jpg'
import { useAuth } from '../../Context/auth'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import axios from 'axios'
import { toast } from 'react-toastify'
import Carasoule from '../../Components/Carasoule'
import '../../css/Home.css'
const Home = () => {
  const [className, setClassName] = useState('hide');
  const [auth] = useAuth()
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCarousel, setShowCarousel] = useState(true);
  const [category, setCategory] = useState('');
  useEffect(() => {

  }, [auth])
  const [products, setProducts] = useState([]);
  const homeData = async () => {
    try {

      const { data } = await axios.get('http://localhost:5000/all-products')


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

  const handlecart = async () => {
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

      <div className='container mt-5'>

        <div className='row'>
          <div className='col-sm-12 header-nav'>
            <Link className='secondary-nav' to='/best'>Best Selling Products</Link>
            <Link className='secondary-nav' to='/best'>New Arrivals</Link>
            <Link className='secondary-nav' to='/best'>Products</Link>
            <Link className='secondary-nav' to='/best'>Sale</Link>
            <Link className='secondary-nav' to='/category' >
              GROOM
            </Link>
            <Link className='secondary-nav' to='/category'>
              BRIDE
            </Link>
            <Link className='secondary-nav' to='/category' >
              kids
            </Link>


            <Link className='secondary-nav' to='/best'>Recently </Link>
            <Link className='secondary-nav' to='/best'>Ads</Link>
          </div>
        </div>
      </div>

      <Carasoule />

      {/* section 1 after carasoule */}

      <div className="container mt-5 pt-3">
        <div className="row d-flex justify-content-between">
          <div className='d-flex col-3 justify-content-around border-end border-2  '>
            <img src={icon1} alt="" width='50px' height='50px' />
            <div>
              <h5>Free Shipping</h5>
              <p>On Order Over $100</p>
            </div>
          </div>
          <div className='d-flex col-3 justify-content-around border-end border-2 '>
            <img src={icon2} alt="" width='50px' height='50px' />
            <div>
              <h5>30 Day Returns</h5>
              <p>Back Returns In 7 Days</p>
            </div>
          </div>
          <div className='d-flex col-3 justify-content-around border-end border-2 '>
            <img src={icon3} alt="" width='50px' height='50px' />
            <div>
              <h5>Money Gauartantee</h5>
              <p>Cash On Delivery</p>
            </div>
          </div >
          <div className='d-flex col-3 justify-content-around '>
            <img src={icon4} alt="" width='50px' height='50px' />
            <div>
              <h5>Online Support</h5>
              <p>Call Us 24/7 At 03333--</p>
            </div>
          </div>
        </div>
      </div>

      {/* section 2 */}

      <div className="container mt-5 pt-3">
        <div className="row d-flex justify-content-between">

          <div className="col-3 section-2 bg-img-1 p-3 pt-5 pb-5">
            <p>FLAT 30% OFF</p>
            <h3 className='pb-3 '>Glowing Gold <br />Rings</h3>
            <Link className='link'>Shop Now</Link>
          </div>
          <div className="col-3 section-2 bg-img-2 p-3 pt-5 pb-5">
            <p>WOMEN SPECIAL</p>
            <h3 className='pb-3 '>Women Gold<br /> Bracellete</h3>
            <Link className='link'>Shop Now</Link>
          </div>
          <div className="col-3 section-2 bg-img-3 p-3 pt-5 pb-5">
            <p>FLAT 20% OFF</p>
            <h3 className='pb-3 '>Trendy Ladies <br />Gold Ring</h3>
            <Link className='link'>Shop Now</Link>
          </div>
        </div>

      </div>

      {/* section 3 */}

      <div className="container mt-5 pt-3">

        <div className="row text-center">
          <h1 className='fw-semibold custom-title'>Trending Products</h1>
        </div>

        <div className="row d-flex justify-content-center mt-2">
          <div className="col-4 d-flex justify-content-around text-center">
            <Link className='link'>FEATURED</Link>
            <Link className='link'>NEW ARRIVALS</Link>
            <Link className='link'>BEST SELLER</Link>
          </div>
        </div>

        <div className="row d-flex justify-content-around mt-5">
          {
            products && products.map(product => {
              return (
                <Link className="col-2 text-decoration-none text-black" to={`/all-product/${product.slug}`}>
                  <img src={`http://localhost:5000/product-photo/${product._id}`} alt="" />
                  <p className='text-muted'>Usman Ali</p>
                  <p>{product.title}</p>
                  <p className='stars'><FaStar /> <FaStar /><FaStar /><FaStar /> <FaStar /><span style={{ color: "black" }}>(2)</span></p>
                  <p>${product.price}</p>
                </Link>
              )
            })
          }
          {/* <div
            onMouseOver={() => setClassName('show')}
            onMouseOut={() => setClassName('hide')}
            className={className}
          >
            <FaRegHeart /> <IoCartOutline />
          </div> */}
        </div>

      </div>

    </Layout>
  )
}

export default Home