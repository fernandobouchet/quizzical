import { useState } from "react";
import QuestionsCard from "./QuestionsCard";
import fixQuotes from "./Utils";
import { nanoid } from "nanoid";
import "./QuestionsPage.css";

export default function QuestionsPage(props) {
  const [answers, setAnswers] = useState([]);

  const [checkAnswer, setCheckAnswer] = useState(false);

  function updateScore(answerToInsert) {
    if (!answers.includes(answerToInsert)) {
      setAnswers((prevAnswers) => {
        return [...prevAnswers, answerToInsert];
      });
      console.log(answers);
    }
  }

  const questionCards = props.questions.map((item) => {
    return (
      <QuestionsCard
        question={fixQuotes(item.question)}
        answers={[...item.incorrect_answers, item.correct_answer]}
        correctAnswer={fixQuotes(item.correct_answer)}
        choose={updateScore}
        key={nanoid()}
      />
    );
  });

  function handleAnswer() {
    setCheckAnswer(true);
  }

  function handlePlayAgain() {
    props.restartGame();
    setCheckAnswer(false);
    setAnswers([]);
  }

  return (
    <div className="question-page-main">
      <div className="questions-container">{questionCards}</div>
      <div className="bottom-questions-page">
        {!checkAnswer ? (
          <button className="page-question-buttons" onClick={handleAnswer}>
            Check answers
          </button>
        ) : (
          <div className="score-container">
            <h2 className="score-result">
              You scored {answers.length}/5 correct answers
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
