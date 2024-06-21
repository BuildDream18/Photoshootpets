import React from "react";
import HeroSection from "../HeroSection";
import StepSection from "../StepSection";
import { homeObjOne, homeObjTwo } from "./Data";
import Pricing from "../Pricing";
import IntroSection from "../IntroSection";

function Home() {
  return (
    <>
      <div
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
          backgroundColor: "#1c2237",
        }}
      >
        <HeroSection {...homeObjOne} />
        <StepSection />
        <IntroSection {...homeObjTwo} />
        <Pricing />
      </div>
    </>
  );
}

export default Home;
