import quizCompleteImage from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  ).length;
  const wrongAnswers = userAnswers.length - (skippedAnswers + correctAnswers);

  const skippedAnswersShare = Math.round(
    (skippedAnswers / userAnswers.length) * 100
  );
  const correctAnswersShare = Math.round(
    (correctAnswers / userAnswers.length) * 100
  );
  const wrongAnswersShare = Math.round(
    (wrongAnswers / userAnswers.length) * 100
  );

  return (
    <div id="summary">
      <img src={quizCompleteImage} alt="" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersShare}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersShare}%</span>
          <span className="text">Answered Correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersShare}%</span>
          <span className="text">Answered Incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          const isAnswerCorrect = answer === QUESTIONS[index].answers[0];

          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (isAnswerCorrect) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped!"}</p>
              {!isAnswerCorrect && (
                <p className="user-answer">
                  Correct Answer: {QUESTIONS[index].answers[0]}
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
