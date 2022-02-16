import fixQuotes from "./Utils";
import "./answersButtons.css";

export default function AnswerButtons(props) {
  function handleClick(e) {
    console.log(e.target);
    e.target.className === "answer-button"
      ? (e.target.className = "selected")
      : (e.target.className = "answer-button");

    if (props.answer === props.correctAnswer) {
      props.choose(props.correctAnswer);
    }
  }
  return (
    <>
      <button
        className="answer-button"
        onClick={handleClick}
        value={props.answer}
      >
        {fixQuotes(props.answer)}
      </button>
    </>
  );
}
