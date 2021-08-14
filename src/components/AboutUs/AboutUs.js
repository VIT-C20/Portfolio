import React from "react";
import img1 from "./4.jpg";
import "./style.css";

const AboutUs = () => {
  return (
    <div>
      <div className="mbr-section-head aboutus-header">
        <h4 className="mbr-section-title mbr-fonts-style align-center x mb-0 display-2">
          <strong>About Us</strong>
        </h4>
      </div>
      <section className="about-section cid-sEEH48RmNz pt-0" id="image1-x">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="image-wrapper">
                <img src={img1} alt="Mobirise" />
                <p className="mbr-description mbr-fonts-style pt-2 align-center display-4">
                  Image Description
                </p>
              </div>
            </div>
            <div className="col-12 col-lg">
              <div className="text-wrapper">
                <h3 className="mbr-section-title mbr-fonts-style mb-3 display-5">
                  <strong>All About GMP</strong>
                </h3>
                <p className="mbr-text mbr-fonts-style display-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  nobis eos at dolore reiciendis sequi veritatis et quaerat
                  enim, quibusdam recusandae libero illo veniam magnam assumenda
                  quasi amet voluptas fugiat dolorum est harum animi rerum
                  delectus eligendi. Officiis temporibus laborum iure provident,
                  recusandae, alias aspernatur, maxime cumque dolor illo eius.
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
