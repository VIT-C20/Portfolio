import React from "react";
import "./style.css";

const AboutUs = () => {
  return (
    <div id="aboutus">
      <div className="aboutus-header">
        <h4 className="mbr-section-title mbr-fonts-style align-center x mb-0 display-2">
          <strong>About Us</strong>
        </h4>
      </div>
      <section className="about-section cid-sEEH48RmNz " id="image1-x">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="image-wrapper d-lg-block d-none">
                <img src={'images/logo.png'} alt="G.P. Enterprises logo" />
                <p className="mbr-description mbr-fonts-style pt-2 align-center display-4">
                  G.P. Enterprises
                </p>
              </div>
            </div>
            <div className="col-12 col-lg">
              <div className="text-wrapper align-left">
                <p className="mbr-text mbr-fonts-style display-7">
                  <b>Established :</b> Since 1999
                </p>
                <p className="mbr-text mbr-fonts-style display-7">
                  <b>Aim :</b> Satisfying all our clients needs with our
                  services.
                </p>
                <p className="mbr-text mbr-fonts-style display-7">
                  <b>Motive :</b> To keep all construction sites debris &
                  Garbage free by using unique methods.
                </p>
                <p className="mbr-text mbr-fonts-style display-7">
                  <b>Spirit :</b> We never settle, Always find different methods
                  to work, in order to increase the efficiency of service.
                </p>
                <p className="mbr-text mbr-fonts-style display-7">
                  <b>Transparency :</b> Openness with our team & clients which
                  lead to the clarity in communication and better service.
                </p>
                <p className="mbr-text mbr-fonts-style display-7">
                  <b>Our Promise :</b> To provide innovative and sustainable
                  service to our clients and bring about a positive environment
                  in business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
