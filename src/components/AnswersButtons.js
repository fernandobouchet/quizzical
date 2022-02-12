import fixQuotes from "./Utils";

export default function AnswerButtons(props) {
  return (
    <>
      <button className="answer-button">{fixQuotes(props.answer)}</button>
    </>
  );
}
