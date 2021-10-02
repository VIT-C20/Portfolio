import React from "react";
import background1 from "./images/Celestia.jpg";
import background2 from "./images/Oberoi-realty.jpg";
import background3 from "./images/peninsula-business-park.jpg";
import "./styles.css";

const Testimonials = () => {
  return (
    <section className="slider-container" id="testimonials">
      <div className="slider-header">
        <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
          <strong>Testimonials</strong>
        </h4>
      </div>

      <div className="slider-images container">
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
            <div className="carousel-item slider-image item active">
              
                <img className="d-block w-100" src={background1} alt="" />
                <div className="carousel-caption ">
                  <p className="mbr-section-text mbr-fonts-style display-7">
                  <strong>Celestia</strong>
                  </p>
                </div>
              
            </div>

            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={background2}
                alt="Second slide"
              />
              <div className="carousel-caption ">
                  <p className="mbr-section-text mbr-fonts-style display-7">
                  <strong>Oberoi Realty</strong>
                  </p>
                </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={background3}
                alt="Third slide"
              />
              <div className="carousel-caption ">
                  <p className="mbr-section-text mbr-fonts-style display-7">
                  <strong>Peninsula Business Park</strong>
                  </p>
                </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
