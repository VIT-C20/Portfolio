import React, { useState, useEffect } from "react";
import axios from 'axios'
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
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    axios.get('https://docs.google.com/spreadsheets/d/1m6mDQO5iokoBoNCUEeY4rS0mOjJwBBijhd1Nzd1OxDE/gviz/tq?tqx=out:json&gid=0')
    .then(res => {
      console.log(res.data)
      const rawData = res.data.split("/O_o/\ngoogle.visualization.Query.setResponse(").pop().split(");")[0]
      const data  = JSON.parse(rawData)
      const headers = data.table.cols.map(e => e.label)
      const rows = data.table.rows
      const actualData = []
      rows.forEach(e => {
        let temp = {}
        headers.forEach((head, i) => {
          temp[head] = e.c[i].v
        })
        actualData.push(temp)
      })
      console.log(actualData)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <section className="features3 cid-sEEGvBqWWu services" id="services-container">
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
