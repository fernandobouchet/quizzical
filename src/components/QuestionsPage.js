import QuestionsCard from "./QuestionsCard";
import fixQuotes from "./Utils";
import { nanoid } from "nanoid";
import "./QuestionsPage.css";
import QuestionsPageBottom from "./QuestionsPageBottom";

export default function QuestionsPage(props) {
  const savedScore = [];

  const correctAnswers = [
    ...props.questions.map((question) => question.correct_answer),
  ];

  function saveScore(answerToInsert) {
    if (!savedScore.includes(answerToInsert)) {
      savedScore.push(answerToInsert);
    }
  }

  function showAnswers() {
    const answerButtons = [...document.getElementsByClassName("answer-button")];
    answerButtons.forEach((button) => {
      if (correctAnswers.includes(button.value)) {
        button.className = "selected-true";
      } else {
        button.className = "disabled";
      }
    });
    const selectedButtons = [...document.getElementsByClassName("selected")];
    selectedButtons.forEach((button) => {
      if (correctAnswers.includes(button.value)) {
        button.className = "selected-true";
      } else {
        button.className = "selected-false";
      }
    });
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

  return (
    <div className="question-page-main">
      <div className="questions-container">{questionCards}</div>
      <QuestionsPageBottom
        savedScore={savedScore}
        restartGame={props.restartGame}
        showAnswers={showAnswers}
      />
    </div>
  );
}
