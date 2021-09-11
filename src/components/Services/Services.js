import React from "react";
import features1 from "./features1.jpg";
import features2 from "./features2.jpg";
import features3 from "./features3.jpg";
import "./style.css";

const serviceList = [
  {
    imageSrc: features1,
    title: "Service A",
    descriptioin:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis veniam distinctio et maxime aperiam facere nemonesciunt accusantium. Ullam, omnis.",
  },
  {
    imageSrc: features2,
    title: "Service B",
    descriptioin:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis veniam distinctio et maxime aperiam facere nemonesciunt accusantium. Ullam, omnis.",
  },
  {
    imageSrc: features3,
    title: "Service C",
    descriptioin:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis veniam distinctio et maxime aperiam facere nemonesciunt accusantium. Ullam, omnis.",
  },
];

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
          {serviceList.map((service,idx) => {
            return (
              <div key={idx} className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                  <div className="item-img">
                    <img src={service.imageSrc} alt="" />
                  </div>
                  <div className="item-content">
                    <h5 className="item-title mbr-fonts-style display-7">
                      <strong>{service.title}</strong>
                    </h5>

                    <p className="mbr-text mbr-fonts-style mt-3 display-7">
                      {service.descriptioin}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
