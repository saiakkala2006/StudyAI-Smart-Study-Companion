import { useState } from "react";

function QuizCard({ quiz, index }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (option) => {
    if (selected) return;

    setSelected(option);
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-6 shadow-xl mb-6">

      <h2 className="text-xl font-bold text-white mb-6">
        {index + 1}. {quiz.question}
      </h2>

      <div className="space-y-3">

        {quiz.options.map((option, i) => {

          let color =
            "bg-slate-700 hover:bg-slate-600 text-white";

          if (selected) {

            if (option === quiz.answer) {
              color = "bg-green-600 text-white";
            }

            if (
              option === selected &&
              option !== quiz.answer
            ) {
              color = "bg-red-600 text-white";
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleClick(option)}
              className={`w-full text-left rounded-xl px-5 py-4 transition ${color}`}
            >
              {option}
            </button>
          );

        })}

      </div>

      {selected && (

        <div className="mt-6">

          {selected === quiz.answer ? (

            <p className="text-green-400 font-semibold">
              ✅ Correct!
            </p>

          ) : (

            <p className="text-red-400 font-semibold">
              ❌ Correct Answer: {quiz.answer}
            </p>

          )}

        </div>

      )}

    </div>
  );
}

export default QuizCard;