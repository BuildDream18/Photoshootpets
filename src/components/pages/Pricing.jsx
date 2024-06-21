import React from "react";
import { FaFire } from "react-icons/fa";
import { Buttoncus } from "../Buttoncus";
import { Link } from "react-router-dom";
import { BsXDiamondFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { IconContext } from "react-icons/lib";
import { BsStar } from "react-icons/bs";
import "./Pricing.css";

const buttonLabel1 = (
  <>
    Upload Your Pet
    <span className="space-between"> </span>
    <i class="fa-regular fa-hand-point-right"></i>
  </>
);

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div className="pricing__section">
        <div className="pricing__wrapper">
            <div className="pricing__container">
              <div className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>ONE-TIME PURCHASE</h3>
                  <p>
                    <i>
                      Get Started with Our Basic Package for a One-Time
                      Purchase.
                    </i>
                  </p>
                  <h4>$9.99</h4>
                  <ul className="pricing__container-features">
                    <li>
                      <TiTickOutline className="svg"/>
                      Elevate Your Pet's Pics to one masterpiece!
                    </li>
                  </ul>
                  <Buttoncus buttonSize='btncus--wide' buttonColor='blue'>{buttonLabel1}</Buttoncus>
                </div>
              </div>
              <div className="pricing__container-card">
                <div className="pricing__container-cardInfo">
                  <p>⭐️⭐️⭐️⭐️⭐️ Rated 4.9 by 100+ Happy Pet Parents</p>
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>TODAY ONLY EXCLUSIVE ACCESS!</h3>
                  <p>
                    <i>
                      Subscribe and Save, so you can Pamper Your Pet with More for Less!
                    </i>
                  </p>
                  <h4>$29.99</h4>
                  <ul className="pricing__container-features">
                    <li><TiTickOutline className="svg"/>
                    "Monthly Pet Portrait Bonanza!" 🌟 Subscribe for Fresh Themes, so you can Transform Your Pet Pics into Art, Month after Month!</li>
                    <li><TiTickOutline className="svg"/>
                    "Unlock Premium Pet Portraits!" 🦁 Exclusive to Subscribers, so you can Elevate Your Pet's Pics to Royalty!</li>
                    <li><TiTickOutline className="svg"/>
                    Discounted Prints  🎨 Subscribe Now for Savings, so you can Showcase Your Pet's Charm on Stunning Canvas!</li>
                    <li><TiTickOutline className="svg"/>
                    "Pet Discounts Galore!" 🎁 Subscribe and Save, so you can Pamper Your Pet with More for Less!</li>
                  </ul>
                  <Buttoncus buttonSize='btncus--wide' buttonColor='primary'>{buttonLabel1}</Buttoncus>
                </div>
              </div>
            </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Pricing;
