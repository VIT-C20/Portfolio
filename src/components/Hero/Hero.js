import React from "react";
import "./style.css";
import heroVideo from "./bg.mp4";

const companyName = "GP Construction Service";
const tagLine = "We help the best to get better.";

const Hero = () => {
  return (
    <div id="home">
      <div
        className="modal fade text-left"
        id="quotationModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="quotationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
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
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Company Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>

                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Company Email address:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>

                <div class="form-group">
                  <label for="exampleFormControlSelect1">Site Location</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Mumbai</option>
                    <option>Thane</option>
                    <option>Kalyan</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Other Site location:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>

                <div className="form-group">
                  <label for="message-text" className="col-form-label">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <section
        className="header2 mbr-fullscreen mbr-parallax-background"
        id="header2-u"
      >
        <div className="video-container">
          <video
            src={heroVideo}
            className="hero-video"
            loop
            autoPlay
            muted
          ></video>
        </div>

        <div className="container-fluid bg-overlay"></div>

        <div className="container-fluid content">
          <div className="row">
            <div className="col-12">
              <div class="content-bg">
                <h1 className="mbr-section-title mbr-fonts-style mb-3">
                  <strong className="company-name">{companyName}</strong>
                </h1>

                <p className="mbr-text mbr-fonts-style tag-line ">{tagLine}</p>
              </div>
              <div className="mbr-section-btn mt-3">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#quotationModal"
                  className="btn btn-success display-4"
                >
                  Get Quotation
                </button>
                <a className="btn btn-success display-4" href="/">
                  Check Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
