import React from 'react'
import '../css/search.css'
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
const Search = () => {
  const cartItems = localStorage.getItem('cart')
  return (
    <>
     <div className="container mt-2">
        <div className="row d-flex justify-content-around align-items-around">
            <div className="col-sm-4">
                <input type="text"  className='search-input' />
                <div className="search-text">Search</div>
                <IoIosSearch className='search-icon' size={27}/>
            </div>
            <div className="col-sm-6  d-flex align-items-center px-5">
            <img src="https://png.pngtree.com/png-clipart/20230815/original/pngtree-gold-glitter-icon---arrow-bullseye-market-accuracy-success-vector-picture-image_10816238.png" alt="" width='70px' className='mx-5'/>
             <h4 className='gold-text'>Gold Market</h4>
            </div>
            <div className="col-sm-2 d-flex">
            <FaRegHeart size={32}/> <IoCartOutline size={35} className='mx-3'/>
            <div className="loved">0</div>
            <div className="carted">{cartItems}</div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Search