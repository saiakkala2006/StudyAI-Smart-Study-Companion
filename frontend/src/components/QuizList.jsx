import QuizCard from "./QuizCard";

function QuizList({ quiz }) {
  return (
    <div className="mt-10">

      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        🧠 AI Generated Quiz
      </h2>

      {quiz.map((question, index) => (
        <QuizCard
          key={index}
          quiz={question}
          index={index}
        />
      ))}

    </div>
  );
}

export default QuizList;