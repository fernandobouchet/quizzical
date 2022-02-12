import { useState } from "react";
import QuestionsCard from "./QuestionsCard";
import fixQuotes from "./Utils";
import { nanoid } from "nanoid";

export default function QuestionsPage(props) {
  const [answers, setAnswers] = useState(0);

  const [checkAnswer, setCheckAnswer] = useState(false);

  const questionCards = props.questions.map((item) => {
    return (
      <QuestionsCard
        question={fixQuotes(item.question)}
        answers={[...item.incorrect_answers, item.correct_answer]}
        key={nanoid()}
      />
    );
  });

  function handleAnswer() {
    setCheckAnswer(true);
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
            <h2>You scored {answers}/5 answers</h2>
            <button className="play-again">Play again</button>
          </>
        )}
      </div>
    </>
  );
}
