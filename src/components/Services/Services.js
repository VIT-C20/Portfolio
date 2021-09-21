import React, { useState, useEffect } from "react";
import axios from 'axios'
import features1 from "./images/features1.jpg";
import features2 from "./images/features2.jpg";
import features3 from "./images/features3.jpg";
import "./style.css";
import RenderServiceList from "./RenderServiceList";

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
  const [loading, setLoading] = useState(true)
  const [services, setServices] = useState([])

  useEffect(() => {
    axios.get('https://docs.google.com/spreadsheets/d/1m6mDQO5iokoBoNCUEeY4rS0mOjJwBBijhd1Nzd1OxDE/gviz/tq?tqx=out:json&gid=0')
    .then(res => {
      const rawData = res.data.split("/*O_o*/\ngoogle.visualization.Query.setResponse(").pop().split(");")[0]
      const data  = JSON.parse(rawData)
      console.log(data)
      // const headers = data.table.cols.map(e => e.label)
      const rows = data.table.rows
      console.log(rows)
      const headers = [rows[0].c[0].v, rows[0].c[1].v, rows[0].c[2].v, rows[0].c[3].v]
      const actualData = []
      rows.forEach((e, idx) => {
        if(idx !== 0) {
          let temp = {}
          headers.forEach((head, i) => {
            temp[head] = e.c[i].v
          })
          actualData.push(temp)
        }
      })
      console.log(actualData)
      if (actualData.length > 0) {
        setLoading(false)
        setServices(actualData)
      }
    })
    .catch(err => console.log(err))
  }, [])
  

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
            !loading ? <RenderServiceList serviceList={serviceList} /> : <RenderServiceList serviceList={services} />
          }
        </div>
      </div>
    </section>
  );
};

export default Services;
