import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../css/Product.css'
import Layout from '../../Layout/Layout'
import axios from 'axios'
import { FaStar } from "react-icons/fa";
const Product = () => {
    const [products, setProducts] = useState([]);
    const [priceRange, setPriceRange] = useState({ min: '', max: '' }); 
    const [error, setError] = useState()
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

    const handleSort = (e) => {
        const selectedSort = e.target.value;

        if (selectedSort === 'lowToHigh') {
            const sorted = [...products].sort((a, b) => a.price - b.price);
            setProducts(sorted);

        } else if (selectedSort === 'highToLow') {
            const sorted = [...products].sort((a, b) => b.price - a.price);
            setProducts(sorted);
        } else {
            setProducts(products)
        }
    };

    const handlePriceFilter = () => {
        // Filter products based on the price range
        const filtered = products.filter(product => product.price >= priceRange.min && product.price <= priceRange.max);
        if (filtered.length<=0) {
              setError('No Products Found in this range Please Check These')
             
        }
        
        else{
            setProducts(filtered);
            setError()
        }
        
        
        
      };
    return (
        <Layout >
            <div className="container-fluid bg-image">
                <h5 className='single-nav fw-bold'>Diamonds</h5>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6">

                    </div>
                    <div className="col-sm-6 d-flex justify-content-around align-items-center">
                        <label htmlFor="">Sort By:</label>
                        <select name="" id="" onChange={handleSort}>
                            <option className='p-3 ' value='reset'>Best Selling</option>
                            <option value='lowToHigh'>Low to High</option>
                            <option value='highToLow'>High to Low</option>
                        </select>
                        <div>
                            0 of {products.length} Products
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h2 className='pt-4'>Filter:</h2>
                        <div class="accordion accordion-flush mt-5" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header margin-bottom">
                                    <button class="accordion-button collapsed  text-white " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        <span className='square mb-1'></span><h5 className='mx-2 mt-1 fs-6 acc-head'>Availability</h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body  rounded-3">
                                        
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header margin-bottom">
                                    <button class="accordion-button collapsed  text-white " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        <span className='square mb-1'></span><h5 className='mx-2 mt-1 fs-6 acc-head'>Price</h5>
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample1">
                                    <div class="col-6 accordion-body ">
                                     <label >From $:</label><input type="number" placeholder="Min Price" value={priceRange.min} onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}  />
                                     <label >to $:</label><input type="number" placeholder="Max Price" value={priceRange.max} onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}/>
                                     <button onClick={handlePriceFilter} className='btn btn-dark mt-3'>Apply</button>
                                    </div>
                                </div>
                            </div>
                        


                        </div>
                    </div>

                    <div className="col-8 d-flex flex-wrap justify-content-around">
                        {error && <div className='d-flex justify-content-center align-items-center mt-5 mb-5 btn btn-outline-dark'><h5>{error}</h5></div>}
                        {products.map(product =>
                            <Link className='link col-4 border-0'>
                                <img src={`http://localhost:5000/product-photo/${product._id}`} width='200px' height='200px' />
                                <p className='text-muted mt-2'>Usman Ali</p>
                                <p className=''>{product.title}</p>
                                <p className='stars'><FaStar /> <FaStar /><FaStar /><FaStar /> <FaStar /><span style={{ color: "black" }}>(2)</span></p>

                                <p>${product.price}</p>
                            </Link>
                        )}
                    </div>

                </div>
            </div>

        </Layout>
    )
}

export default Product