import React, { useContext } from "react";
import features1 from "./images/features1.jpg";
import features2 from "./images/features2.jpg";
import features3 from "./images/features3.jpg";
import "./style.css";
import RenderServiceList from "./RenderServiceList";
import { ServicesContext } from "../../ServicesContext";

const serviceList = [
  {
    Image: features1,
    Service_name: "Removal of Debris",
    Service_description:
      `Our company provides two types of debris removal services. Hook loader, which is used by U.S.A, and Traditional method which is currently an ongoing method.`,
    upcoming: false,
    },
  {
    Image: features2,
    Service_name: "Back filling",
    Service_description:
      `This is our free service on construction sites. Company provides soil for construction sites without any cost. The capacity of company providing soil on construction sites is 1900 cubic meter per day.`,
    upcoming: false
    },
  {
    Image: features3,
    Service_name: "Service C",
    Service_description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis veniam distinctio et maxime aperiam facere nemonesciunt accusantium. Ullam, omnis.",
    upcoming: true
  },
];

const Services = () => {

  const {services, loading} = useContext(ServicesContext)

  return (
    <section className="features3 cid-sEEGvBqWWu services" id="services">
      <div className="container">
        <div className="row justify-content-center mbr-section-head">
          <h4 className="mbr-section-title mbr-fonts-style display-2">
            <strong>Services</strong>
          </h4>
        </div>
        <div className="row mt-4">
          {
            loading ? <RenderServiceList serviceList={serviceList} /> : <RenderServiceList serviceList={services} />
          }
        </div>
      </div>
    </section>
  );
};

export default Services;
