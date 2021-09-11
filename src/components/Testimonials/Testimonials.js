import React from "react";
import background3 from "./background3.jpg";
import background5 from "./background5.jpg";
import background8 from "./background8.jpg";
import "./styles.css";

// const testimonialList = [
//   {
//     title:"",
//     imageSrc:"background3"
//   },
//   {
//     title:"",
//     imageSrc:"background5"
//   },
//   {
//     title:"",
//     imageSrc:"background8"
//   }
// ]

const Testimonials = () => {
  return (
    <section className="slider-container">

      <div className="slider-header">
        <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
          <strong>Testimonials</strong>
        </h4>
      </div>

      <div className="slider-images">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={background3} alt="First slide" />
              <p>Hello</p>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={background5} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={background8} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
