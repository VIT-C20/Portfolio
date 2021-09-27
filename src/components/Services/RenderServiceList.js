import React from 'react'
import "./style.css";
import { Modal,ModalManager,Effect} from 'react-dynamic-modal';

const ServiceDetails = ({service, onRequestClose}) => {
  return (
    <Modal
      onRequestClose={onRequestClose}
      effect={Effect.Fall}
      className="modal-dialog"
      style={{
        overlay: {
          overflowY: 'auto',
        },
        content: {
          margin: '1% auto',
          borderRadius: '1%',
        }
      }}
      >
      <div role="document">
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
                  <p className="mbr-text mbr-fonts-style mt-3 display-7">
                    {service.Service_description}
                  </p>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={() => {ModalManager.close()}}>
                Get Quotation
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={ModalManager.close}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      {/* <h1>{service.Service_name}</h1>
      <button onClick={ModalManager.close}>Close Modal</button> */}
    </Modal>
  )
}
const RenderServiceList = ({ serviceList }) => {
  const openModal = (service) =>{
      ModalManager.open(<ServiceDetails service={service} onRequestClose={() => true}/>);
    }
  return (
      <>
          {serviceList.map((service,idx) => {
          return (
            <>
            <div key={idx} className="item features-image сol-12 col-md-6 col-lg-4" onClick={() => openModal(service)}>
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
            </>
          );
        })}
      </>
    )
}

export default RenderServiceList
