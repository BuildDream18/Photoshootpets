import React from "react";
import { Buttoncus } from "../Buttoncus";
import { Link } from "react-router-dom";
import "./StepSection.css";
import { FaCameraRetro } from "react-icons/fa";
import { HiOutlineCursorClick } from "react-icons/hi";
import { FaPaw } from "react-icons/fa";

const buttonLabel1 = (
  <>
    Upload Your Pet
    <span className="space-between"> </span>
    <i class="fa-regular fa-hand-point-right"></i>
  </>
);

function stepSection({
  lightText,
  lightTextDesc,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div style={{backgroundColor: 'white'}}>
        <div class="step__container">
          <div class="transparency-layer1"></div>
          <div class="content ">
            <h1 className="heading dark" style={{paddingTop:"50px", color:"#1c2237"}}>Pet Masterpieces with 3 Simple Steps</h1>
            <div className="step__row home__step-step__row" style={{ display: "flex", flexDirection: "step__row", }}>
              <div className="steps-col">
                <FaCameraRetro className="svgstep" />
                <div className="home__step-text-wrapper">
                  <p className="home__step-subtitle dark">Step 1.Snap:</p>
                  <p className="home__step-desc">
                    Capture a Clear Photo of Your Pet
                  </p>
                </div>
              </div>
              <div className="steps-col">
                <HiOutlineCursorClick className="svgstep" />
                <div className="home__step-text-wrapper">
                  <p className="home__step-subtitle dark">Step 2.Select:</p>
                  <p className="home__step-desc">
                    Choose a Theme that Speaks to Your Pet's Personality
                  </p>
                </div>
              </div>
              <div className="steps-col">
                <FaPaw className="svgstep" />
                <div className="home__step-text-wrapper">
                  <p className="home__step-subtitle dark">Step 3.Transform:</p>
                  <p className="home__step-desc">Watch the Magic Unfold!</p>
                </div>
              </div>
            </div>
            <div className="step__row home__step-step__row" style={{ paddingBottom: "20px", paddingTop: "30px" }}>       
                <Buttoncus buttonSize="btncus--huge" buttonColor="blue">
                  {buttonLabel1}
                </Buttoncus>

            </div>
          </div>
        </div>
        <div className="step__container home__step-link">
          <div className="links-step__row">
            <div className="home__step-top-line dark">
              Trusted ❤️ Collaborations with:
            </div>
          </div>
          <div className="links-step__row">
            <div className="links-col">
              <a href="/">
                <img src="images/Petco_Logo.png" />
              </a>
            </div>
            <div className="links-col">
              <a href="/">
                <img src="images/BarkBox.png" />
              </a>
            </div>
            <div className="links-col">
              <a href="/">
                <img src="images/Chewy.png" />
              </a>
            </div>
            <div className="links-col">
              <a href="/">
                <img src="images/PetSmart-Logo.png" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default stepSection;
