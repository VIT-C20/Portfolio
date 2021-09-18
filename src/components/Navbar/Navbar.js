import React from "react";
import "./style.css";
import logo from "./logo.png";

const companyName = "GP Construction Service";

const Navbar = () => {
  return (
    <section className="menu" id="menu1-s">
      <nav className="navbar navbar-dropdown navbar-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-caption-wrap">
              <a className="navbar-caption text-black display-7" href="/">
                <img src={logo} alt="logo"/>
              </a>
              <h2 className="mb-0 ml-2 display-2">{companyName}</h2>
            </span>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
