import { useState } from "react";
import QuestionsCard from "./QuestionsCard";
import fixQuotes from "./Utils";
import { nanoid } from "nanoid";

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
  }

  return (
    <>
      <div className="questions-container">{questionCards}</div>
      <div className="bottom-questions-page">
        {!checkAnswer ? (
          <button className="check-answer-button" onClick={handleAnswer}>
            Check answers
          </button>
        ) : (
          <>
            <h2>You scored {answers.length}/5 answers</h2>
            <button className="play-again" onClick={handlePlayAgain}>
              Play again
            </button>
          </>
        )}
      </div>
    </>
  );
}
