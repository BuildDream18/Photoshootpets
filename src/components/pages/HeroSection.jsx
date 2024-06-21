import React from "react";
import { Buttoncus } from "../Buttoncus";
import "./HeroSection.css";
import Uploadfunc from "./File-upload/Uploadfunc";

function HeroSection({
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div className={"home__hero-section darkBg"}>
        <div className="home__container">
          <div
            className="home_row home__hero-home_row"
            style={{
              display: "flex",
              flexDirection:
                imgStart === "start" ? "home_row-reverse" : "home_row",
            }}
          >
            <div className="home_col">
              <div className="home__hero-text-wrapper">
                <div className="home__top-line">{topLine}</div>
                <h1
                  className={lightText ? "home__heading" : "home__heading dark"}
                >
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home_hero-subtitle dark"
                  }
                >
                  {description}
                </p>
                <Uploadfunc />
                <Buttoncus buttonSize="btncus--wide" buttonColor="blue">
                  {buttonLabel}
                </Buttoncus>
              </div>
            </div>
            <div className="home_col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
