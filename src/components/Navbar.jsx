import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-transparent p-4">
      <ul className="flex items-center justify-center space-x-14 ">
        <li>
          <Link to="/" className="text-slate-600 text-xl hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/quiz" className="text-slate-600 text-xl hover:text-gray-400">Quiz</Link>
        </li>
        <li>
          <Link to="/create-quiz" className="text-slate-600 text-xl hover:text-gray-400">Create Quiz</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
