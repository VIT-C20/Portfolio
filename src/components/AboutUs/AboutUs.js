import React from 'react'
import img1 from './4.jpg'
import img2 from './5.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className="mbr-section-head">
                <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>About Us</strong></h4>
            </div>
            <section className="image1 cid-sEEH48RmNz" id="image1-x">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="image-wrapper">
                                <img src={img1} alt="Mobirise" />
                                <p className="mbr-description mbr-fonts-style pt-2 align-center display-4">
                                Image Description</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg">
                            <div className="text-wrapper">
                                <h3 className="mbr-section-title mbr-fonts-style mb-3 display-5">
                                    <strong>Image with Description</strong></h3>
                                <p className="mbr-text mbr-fonts-style display-7">
                                    Use Mobirise website building software to create multiple sites for commercial and non-profit projects. Click on the image in this block to replace it. You can add a description below your image, or on the side. If you want to hide some of the text fields, open the Block parameters, and uncheck relevant options.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="image2 cid-sEEH4HXxu3" id="image2-y">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="image-wrapper">
                                <img src={img2} alt="Mobirise" />
                                <p className="mbr-description mbr-fonts-style mt-2 align-center display-4">
                                    Image Description</p>
                            </div>
                        </div>
                        <div className="col-12 col-lg">
                            <div className="text-wrapper">
                                <h3 className="mbr-section-title mbr-fonts-style mb-3 display-5">
                                    <strong>Image with Description</strong></h3>
                                <p className="mbr-text mbr-fonts-style display-7">
                                    Use Mobirise website building software to create multiple sites for commercial and non-profit projects. Click on the image in this block to replace it. You can add a description below your image, or on the side. If you want to hide some of the text fields, open the Block parameters, and uncheck relevant options.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
