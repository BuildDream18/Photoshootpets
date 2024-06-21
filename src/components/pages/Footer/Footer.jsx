import React from "react";
import "./Footer.css";
import { BsStar } from "react-icons/bs";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{paddingLeft:"10px", paddingRight:"10px", backgroundColor:"#1c2237"}}>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Celebrating Pet Portraits, One Paw at a Time.
          </p>
          <div className="footer__links">
            <a href="#" style={{ color: "rgb(118, 129, 163)" }}>
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="#" style={{ color: "rgb(118, 129, 163)" }}>
              Terms of Use
            </a>
          </div>
        </section>
        <section className="social-media">
          <div className="social-media-wrap">
            <p className="website-rights">
              {" "}
              © 2023 by PhotoshootPets
              <small>
                <sup>TM</sup>
              </small>{" "}
              All Rights Reserved
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
