import React, { useContext } from "react";
import "./style.css";
import RenderServiceList from "./RenderServiceList";
import { ServicesContext } from "../../ServicesContext";
import { Helmet } from "react-helmet";

const serviceList = [
  {
    Image: 'images/features1.jpg',
    Service_name: "Removal of Debris",
    Service_description:
      `Our company provides two types of debris removal services. Hook loader, which is used by U.S.A, and Traditional method which is currently an ongoing method.`,
    upcoming: false,
    },
  {
    Image: 'images/features2.jpg',
    Service_name: "Back filling",
    Service_description:
      `This is our free service on construction sites. Company provides soil for construction sites without any cost. The capacity of company providing soil on construction sites is 1900 cubic meter per day.`,
    upcoming: false
    },
  {
    Image: 'images/features3.jpg',
    Service_name: "Hookloader",
    Service_description:
      "High tech system for debris removal from construction site.This is the cheapest method of debris removal that has been adopted in Mumbai by G.P. Enterprises.",
    upcoming: true
  },
];

const Services = () => {

  const {services, loading} = useContext(ServicesContext)

  return (
    <section className="features3 cid-sEEGvBqWWu services" id="services">
      <Helmet>
        <meta name="description" content={`List of services provided by G.P. Enterprises : ${serviceList.map(service => service.Service_name)}`} />
        <meta name="keywords" content={`${serviceList.map(service => service.Service_name)}, Celestia, Oberoi Realty, Peninsula Business Park`} />
      </Helmet>
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
