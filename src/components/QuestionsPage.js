import QuestionsCard from "./QuestionsCard";

export default function QuestionsPage(props) {
  const questionCards = props.questions.map((item) => {
    return <QuestionsCard name={item.question} />;
  });

  return <>{questionCards}</>;
}
