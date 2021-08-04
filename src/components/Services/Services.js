import React from 'react'
import features1 from './features1.jpg'
import features2 from './features2.jpg'
import features3 from './features3.jpg'


const Services = () => {
    return (
        <section className="features3 cid-sEEGvBqWWu" id="features3-w">
            <div className="container">
                <div className="mbr-section-head">
                    <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Services</strong></h4>
                </div>
                <div className="row mt-4">
                    <div className="item features-image сol-12 col-md-6 col-lg-4">
                        <div className="item-wrapper">
                            <div className="item-img">
                                <img src={features1} alt="" />
                            </div>
                            <div className="item-content">
                                <h5 className="item-title mbr-fonts-style display-7"><strong>No Coding</strong></h5>
                                
                                <p className="mbr-text mbr-fonts-style mt-3 display-7">Mobirise is an easy website builder. Just
                                    drop site elements to your page, add content and style it to look the way you like.</p>
                            </div>
                            <div className="mbr-section-btn item-footer mt-2"><a href="www.google.in" className="btn btn-primary item-btn display-7">Learn More
                                    </a></div>
                        </div>
                    </div>

                    <div className="item features-image сol-12 col-md-6 col-lg-4">
                        <div className="item-wrapper">
                            <div className="item-img">
                                <img src={features2} alt=""/>
                            </div>
                            <div className="item-content">
                                <h5 className="item-title mbr-fonts-style display-7"><strong>Mobile Friendly</strong></h5>
                                
                                <p className="mbr-text mbr-fonts-style mt-3 display-7">You don't have to code to create your own
                                    site. Select one of available themes in the Mobirise Site Maker.</p>
                            </div>
                            <div className="mbr-section-btn item-footer mt-2"><a href="www.google.in" className="btn btn-primary item-btn display-7">Learn More
                                    &gt;</a></div>
                        </div>
                    </div>

                    <div className="item features-image сol-12 col-md-6 col-lg-4">
                        <div className="item-wrapper">
                            <div className="item-img">
                                <img src={features3} alt=""/>
                            </div>
                            <div className="item-content">
                                <h5 className="item-title mbr-fonts-style display-7"><strong>Unique Styles</strong></h5>
                                
                                <p className="mbr-text mbr-fonts-style mt-3 display-7">Select the theme that suits you. Each theme
                                    in the Mobirise Website Software contains a set of unique blocks.<br /></p>
                            </div>
                            <div className="mbr-section-btn item-footer mt-2"><a href="www.google.in" className="btn btn-primary item-btn display-7">Learn More
                                    &gt;</a></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Services
