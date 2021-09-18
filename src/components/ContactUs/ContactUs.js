import React from "react";
import contactUsImage from "./contactUs.jpg";
import './style.css';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    alert(`Hi ${this.state.name}, we will get back to you soon!`);
    event.preventDefault();
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };

  render() {
    return (
      <div>
        <section className="form contact-us mbr-fullscreen" >
          <div className="container">
            <div className="row content-wrapper justify-content-center">
              <div
                className="col-lg-4 offset-lg-1 mbr-form"
                data-form-type="formoid"
              >
                <form
                  action="/"
                  // method="POST"
                  className="mbr-form form-with-styler"
                  data-form-title="Form Name"
                  onSubmit={this.handleSubmit}
                >
                  <div className="row">
                    <div
                      hidden="hidden"
                      data-form-alert=""
                      className="alert alert-success col-12"
                    >
                      Thanks for filling out the form!
                    </div>
                    <div
                      hidden="hidden"
                      data-form-alert-danger=""
                      className="alert alert-danger col-12"
                    >
                      Oops...! some problem!
                    </div>
                  </div>
                  <div className="dragArea row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <h1 className="mbr-section-title mb-4 display-2">
                        <strong>Contact Us</strong>
                      </h1>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <p className="mbr-text mbr-fonts-style mb-4 display-7">
                        Fill your details and we'll get back to you soon.
                      </p>
                    </div>
                    <div
                      className="col-lg-12 col-md col-12 form-group"
                      data-for="name"
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        data-form-field="name"
                        className="form-control"
                        value={this.state.name}
                        onChange={this.handleChange}
                        id="name-form4-10"
                      />
                    </div>
                    <div
                      className="col-lg-12 col-md col-12 form-group"
                      data-for="email"
                    >
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        data-form-field="email"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.handleChange}
                        id="email-form4-10"
                      />
                    </div>
                    <div className="col-12 form-group" data-for="message">
                      <input
                        type="text"
                        name="message"
                        placeholder="Message"
                        data-form-field="message"
                        className="form-control"
                        value={this.state.message}
                        onChange={this.handleChange}
                        id="message-form4-10"
                      />
                    </div>
                    <div className="col-12 col-md-auto mbr-section-btn">
                      <button
                        type="submit"
                        className="btn btn-secondary display-4"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 offset-lg-1 col-12 d-lg-block d-none">
                <div className="image-wrapper">
                  <img
                    className="w-100"
                    src={contactUsImage}
                    alt="Contact us"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ContactUs;
