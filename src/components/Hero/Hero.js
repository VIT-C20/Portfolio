import React, { useContext } from "react";
import "./style.css";
import GetQuotation from "../GetQuotation/GetQuotation";
import { ModalManager} from 'react-dynamic-modal';
import { ServicesContext } from "../../ServicesContext";
// import bgVideo  from './bg2.mp4'

const companyName = "G.P. Enterprises";
const tagLine = "We help the best to get better.";

// const makeMuted = elt => {
//   // console.log(elt.readyState)
//   if(elt) {
//     elt.muted = true
//   }
//   // if(elt.readyState > 4) {
//   //   elt.play()
//   // }
// }

const Hero = () => {
    const {services, loading} = useContext(ServicesContext)

  const openModal = () => {
      ModalManager.open(<GetQuotation listOfServices={services} loading={loading} onRequestClose={() => true}/>);
  }

  const makeMuted = elt => {
    if(elt) {
    console.log(elt.readyState)
    elt.muted = true
  }
  // if(elt.readyState > 4) {
  //   elt.play()
  // }
}

  return (
    <div id="home">

      <section
        className="header2 mbr-fullscreen mbr-parallax-background"
        id="header2-u"
      >
        <div className="video-container">
          <video
            src={'video/bg3.mp4'}
            // src={bgVideo}
            // src={'https://i.imgur.com/PYXblvl.mp4'}
            className="hero-video"
            loop
            autoPlay
            // muted
            playsInline
            ref={makeMuted}
          ></video>
        </div>

        <div className="container-fluid bg-overlay"></div>

        <div className="container-fluid content">
          <div className="row">
            <div className="col-12">
              <div className="content-bg">
                <h1 className="mbr-section-title mbr-fonts-style mb-3">
                  <strong className="company-name">{companyName}</strong>
                </h1>

                <p className="mbr-text mbr-fonts-style tag-line ">{tagLine}</p>
              </div>
              <div className="mbr-section-btn mt-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="btn btn-success display-4"
                >
                  Get Quotation
                </button>
                <a className="btn btn-success display-4" href="https://youtu.be/V5kmYl4SR5M" target='_blank' rel="noopener noreferrer" >
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
