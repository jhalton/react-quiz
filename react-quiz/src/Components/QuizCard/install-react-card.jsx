import React from "react";
import QuizCard from "./page";

const InstallReactCard = () => {
  const question = "What command is used to create a new React app?";
  const firstOption = "first";
  const secondOption = "second";
  const thirdOption = "third";
  const fourthOption = "fourth";
  const name = "a1";

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

export default InstallReactCard;
