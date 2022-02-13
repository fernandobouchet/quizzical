import fixQuotes from "./Utils";

export default function AnswerButtons(props) {
  function handleClick() {
    if (props.answer === props.correctAnswer) {
      props.choose(props.correctAnswer);
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
