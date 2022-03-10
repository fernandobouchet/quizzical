import fixQuotes from "./Utils";
import "./answersButtons.css";

export default function AnswerButtons(props) {
  function resetClass(e) {
    const buttons = document.getElementsByName(e.target.name);
    buttons.forEach((button) => (button.className = "answer-button"));
  }

  function handleClick(e) {
    resetClass(e);
    e.target.className += " selected";

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
        name={props.question}
      >
        {fixQuotes(props.answer)}
      </button>
    </>
  );
}
