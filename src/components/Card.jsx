import React, { useEffect, useState } from "react";

const Card = ({
  img,
  firstImg,
  secondImg,
  setSecondImg,
  setFirstImg,
  allFlipped,
  setAllFlipped,
  removeCorrect,
  setRemoveCorrect,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [displayCard, setDisplayCard] = useState("block");
  const [disableCard, setDisableCard] = useState("auto")
  useEffect(() => {
    if (allFlipped == true) {
      setFlipped(false);
    }
  }, [allFlipped]);
  useEffect(() => {
    if (removeCorrect == true && flipped == true) {
      setTimeout(() => {
        setDisplayCard("none");
      }, 1000);
      setRemoveCorrect(!removeCorrect);
    }
  }, [removeCorrect]);
  useEffect(()=>{
    if (flipped) {
      setDisableCard("none")
    } else {
      setDisableCard("auto")
    }
  },[flipped])

  return (
    <div
      onClick={(e) => {
        setFlipped(!flipped);
        setTimeout(() => {
          setAllFlipped(!allFlipped);
        }, 500);
        if (firstImg === "A") {
          setFirstImg(img);
        } else {
          setSecondImg(img);
        }
      }}
      style={{
        perspective: "1000px",
        width: "100%",
        height: "100%",
        display: displayCard,
        pointerEvents: disableCard,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "#D9D9D9",
          }}
        ></div>
        <div
          style={{
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "lightcoral",
            transform: "rotateY(180deg)",
          }}
        >
          <img
            src={img}
            alt="front"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
