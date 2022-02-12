import { useEffect, useState } from "react";
import QuestionsPage from "./QuestionsPage";

export default function Main() {
  const [questions, setQuestions] = useState({});

  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    async function getQuestions() {
      try {
        const res = await fetch(
          "https://opentdb.com/api.php?amount=5&category=11&difficulty=easy&type=multiple"
        );
        const data = await res.json();
        setQuestions(data.results);
        console.log(questions);
      } catch (error) {
        console.log(error);
      }
    }
    getQuestions();
  }, []);

  function handleClick() {
    setStartGame(true ? true : false);
  }

  return (
    <>
      {startGame && questions.length > 1 ? (
        <QuestionsPage questions={questions} />
      ) : (
        <>
          <h1 className="main-tittle">Quizzical</h1>
          <h2 className="main-description">Some description if needed</h2>
          <button className="main-start-button" onClick={handleClick}>
            Start Quiz
          </button>
        </>
      )}
    </>
  );
}