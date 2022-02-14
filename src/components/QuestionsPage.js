import { useState } from "react";
import QuestionsCard from "./QuestionsCard";
import fixQuotes from "./Utils";
import { nanoid } from "nanoid";
import "./QuestionsPage.css";

export default function QuestionsPage(props) {
  const [correctAnswers, setcorrectAnswers] = useState([]);

  const [checkAnswer, setCheckAnswer] = useState(false);

  const savedScore = [];

  function updateScore(answers) {
    setcorrectAnswers(answers);
  }

  function saveScore(answerToInsert) {
    if (!savedScore.includes(answerToInsert)) {
      savedScore.push(answerToInsert);
    }
  }

  const questionCards = props.questions.map((item) => {
    return (
      <QuestionsCard
        question={fixQuotes(item.question)}
        answers={[...item.incorrect_answers, item.correct_answer]}
        correctAnswer={fixQuotes(item.correct_answer)}
        choose={saveScore}
        key={nanoid()}
      />
    );
  });

  function handleAnswer() {
    setCheckAnswer(true);
    updateScore(savedScore);
  }

  function handlePlayAgain() {
    props.restartGame();
    setCheckAnswer(false);
    setcorrectAnswers([]);
  }

  return (
    <div className="question-page-main">
      <div className="questions-container">{questionCards}</div>
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
    </div>
  );
}
