import QUESTIONS from "../questions";
import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({
  questionTxt,
  answers,
  onSelect,
  onSkip,
  selectedAnswer,
  answerState,
}) {
  return (
    <div id="question">
      <QuestionTimer
        timeout={10000}
        onTimeout={onSkip}
      />
      <h2>{questionTxt}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelect}
      />
    </div>
  );
}
