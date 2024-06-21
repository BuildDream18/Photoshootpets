import React from "react";
import { Buttoncus } from "../Buttoncus";
import { Link } from "react-router-dom";
import "./IntroSection.css";

function IntroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  textMode,
}) {
  return (
    <>
      <div className="intro__container">
        <div className="transparency-layer"></div>
        <div className="content">
          <div
            className={lightBg ? "home__intro-section" : "home__intro-section"}
          >
            <div className="intro__container">
              <div
                className="row home__intro-row"
                style={{
                  display: "flex",
                  flexDirection: imgStart === "start" ? "row-reverse" : "row",
                }}
              >
                <div className="intro_col">
                  <div className="home__intro-text-wrapper">
                    <div className="top-line">{topLine}</div>
                    <h1 className={lightText ? "heading" : "heading dark"}>
                      {headline}
                    </h1>
                    <p
                      className={
                        lightTextDesc
                          ? "home__intro-subtitle"
                          : "home_intro-subtitle dark"
                      }
                    >
                      {description}
                    </p>

                    <Buttoncus buttonSize="btncus--wide" buttonColor="blue">
                      {buttonLabel}
                    </Buttoncus>
                  </div>
                </div>
                <div className="intro_col">
                  <div className="home__intro-img-wrapper">
                    <img src={img} alt={alt} className="home__intro-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroSection;
