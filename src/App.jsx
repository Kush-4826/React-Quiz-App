import Header from "./components/Header";
import Quiz from "./components/Quiz";
import QUESTIONS from "./questions.js";

function App() {
  const shuffledQuestions = [...QUESTIONS];
  shuffledQuestions.sort(() => Math.random() - 0.5);

  return (
    <>
      <Header />
      <main>
        <Quiz questions={shuffledQuestions} />
      </main>
    </>
  );
}

export default App;
