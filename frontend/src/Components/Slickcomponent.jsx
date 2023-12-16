import React from 'react'
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
  
  return (
    <>

    <div className="slick">
    <div className='mt-5 container '>
         <h2 className='text-center fw-semibold pt-5'>Popular Categories</h2>
        <div className="row p-5">
        <Slider {...settings}>
          <div >
            <img src={pendant} alt="" className='rounded-circle'/>
            <h5 className='mx-5 mt-3'>Necklaces</h5>
          </div>
          <div>
          <img src={Earings} alt="" className='rounded-circle'/>
            <h5 className='mx-5 mt-3'>Earings</h5>
          </div>
          <div>
          <img src={rings} alt="" className='rounded-circle'/>
            <h5 className='mx-5 mt-3'>Rings</h5>
          </div>
          <div>
          <img src={bracelets} alt="" className='rounded-circle'/>
            <h5 className='mx-5 mt-3'>Bracelets</h5>
          </div>
          <div>
          <img src={engage} alt="" className='rounded-circle'/>
            <h5 className='mx-5 mt-3'>Engagement Rings</h5>
          </div>
          <div>
          <img src={necklace} alt="" className='rounded-circle'/>
            <h5 className='mx-5 mt-3'>Necklaces</h5>
          </div>
          <div>
          <img src={charm} alt="" className='rounded-circle'/>
            <h5 className='mx-5 mt-3'>Charm & Dingles</h5>
          </div>
          <div>
          <img src={others} alt="" className='rounded-circle'/>
            <h5 className='mx-5 mt-3'>Others</h5>
          </div>
          
          
        </Slider>
        </div>
      </div>
    </div>
    </>
  )
}

export default Slickcomponent