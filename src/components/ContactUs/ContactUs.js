import React from 'react'
import sq3 from './sq3.jpg'

const ContactUs = () => {
    return (
        <div>
            <section class="form4 cid-sEEHtQxXDk mbr-fullscreen" id="form4-10">
                <div class="container">
                    <div class="row content-wrapper justify-content-center">
                        <div class="col-lg-4 offset-lg-1 mbr-form" data-form-type="formoid">
                            <form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler" data-form-title="Form Name">
                                {/* <input type="hidden" name="email" data-form-email="true" value="4t9Whfbj1LE29R2xsQ5UFHpEhaaxk61dmtvtdrMasprpYkDd1HtuVrjPTYcVzuudqJVeNKUyMvqpP2VnsMAtdP0YWKzn1YLm32AtvesIFeIcUY7WABPXvwNzd5Tf5L9+" /> */}
                                <div class="row">
                                    <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for filling
                                        out the form!</div>
                                    <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">Oops...! some
                                        problem!</div>
                                </div>
                                <div class="dragArea row">
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <h1 class="mbr-section-title mb-4 display-2">
                                            <strong>Contact Us</strong>
                                        </h1>
                                    </div>
                                    <div class="col-lg-12 col-md-12 col-sm-12">
                                        <p class="mbr-text mbr-fonts-style mb-4 display-7">
                                            Fill this form and we'll get back to you soon.</p>
                                    </div>
                                    <div class="col-lg-12 col-md col-12 form-group" data-for="name">
                                        <input type="text" name="name" placeholder="Name" data-form-field="name" class="form-control" value="" id="name-form4-10" />
                                    </div>
                                    <div class="col-lg-12 col-md col-12 form-group" data-for="email">
                                        <input type="email" name="email" placeholder="Email" data-form-field="email" class="form-control" value="" id="email-form4-10" />
                                    </div>
                                    <div class="col-12 col-md-auto mbr-section-btn">
                                        <button type="submit" class="btn btn-secondary display-4">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-6 offset-lg-1 col-12">
                            <div class="image-wrapper">
                                <img class="w-100" src={sq3} alt="Mobirise" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
