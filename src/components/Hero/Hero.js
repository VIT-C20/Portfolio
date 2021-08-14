import React from "react";
import "./style.css";
import heroVideo from "../../assets/videos/background-video.mp4";

const Hero = () => {
  return (
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
              <a className="btn btn-success display-4" href="https://mobiri.se">
                Free Download!
              </a>
              <a
                className="btn btn-success-outline display-4"
                href="https://mobiri.se"
              >
                Live Demos &gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
