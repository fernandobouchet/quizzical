import AnswerButtons from "./AnswersButtons";
import { nanoid } from "nanoid";
import "./QuestionCard.css";

export default function QuestionsCard(props) {
  const answerButtons = props.answers.map((answer) => {
    return (
      <AnswerButtons
        answer={answer}
        correctAnswer={props.correctAnswer}
        key={nanoid()}
        choose={props.choose}
      />
    );
  });

  return (
    <section className="questions-container">
      <h2 className="question">{props.question}</h2>
      <section className="answers-container">{answerButtons}</section>
    </section>
  );
}
