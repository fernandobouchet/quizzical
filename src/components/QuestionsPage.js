import QuestionsCard from "./QuestionsCard";

export default function QuestionsPage(props) {
  console.log(props);
  const questionCards = props.questions.map((item) => {
    return (
      <>
        <QuestionsCard
          question={item.question}
          answers={[...item.incorrect_answers, item.correct_answer]}
        />
      </>
    );
  });

  return <>{questionCards}</>;
}
