import React from "react";
import "./style.css";
import heroVideo from "../../assets/videos/background-video.mp4";

const Hero = () => {
  return (
    <div>
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
                Modal title
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
                    Recipient:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>

                

                <div class="form-group">
                  <label for="exampleFormControlSelect1">Start Location</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Mumbai</option>
                    <option>Thane</option>
                    <option>Kalyan</option>
                  </select>
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

        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="mbr-section-title mbr-fonts-style mb-3 display-2">
                <strong>GMP Constructions</strong>
              </h1>

              <p className="mbr-text mbr-fonts-style display-7">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                commodi debitis libero similique quisquam exercitationem,
                repellendus quaerat fugit eius. Consequatur!
              </p>
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
