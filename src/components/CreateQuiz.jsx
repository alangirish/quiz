import React, { useState } from "react";

function CreateQuiz({ onSaveQuiz }) {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState(0);

  const handleChoiceChange = (index, value) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    setChoices(newChoices);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && choices.every((choice) => choice) && correctAnswer !== null) {
      const newQuiz = {
        question,
        choices,
        correctAnswer: choices[correctAnswer],
      };
      onSaveQuiz(newQuiz);
      setQuestion("");
      setChoices(["", "", "", ""]);
      setCorrectAnswer(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gradient-to-b from-slate-400 to-slate-600 rounded-2xl shadow-2xl">
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-900">
          Question:
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="mt-1 block w-full bg-transparent border-2 border-slate-700 rounded-lg p-2"
        />
      </div>
      <div className="mb-4">
        {choices.map((choice, index) => (
          <div key={index} className="mb-2">
            <label className="block text-sm font-medium text-slate-900">
              Choice {index + 1}:
            </label>
            <input
              type="text"
              value={choice}
              onChange={(e) => handleChoiceChange(index, e.target.value)}
              className="mt-1 block w-full bg-transparent border-2 border-slate-700 rounded-lg p-2"
            />
          </div>
        ))}
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-900">
          Correct Answer:
        </label>
        <select
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(parseInt(e.target.value))}
          className="mt-1 block w-full bg-transparent border-2 border-slate-700 rounded-lg text-slate-900 p-2"
        >
          {choices.map((_, index) => (
            <option key={index} value={index}>
              Choice {index + 1}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-slate-300 to-slate-500 text-zinc-800 rounded-md py-2 transition duration-300 ease-in-out hover:scale-105"
      >
        Save Quiz
      </button>
    </form>
  );
}

export default CreateQuiz;
