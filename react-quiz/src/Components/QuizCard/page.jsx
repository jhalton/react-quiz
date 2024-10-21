import React from "react";

const QuizCard = ({
  question,
  firstOption,
  secondOption,
  thirdOption,
  fourthOption,
  name,
}) => {
  return (
    <div>
      <form>
        <label>{question}</label> <br />
        <input type="radio" id="first-option" name={name} />
        <label for="first-option">{firstOption}</label> <br />
        <input type="radio" id="second-option" name={name} />
        <label for="second-option">{secondOption}</label> <br />
        <input type="radio" id="third-option" name={name} />
        <label for="third-option">{thirdOption}</label> <br />
        <input type="radio" id="fourth-option" name={name} />
        <label for="fourth-option">{fourthOption}</label> <br />
      </form>
    </div>
  );
};

export default QuizCard;
