import React, { useState, useEffect } from "react";
import { initialResult } from "../jsQuizzes";
import { Link } from "react-router-dom";

function Quiz({ questions }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnsIndx, setSelectedAnsIndx] = useState(null);
  const [iscorrect, setIsCorrect] = useState(null);
  const [results, setResults] = useState(initialResult);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
    }

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  function selectAnswer(ans, index) {
    setSelectedAnsIndx(index);
    setIsCorrect(ans === questions[currentQuestion].correctAnswer);
  }

  function handleNext() {
    if (selectedAnsIndx === null && timeLeft > 0) return;

    setResults((prev) =>
      iscorrect
        ? {
            ...prev,
            score: prev.score + 10,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          },
    );

    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnsIndx(null);
      setTimeLeft(30);
    } else {
      setShowResults(true);
    }
  }

  function handleTryAgain() {
    setShowResults(false);
    setResults(initialResult);
    setCurrentQuestion(0);
    setSelectedAnsIndx(null);
    setIsCorrect(null);
    setTimeLeft(30);
  }

  const { question, choices, correctAnswer } = questions[currentQuestion];

  return (
    <div className="flex items-center justify-center p-4 sm:p-6 lg:p-12">
      <div className="w-full max-w-lg bg-gradient-to-b from-slate-400 to-slate-600 h-auto p-6 sm:p-8 lg:p-12 rounded-2xl shadow-2xl">
        {!showResults ? (
          <>
            <div className="flex justify-between items-center">
              <span className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-b from-violet-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                {currentQuestion + 1}/{questions.length}
              </span>
              <span className="text-lg text-slate-800">{timeLeft}s</span>
            </div>
            <h2 className="font-thin text-xl sm:text-2xl lg:text-3xl py-2 text-slate-800">{question}</h2>
            <ul>
              {choices.map((c, index) => (
                <li
                  key={index}
                  className={
                    selectedAnsIndx === index
                      ? "text-lg sm:text-xl py-2 px-4 bg-blue-500 rounded-full m-2"
                      : "text-lg sm:text-xl py-2 px-4 bg-gradient-to-br from-slate-100 to-slate-300 opacity-65 rounded-full m-2 cursor-pointer transition duration-300 ease-out hover:scale-105"
                  }
                  onClick={() => selectAnswer(c, index)}
                >
                  {c}
                </li>
              ))}
            </ul>
            <div className="py-3 flex items-center justify-center">
              <button
                className={
                  selectedAnsIndx === null
                    ? "rounded-full bg-slate-500 border-2 border-slate-700 border-opacity-65 w-16 sm:w-20 lg:w-24 text-center text-lg p-2 font-sans cursor-not-allowed text-slate-900 text-opacity-65"
                    : "rounded-full bg-slate-500 border-2 border-slate-700 border-opacity-65 w-16 sm:w-20 lg:w-24 text-center text-lg p-2 font-sans cursor-pointer text-slate-900 text-opacity-65 transition duration-300 ease-in-out scale-105 hover:scale-110"
                }
                onClick={handleNext}
                disabled={selectedAnsIndx === null && timeLeft > 0}
              >
                {currentQuestion !== questions.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
          </>
        ) : (
          <div>
            <h3 className="text-center text-2xl sm:text-3xl lg:text-4xl text-stone-800">Result</h3>
            <p className="py-1 text-lg sm:text-xl lg:text-2xl text-center font-extralight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
              Total Questions: <span>{questions.length}</span>
            </p>
            <p className="py-1 text-lg sm:text-xl lg:text-2xl text-center font-extralight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
              Total Score: <span>{results.score}</span>
            </p>
            <p className="py-1 text-lg sm:text-xl lg:text-2xl text-center font-extralight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
              Total Correct Answers: <span>{results.correctAnswers}</span>
            </p>
            <p className="py-1 text-lg sm:text-xl lg:text-2xl text-center font-extralight bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
              Total Wrong Answers: <span>{results.wrongAnswers}</span>
            </p>
            <div className="flex items-center justify-between space-x-4 m-2">
              <button
                onClick={handleTryAgain}
                className="rounded-full border-2 border-slate-700 border-opacity-65 bg-slate-500 w-32 sm:w-40 lg:w-48 text-center text-lg p-2 font-sans cursor-pointer transition duration-300 ease-in-out hover:scale-105"
              >
                Try Again
              </button>
              <button className="rounded-full border-2 border-slate-700 border-opacity-65 bg-slate-500 w-32 sm:w-40 lg:w-48 text-center text-lg p-2 font-sans cursor-pointer transition duration-300 ease-in-out hover:scale-105">
                <Link to="/">Go Home</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
