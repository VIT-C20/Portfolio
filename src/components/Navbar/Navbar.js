import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <section className="menu" id="menu1-s">
      <nav className="navbar navbar-dropdown navbar-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-caption-wrap">
              <a className="navbar-caption text-black display-7" href="/">
                Brand Logo
              </a>
            </span>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
