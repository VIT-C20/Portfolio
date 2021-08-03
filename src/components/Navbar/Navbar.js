import React from 'react'
import logo from '../logo.png'

const Navbar = () => {
    return (
        <section className="menu cid-s48OLK6784" id="menu1-s">
            <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
                <div className="container"> 
                    <div className="navbar-brand">
                        <span className="navbar-logo">
                            <a href="https://mobiri.se">
                                <img src={logo} alt="Mobirise" style={{height: '3rem'}} />
                            </a>
                        </span>
                        <span className="navbar-caption-wrap"><a className="navbar-caption text-black display-7" href="https://mobiri.se">Brand Name</a></span>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                            <li className="nav-item"><a className="nav-link link text-black display-4" href="https://mobirise.com">Home</a></li>
                            <li className="nav-item"><a className="nav-link link text-black display-4" href="https://mobirise.com">About Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar