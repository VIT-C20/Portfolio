import React from "react";
import "./style.css";
// import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <section className="menu">
      <nav className="navbar navbar-light navbar-expand-md fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand">
            <span className="navbar-caption-wrap">
              <a className="navbar-caption text-black" href="/">
                <img id="logo" src={'images/logo.png'} alt="logo" height={20} width={20} />
              </a>
            </span>
          </div>

          <button
            className="navbar-toggler my-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#aboutus">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactus">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
