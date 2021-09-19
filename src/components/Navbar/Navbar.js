import React from "react";
import "./style.css";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <section className="menu">
      <nav className="navbar navbar-light navbar-expand-md fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-caption-wrap">
              <a className="navbar-caption text-black" href="/">
                <img id="logo" src={logo} alt="logo" />
              </a>
            </span>
          </div>

          <button
            class="navbar-toggler my-auto"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#hero-container">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#services-container">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#aboutus-container">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#testimonial-container">
                  Testimonials
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contactus-container">
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
