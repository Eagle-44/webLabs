import React from "react";
import "./footer.css"
import logo from "..//..//../img/logo.jpg"
import fblogo from "..//..//../img/logo-facebook.png"
import twlogo from "..//..//../img/logo-twitter.png"
import lnklogo from "..//..//../img/linkedin-logo.png"
import glogo from "..//..//../img/google-logo.png"


const Footer = () => (
    <footer className="footer">
        <div className="footer_container">
            <div className="branding_staff">
                <h3>Branding Staff</h3>
                <p>
                    Lorem Ipsum is simply dummy
                    text of the printing and
                    typesetting industry.
                </p>
            </div>
            <div>
                <img className="footer_logo" src={logo} alt="logo"></img>
            </div>
            <div className="social_media">
                <img className="social_logo" src={fblogo} alt="logo"></img>
                <img className="social_logo" src={twlogo}alt="logo"></img>
                <img className="social_logo" src={lnklogo}alt="logo"></img>
                <img className="social_logo" src={glogo}alt="logo"></img>
            </div>
        </div>
        <h5>2021 © Copyright all rights reserved, GG WP</h5>
    </footer>
);

export default Footer;