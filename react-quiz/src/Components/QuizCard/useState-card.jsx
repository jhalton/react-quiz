import React from "react";
import QuizCard from "./page";

const UseStateCard = () => {
  const question = "What is the useState hook used for?";
  const firstOption = "first";
  const secondOption = "second";
  const thirdOption = "third";
  const fourthOption = "fourth";
  const name = "b2";
  return (
    <div>
      <QuizCard
        question={question}
        firstOption={firstOption}
        secondOption={secondOption}
        thirdOption={thirdOption}
        fourthOption={fourthOption}
        name={name}
      />
    </div>
  );
};

export default UseStateCard;
