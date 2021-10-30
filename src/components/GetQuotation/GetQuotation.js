import React, { useState } from "react";
import { Modal, ModalManager, Effect } from "react-dynamic-modal";
import Loader from "react-loader-spinner";
import emailjs from "emailjs-com";
import { service_id, user_id, get_quotation_template_id } from "../../mailer";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const GetQuotation = ({
  service,
  onRequestClose,
  listOfServices,
  loading: load = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [siteLocation, setSiteLocation] = useState("");
  const [serviceName, setServiceName] = useState(service);
  const [message, setMessage] = useState("");
  // const [otherSiteLocation, setOtherSiteLocation] = useState("");
  const { width } = useWindowDimensions()

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(
    //   companyName,
    //   companyEmail,
    //   siteLocation,
    //   serviceName,
    //   message,
    //   // otherSiteLocation
    // );
    setLoading(true);
    emailjs.send(service_id, get_quotation_template_id, {
        companyName, companyEmail, siteLocation, serviceName, message
        // , otherSiteLocation
    }, user_id)
    .then((result) => {
        console.log(result.text);
        setSuccess(true)
    }, (error) => {
        console.log(error.text);
        setSuccess(false)
    })
    .finally(() => {
        setLoading(false)
        setSubmitted(true)
    });
  };

  return (
    <Modal
      onRequestClose={onRequestClose}
      effect={Effect.ScaleUp}
      className="modal-dialog"
      style={{
        overlay: {
          overflowX: "hidden",
          overflowY: "auto",
        },
        content: {
          margin: "2% auto",
          borderRadius: "1%",
          width: width <= 760 ? "90%" : "50%",
        },
      }}
    >
      <div role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title " id="quotationModalLabel">
              Quotation Form
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={ModalManager.close}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              {submitted ? (
                <div className="row">
                  <div
                    hidden={!success}
                    data-form-alert=""
                    className="alert alert-success col-12"
                  >
                    Thanks for filling out the form!
                  </div>
                  <div
                    hidden={success}
                    data-form-alert-danger=""
                    className="alert alert-danger col-12"
                  >
                    Oops...! some problem!
                  </div>
                </div>
              ) : null}
              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">
                  Company Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="recipient-name"
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">
                  Company Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="recipient-name"
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  required
                />
              </div>

              {/* <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Site Location</label>
                <select
                  className="form-control"
                  defaultValue=""
                  id="exampleFormControlSelect1"
                  onChange={(e) => setSiteLocation(e.target.value)}
                  required
                >
                  <option value="" disabled defaultValue="" hidden>
                    Select Location
                  </option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Thane">Thane</option>
                  <option value="Kalyan">Kalyan</option>
                  <option value="Other">Other</option>
                </select>
              </div> */}

              {/* {siteLocation.toLocaleLowerCase() === "other" ? ( */}
                <div className="form-group">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Site location:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    onChange={(e) => setSiteLocation(e.target.value)}
                    required
                  />
                </div>
              {/* ) : null} */}

              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Service</label>
                <select
                  className="form-control"
                  id="exampleFormControlSelect1"
                  defaultValue={service || ""}
                  onChange={(e) => setServiceName(e.target.value)}
                  required
                >
                  <option value="" disabled hidden>
                    Select Service
                  </option>
                  {listOfServices?.map((service, idx) => (
                    <option key={idx} value={service.Service_name}>
                      {service.Service_name}
                    </option>
                  ))}
                  {load ? (
                    <>
                      <option>Removal of Debris</option>
                      <option>Back filling</option>
                      <option>Hookloader</option>
                    </>
                  ) : null}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label">
                  Message:
                </label>
                <textarea
                  className="form-control"
                  id="message-text"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary m-1"
                  // onClick={handleSubmit}
                >
                  {loading ? (
                    <Loader type="ThreeDots" color="#FFF" height={30} width={30} />
                  ) : (
                    "Submit"
                  )}
                </button>
                <button
                  type="button"
                  className="btn btn-secondary m-1"
                  data-dismiss="modal"
                  onClick={ModalManager.close}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default GetQuotation;
