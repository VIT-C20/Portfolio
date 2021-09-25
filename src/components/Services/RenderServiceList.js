import React from 'react'
import "./style.css";

const RenderServiceList = ({ serviceList }) => {
  console.log(serviceList)
    return (
        <>
            {serviceList.map((service,idx) => {
            return (
              <div key={idx} className="item features-image сol-12 col-md-6 col-lg-4">
                <div className="item-wrapper">
                  <div className="item-img">
                    <img src={service.Image} alt={service.Service_name} />
                    {
                      service.Upcoming?.toLowerCase() === 'yes' ? <label class='floating'>Upcoming</label> : null
                    }
                    
                  </div>
                  <div className="item-content">
                    <h5 className="item-title mbr-fonts-style display-7">
                      <strong>{service.Service_name}</strong>
                    </h5>

                    <p className="mbr-text mbr-fonts-style mt-3 display-7">
                      {service.Service_description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </>
    )
}

export default RenderServiceList
