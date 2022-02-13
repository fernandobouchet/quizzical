import fixQuotes from "./Utils";
import "./answersButtons.css";

export default function AnswerButtons(props) {
  function handleClick(e) {
    if (props.answer === props.correctAnswer) {
      props.choose(props.correctAnswer);
      e.event.target.style("background-color:red");
    }
  }
  return (
    <>
      <button className="answer-button" onClick={handleClick}>
        {fixQuotes(props.answer)}
      </button>
    </>
  );
}
