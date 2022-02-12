import QuestionsCard from "./QuestionsCard";
import fixQuotes from "./Utils";

export default function QuestionsPage(props) {
  const questionCards = props.questions.map((item) => {
    return (
      <>
        <QuestionsCard
          question={fixQuotes(item.question)}
          answers={[...item.incorrect_answers, item.correct_answer]}
        />
      </>
    );
  });

  return <>{questionCards}</>;
}
