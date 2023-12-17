import React, { useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../css/slickcomponent.css'
import Earings from '../images/earrings.jpg'
import bracelets from '../images/bracelets.jpg'
import necklace from '../images/necklaces.jpg'
import pendant from '../images/pendant.jpg'
import rings from '../images/rigs.jpg'
import engage from '../images/1.jpg'
import charm from '../images/04.jpg'
import others from '../images/05.jpg'
import { Link } from 'react-router-dom'
const Slickcomponent = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }

    const [cateProducts , setCateProducts] = useState ([])

  
  
  return (
    <>

    <div className="slick">
    <div className='mt-5 container '>
         <h2 className='text-center fw-semibold pt-5'>Popular Categories</h2>
        <div className="row p-5">
        <Slider {...settings}>
          <div >
            <img src={pendant} alt="" className='rounded-circle'/>
            <Link className='mx-5 mt-5 link-style ' to='/products/Necklaces'>Necklaces</Link>
          </div>
          <div>
          <img src={Earings} alt="" className='rounded-circle'/>
            <Link className='mx-5 mt-3 link-style' to='/products/Earings'>Earings</Link>
          </div>
          <div>
          <img src={rings} alt="" className='rounded-circle'/>
            <Link className='mx-5 mt-3 link-style' to='/products/Rings'>Rings</Link>
          </div>
          <div>
          <img src={bracelets} alt="" className='rounded-circle'/>
            <Link className='mx-5 mt-3 link-style' to='/products/Necklaces'>Bracelets</Link>
          </div>
          <div>
          <img src={engage} alt="" className='rounded-circle'/>
            <Link className='mx-5 mt-3 link-style' to='/products/Rings'>Engagement Rings</Link>
          </div>
          <div>
          <img src={necklace} alt="" className='rounded-circle'/>
            <Link className='mx-5 mt-3 link-style' to='/products/Necklaces'>Necklaces</Link>
          </div>
          <div>
          <img src={charm} alt="" className='rounded-circle'/>
            <Link className='mx-5 mt-3 link-style' to='/products/Necklaces'>Charm & Dingles</Link>
          </div>
          <div>
          <img src={others} alt="" className='rounded-circle'/>
            <Link className='mx-5 mt-3 pt-5 link-style' to='/products/Necklaces'>Others</Link>
          </div>
          
          
        </Slider>
        </div>
      </div>
    </div>
    </>
  )
}

export default Slickcomponent