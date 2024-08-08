import { jsQuizzes } from './jsQuizzes';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Quiz from './components/Quiz';
import CreateQuiz from './components/CreateQuiz'; // We will create this later

function App() {
  const [quizQuestions, setQuizQuestions] = useState(jsQuizzes.questions);

  function handleChange(newQuestion) {
    setQuizQuestions([...quizQuestions, newQuestion]);
  }

  return (
    <div className='bg-gradient-to-br from-slate-900 to-slate-700 h-screen overflow-hidden'>
      <Router>
        <Navbar />
        <div className='flex flex-col items-center justify-center min-h-screen p-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz questions={quizQuestions} />} />
            <Route path="/create-quiz" element={<CreateQuiz onSaveQuiz={handleChange} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
