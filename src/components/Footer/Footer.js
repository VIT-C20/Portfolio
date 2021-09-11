import React from "react";

const Footer = () => {
  return (
    <div>
      <section
        className="footer6 cid-sEELpHV0RX"
        // once="footers"
        id="footer6-12"
        style={{ backgroundColor: "#91ACBC" }}
      >
        <div className="container">
          <div className="row content mbr-white">
            <div className="col-12 col-md-6 mbr-fonts-style display-7">
              <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 display-7">
                <strong>Address</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style display-7">
                Pandurang Budhkar Marg Mahalaxmi SRA, <br />
                CHSL I - Wing, <br />
                Shop No1, Worli, <br />
                Maharashtra 400030, India
              </p>
              <br />
              <h5 className="mbr-section-subtitle mbr-fonts-style mb-2 mt-4 display-7">
                <strong>Contacts</strong>
              </h5>
              <p className="mbr-text mbr-fonts-style mb-4 display-7">
                Email: support@gmp-constructions.com <br />
                Phone: +91 000 0000 001 <br />
                Fax: +91 000 0000 002
              </p>
            </div>

            <div className="col-12 col-md-6">
              <div className="google-map">
                <iframe
                  title="one"
                  frameBorder="0"
                  style={{ border: 0 }}
                  // src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDk89J4FSunMF33ruMVWJaJht_Ro0kvoXs&amp;q=350 5th Ave, New York, NY 10118"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDk89J4FSunMF33ruMVWJaJht_Ro0kvoXs&amp;q=3Mahalaxmi+SRA+CHS"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-12 p-0">
            <div className="social-list">
              <div className="soc-item">
                <a href="/">
                  <span className="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                </a>
              </div>
              <div className="soc-item">
                <a href="https://www.facebook.com/pages/Mobirise/1616226671953247">
                  <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                </a>
              </div>
              <div className="soc-item">
                <a href="/">
                  <span className="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                </a>
              </div>
              <div className="soc-item">
                <a href="/">
                  <span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                </a>
              </div>
              <div className="soc-item">
                <a href="/">
                  <span className="socicon-googleplus socicon mbr-iconfont mbr-iconfont-social"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-lower ">
            <div className="col-sm-12 copyright pl-0">
              <p className="mbr-text mbr-fonts-style mbr-white display-7">
                © Copyright 2021 GMP Constructions - All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
