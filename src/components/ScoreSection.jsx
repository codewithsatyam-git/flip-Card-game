import React from "react";

const ScoreSection = ({score, setScore}) => {
  return (
    <div className="w-full h-[15%] mb-3 lg:mb-5 bg-[#3A3A4F]  text-white rounded flex flex-wrap justify-around py-4 lg:items-center">
      <div className="w-2/3 lg:w-1/3 text-center text-2xl">Score : {score} </div>
    </div>
  );
};

export default ScoreSection;
