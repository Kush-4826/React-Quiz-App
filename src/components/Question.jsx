import { useState } from "react";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({ index, onSelect, onSkip, userQuestions }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  function handleSelectAnswer(answer) {
    setAnswer((prevState) => ({
      selectedAnswer: answer,
      isCorrect: null,
    }));

    setTimeout(() => {
      setAnswer((prevState) => ({
        selectedAnswer: answer,
        isCorrect: userQuestions[index].answers[0] === answer,
      }));

      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkip : null}
        mode={answerState}
        key={timer}
      />
      <h2>{userQuestions[index].text}</h2>
      <Answers
        answers={userQuestions[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}
