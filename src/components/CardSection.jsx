import React, { useEffect, useState } from "react";
import Card from "./Card";
import cloud from "../assets/cloud.jpg";
import fire from "../assets/fire.jpg";
import leaf from "../assets/leaf.jpg";
import water from "../assets/water.jpg";
import wind from "../assets/wind.jpg";
import apple from "../assets/apple.jpg";
import banana from "../assets/banana.jpg";
import ice from "../assets/ice.jpg";
import donut from "../assets/donut.jpg";
import shell from "../assets/shell.jpg";
import sphere from "../assets/sphere.jpg";
import strawberry from "../assets/strawberry.jpg";
import orange from "../assets/orange.jpg";
import watermelon from "../assets/watermelon.jpg";
import GameOver from "./GameOver";

const CardSection = ({ score, setScore }) => {
  const [suffledCards, setSuffledCards] = useState([]);
  const [firstImg, setFirstImg] = useState("A");
  const [secondImg, setSecondImg] = useState("B");
  const [gameOver, setGAmeOver] = useState(false);
  const [allFlipped, setAllFlipped] = useState(true);
  const [removeCorrect, setRemoveCorrect] = useState(false);

  const Imgcards = [
    cloud,
    fire,
    leaf,
    water,
    wind,
    apple,
    banana,
    ice,
    donut,
    shell,
    sphere,
    strawberry,
    orange,
    watermelon,
  ];
  const SuffleArray = (array) => {
    const suffled = [...array];
    for (let i = suffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [suffled[i], suffled[j]] = [suffled[j], suffled[i]];
    }
    return suffled;
  };
  useEffect(() => {
    const cards = [...Imgcards, ...Imgcards];
    const suffled = SuffleArray(cards);
    setSuffledCards(suffled);
  }, []);

  useEffect(() => {
    if (firstImg === secondImg) {
      setScore(score + 10);
      console.log("correct pair");
      setFirstImg("A");
      setSecondImg("B");
      setRemoveCorrect(!removeCorrect);
    } else if (
      firstImg !== "A" &&
      secondImg !== "B" &&
      secondImg !== firstImg
    ) {
      setFirstImg("A");
      setSecondImg("B");
      
      
    }
  }, [secondImg]);
  useEffect(() => {
    if (score == 140) {
      setGAmeOver(!gameOver);
    }
  }, [score]);

  return (
    <div className="w-full h-auto lg:p-4 lg:h-auto rounded bg-[#3A3A4F] flex flex-wrap justify-around ">
      {gameOver ? (
        <GameOver score={score} setScore={setScore} />
      ) : (
        suffledCards.map((card, ind) => {
          return (
            <div
              key={ind}
              className=" lg:w-[80px] lg:h-[100px] w-18 h-20 m-1.5 rounded overflow-hidden"
            >
              <Card
                firstImg={firstImg}
                secondImg={secondImg}
                setFirstImg={setFirstImg}
                setSecondImg={setSecondImg}
                allFlipped={allFlipped}
                setAllFlipped={setAllFlipped}
                removeCorrect={removeCorrect}
                setRemoveCorrect={setRemoveCorrect}
                img={card}
              />
            </div>
          );
        })
      )}
      {/* {suffledCards.map((card, ind) => {
        return (
          <div
            key={ind}
            className=" lg:w-[80px] lg:h-[100px] w-18 h-20 m-1.5 rounded overflow-hidden"
          >
            <Card
              firstImg={firstImg}
              secondImg={secondImg}
              setFirstImg={setFirstImg}
              setSecondImg={setSecondImg}
              allFlipped={allFlipped}
              setAllFlipped={setAllFlipped}
              removeCorrect={removeCorrect}
              setRemoveCorrect={setRemoveCorrect}
              img={card}
            />
          </div>
        );
      })} */}
    </div>
  );
};

export default CardSection;
