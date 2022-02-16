import { useState } from "react";

export default function QuestionsPageBottom(props) {
  const [correctAnswers, setcorrectAnswers] = useState([]);

  const [checkAnswer, setCheckAnswer] = useState(false);

  function handleAnswer() {
    setCheckAnswer(true);
    setcorrectAnswers(props.savedScore);
    props.showAnswers();
  }

  function handlePlayAgain() {
    props.restartGame();
    setCheckAnswer(false);
    setcorrectAnswers([]);
  }

  return (
    <div className="bottom-questions-page">
      {!checkAnswer ? (
        <>
          <button className="page-question-buttons" onClick={handleAnswer}>
            Check answers
          </button>
        </>
      ) : (
        <div className="score-container">
          <h2 className="score-result">
            You scored {correctAnswers.length}/5 correct answers
          </h2>
          <button className="page-question-buttons" onClick={handlePlayAgain}>
            Play again
          </button>
        </div>
      )}
    </div>
  );
}
