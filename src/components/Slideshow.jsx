import React from 'react'
import Slide1 from '../img/s1.jpg';
import Slide2 from '../img/s2.jpg';
import Slide3 from '../img/s3.jpg';

function Slideshow() {
  return (
    <>
    <div className="container " >
      <div className="row">
      <div className="col">
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
    <img src={Slide2} alt="slideshow1" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="100%"  aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><div className="carousel-caption d-none d-md-block">
        <p></p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <img src={Slide1} alt="slideshow1" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="100%"  aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect>
      <div className="carousel-caption d-none d-md-block">
        <p></p>
      </div>
    </div>
    <div className="carousel-item">
    <img src={Slide3} alt="slideshow1" class="bd-placeholder-img bd-placeholder-img-lg d-block w-100"  height="100%"   aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><div className="carousel-caption d-none d-md-block">
        <p></p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    </div>
</div>

    </>
  )
}

export default Slideshow