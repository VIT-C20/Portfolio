import React from 'react'
import background3 from './background3.jpg'
import background5 from './background5.jpg'
import background8 from './background8.jpg'

const Testimonials = () => {
    return (
        <div>
            <section className="slider2 cid-sEEH92vhSg" id="slider2-z">
                    <div className="mbr-section-head">
                        <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Testimonials</strong></h4>
                    </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10">
                            <div className="carousel slide" id="sEIVK6V8wV" data-interval="5000">
                                
                                <ol className="carousel-indicators">
                                    <li data-slide-to="0" className="active" data-target="#sEIVK6V8wV"></li>
                                    <li data-slide-to="1" data-target="#sEIVK6V8wV"></li>
                                    <li data-slide-to="2" data-target="#sEIVK6V8wV"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item slider-image item active">
                                        <div className="item-wrapper">
                                            <img className="d-block w-100" src={background3}/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5 className="mbr-section-subtitle mbr-fonts-style display-5">
                                                    <strong>Fixed-Height Slider</strong>
                                                </h5>
                                                <p className="mbr-section-text mbr-fonts-style display-7">
                                                    Click on the image to edit slides.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item slider-image item">
                                        <div className="item-wrapper">
                                            <img className="d-block w-100" src={background5} />
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5 className="mbr-section-subtitle mbr-fonts-style display-5">
                                                    <strong>Fixed-Height Slider</strong>
                                                </h5>
                                                <p className="mbr-section-text mbr-fonts-style display-7">
                                                    Click on the image to edit slides.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item slider-image item">
                                        <div className="item-wrapper">
                                            <img className="d-block w-100" src={background8}/>
                                            <div className="carousel-caption d-none d-md-block">
                                                <h5 className="mbr-section-subtitle mbr-fonts-style display-5">
                                                    <strong>Fixed-Height Slider</strong>
                                                </h5>
                                                <p className="mbr-section-text mbr-fonts-style display-7">
                                                    Click on the image to edit slides.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control carousel-control-prev" role="button" data-slide="prev" href="#sEIVK6V8wV">
                                    <span className="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control carousel-control-next" role="button" data-slide="next" href="#sEIVK6V8wV">
                                    <span className="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials
