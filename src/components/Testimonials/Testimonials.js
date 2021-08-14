import React from "react";
import background3 from "./background3.jpg";
import background5 from "./background5.jpg";
import background8 from "./background8.jpg";
import "./styles.css";

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
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={background3} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={background5} alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src={background8} alt="Third slide" />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
