import React from 'react'
import '../css/carasoule.css'
import img1 from '../images/main-banner-1.jpg'
import img2 from '../images/main-banner-2.jpg'
const Carasoule = () => {
  return (
    <>
    <div id="carouselExample" class="carousel slide mt-3">
  <div class="carousel-inner">
    <div class="carousel-item active" >
      <div className="container-fluid bg-img">
        <div className="row mx-3">
          <div className="p-5 mx-5 slider">
            <h3>NEW COLLECTION</h3>
            <h1 className='col-4 mt-3'>Luxurious & Shiny Gold Chain</h1>
            <p className='mt-3'>Designer Jwellery Necklaces-Bracellets-Earings</p>
            <button className='mt-4'>SHOP NOW</button>
          </div>
        
        </div>
      </div>
    </div>
    <div class="carousel-item">
    <div className="container-fluid bg-img-2">
        <div className="row mx-3">
          <div className="p-5 mx-5 slider ">
            <h3>NEW COLLECTION</h3>
            <h1 className='col-4 mt-3'>Luxurious & Shiny Gold Chain</h1>
            <p className='mt-3'>Designer Jwellery Necklaces-Bracellets-Earings</p>
            <button className='mt-4'>SHOP NOW</button>
          </div>
        
        </div>
      </div>
    </div>

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carasoule