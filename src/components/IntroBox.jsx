import React from "react";
import { easeInOut, motion } from "motion/react"
import { useState } from "react";

const IntroBox = () => {
    const [start, setStart] = useState()
  return (
    <motion.div animate={{
        y: start,
    }} transition={{
        duration: 1,
        delay: 0.5,
        ease: easeInOut,
    }} className="absolute w-[calc(100%-50px)] lg:w-1/2 h-1/2 bg-slate-900 text-white inset-1/2 -translate-1/2 rounded-lg p-3 ">
      <h2 className="w-full text-center text-lg font-semibold">
        How to play ?
      </h2>
      <ul className="w-full">
        <li className="w-full">
          <p className="w-full">1.Flip Two Cards</p>
          <p className="w-full">
            {" "}
            Click or tap on two cards to flip them over and reveal the images.
          </p>
        </li>
        <li className="w-full">
          <p className="w-full">2.Check for a Match</p>
          <p className="w-full"> If the cards match, they will disappear.</p>
          <p className="w-full">
            If they don’t match, they will flip back over after a short delay.
          </p>
        </li>
        <li className="w-full">
          <p className="w-full">3.Continue Flipping</p>
          <p className="w-full">
            {" "}
            Keep flipping two cards at a time, trying to remember their
            positions.
          </p>
        </li>
        <li className="w-full">
          <p className="w-full">4.Win the Game</p>
          <p className="w-full">
            {" "}
            The game is over when all matching pairs are found.
          </p>
        </li>
      </ul>
      <div className="w-full flex justify-center items-center lg:mt-5">
        <motion.button whileHover={{
            scale: 1.1,
        }} transition={{
            duration:0.1,
        }} onClick={()=>{
            setStart(-600)
        }} className="bg-slate-50 text-xl cursor-pointer p-1 w-20 rounded text-slate-900 font-bold">Start</motion.button>
      </div>
    </motion.div>
  );
};

export default IntroBox;
