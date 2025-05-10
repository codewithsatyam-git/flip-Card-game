import React, { useState } from "react";
import CardSection from "./CardSection";
import ScoreSection from "./ScoreSection";
import IntroBox from "./IntroBox";

const HeroSection = () => {
    const [score, setScore] = useState(0);
  return (
    <div className="w-screen h-screen overflow-hidden p-3 lg:px-40">
      <ScoreSection score={score} setScore={setScore}/>
      <CardSection score={score} setScore={setScore} />
      <IntroBox/>
    </div>
  );
};

export default HeroSection;
