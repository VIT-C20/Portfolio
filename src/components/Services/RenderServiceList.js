import React from "react";
import "./style.css";
import { Modal, ModalManager, Effect } from "react-dynamic-modal";
import GetQuotation from "../GetQuotation/GetQuotation";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Helmet } from "react-helmet";

var listOfServices = [];

const openGetQuotationModal = (service) => {
  ModalManager.open(
    <GetQuotation
      listOfServices={listOfServices}
      service={service.Service_name}
      onRequestClose={() => true}
    />
  );
};

const ServiceDetails = ({ service, onRequestClose }) => {
  const { width } = useWindowDimensions()
  return (
    <Modal
      onRequestClose={onRequestClose}
      effect={Effect.Fall}
      className="modal-dialog"
      style={{
        overlay: {
          overflowX: "hidden",
          overflowY: "auto",
        },
        content: {
          margin: "2% auto",
          borderRadius: "1%",
          width: (width <= 760) ? '90%' : '50%',
          overflow: 'hidden',
        },     
      }}
    >
      <div className="modal-container" role="document">
        <Helmet>
          <title>G.P. Enterprises | {service.Service_name}</title>
          <meta name="description" content={service.Service_description}></meta>
        </Helmet>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title " id="serviceDetailsModalLabel">
              {service.Service_name}
            </h5>
            <button
              type="button"
              className="close"
              aria-label="Close"
              onClick={ModalManager.close}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="item-content">
              <div className="item-img">
                <img src={service.Image} alt={service.Service_name} />
              </div>
              <p className="mbr-text mbr-fonts-style p-3 m-0 text-justify-left display-7" dangerouslySetInnerHTML={{__html: service.Service_description}}>
                {/* {service.Service_description} */}
              </p>
            </div>
          </div>
          <div className="row modal-footer">
            <button
              type="button"
              className="btn btn-sm btn-md btn-primary"
              onClick={() => {
                ModalManager.close();
                openGetQuotationModal(service);
              }}
            >
              Get Quotation
            </button>
            <button
              type="button"
              className="btn btn-sm btn-md btn-secondary"
              onClick={ModalManager.close}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

const RenderServiceList = ({ serviceList }) => {
  listOfServices = [...serviceList];
  const openModal = (service) => {
    ModalManager.open(
      
      <ServiceDetails service={service} onRequestClose={() => true} />
    );
  };

  return (
    <>
      {serviceList.map((service, idx) => {
        return (
          <div
            key={idx}
            className="item features-image сol-12 col-md-6 col-lg-4"
            onClick={() => openModal(service)}
          >
            <div className="item-wrapper">
              <div className="item-img">
                <img
                  src={service.Image}
                  alt={service.Service_name}
                  className="service-image"
                  height={"100"}
                />
                {service.Upcoming?.toLowerCase() === "yes" ? (
                  <label className="floating">Upcoming</label>
                ) : null}
              </div>
              <div className="item-content p-3">
                <h5 className="item-title mbr-fonts-style display-7">
                  <strong>{service.Service_name}</strong>
                </h5>

                <p className="mbr-text mbr-fonts-style mb-0  display-7 service-description" dangerouslySetInnerHTML={{__html: service.Service_description}}>
                  {/* {service.Service_description} */}

                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RenderServiceList;
