import AnswerButtons from "./AnswersButtons";
import { nanoid } from "nanoid";
import "./QuestionCard.css";

export default function QuestionsCard(props) {
  const answers = props.answers.sort(() => Math.random() - 0.5);
  const answerButtons = answers.map((answer) => {
    return (
      <AnswerButtons
        question={props.question}
        answer={answer}
        correctAnswer={props.correctAnswer}
        key={nanoid()}
        choose={props.choose}
      />
    );
  });

  return (
    <section className="question-container">
      <h2 className="question">{props.question}</h2>
      <section className="answers-container">{answerButtons}</section>
    </section>
  );
}
