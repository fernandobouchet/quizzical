import AnswerButtons from "./AnswersButtons";

export default function QuestionsCard(props) {
  const answerButtons = props.answers.map((answer) => {
    return <AnswerButtons answer={answer} />;
  });

  return (
    <section className="question-card">
      <h2 className="question">{props.question}</h2>
      {answerButtons}
    </section>
  );
}
