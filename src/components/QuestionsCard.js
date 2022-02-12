export default function QuestionsCard(props) {
  return (
    <section className="question-card">
      <h2 className="question">{props.name}</h2>
      <button className="options">Answers</button>
    </section>
  );
}
