import React from "react";
import features1 from "./features1.jpg";
import features2 from "./features2.jpg";
import features3 from "./features3.jpg";
import './style.css';

const Services = () => {
  return (
    <section className="features3 cid-sEEGvBqWWu" id="features3-w">
      <div className="container">
        <div className="mbr-section-head">
          <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
            <strong>Services</strong>
          </h4>
        </div>
        <div className="row mt-4">
          <div className="item features-image сol-12 col-md-6 col-lg-4">
            <div className="item-wrapper">
              <div className="item-img">
                <img src={features1} alt="" />
              </div>
              <div className="item-content">
                <h5 className="item-title mbr-fonts-style display-7">
                  <strong>Service A</strong>
                </h5>

                <p className="mbr-text mbr-fonts-style mt-3 display-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officiis veniam distinctio et maxime aperiam facere nemo
                  nesciunt accusantium. Ullam, omnis.
                </p>
              </div>
            </div>
          </div>

          <div className="item features-image сol-12 col-md-6 col-lg-4">
            <div className="item-wrapper">
              <div className="item-img">
                <img src={features2} alt="" />
              </div>
              <div className="item-content">
                <h5 className="item-title mbr-fonts-style display-7">
                  <strong>Service B</strong>
                </h5>

                <p className="mbr-text mbr-fonts-style mt-3 display-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium quod asperiores praesentium, ullam nisi mollitia
                  minima esse eaque voluptatem ad.
                </p>
              </div>
            </div>
          </div>

          <div className="item features-image сol-12 col-md-6 col-lg-4">
            <div className="item-wrapper">
              <div className="item-img">
                <img src={features3} alt="" />
              </div>
              <div className="item-content">
                <h5 className="item-title mbr-fonts-style display-7">
                  <strong>Service C</strong>
                </h5>

                <p className="mbr-text mbr-fonts-style mt-3 display-7">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Ducimus eaque unde repudiandae et quibusdam illo id, dolor
                  quia quidem nihil.
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
