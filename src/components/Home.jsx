import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center flex flex-col text-slate-400">
      <h1 className="text-4xl">Welcome to the Quiz App</h1>
      <p className="mt-4 mb-4">Test your knowledge or create your own quiz!</p>
      <div className='p-4 flex items-center justify-between'>
       <button className='bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full w-32 sm:w-40 lg:w-48 text-lg p-2 transition duration-300 ease-in-out hover:scale-105 text-zinc-800'><Link to='/quiz'>Start the quiz </Link></button> 
       <button className='bg-gradient-to-r from-slate-300 to-slate-500 rounded-full w-32 sm:w-40 lg:w-48 text-lg p-2 transition duration-300 ease-in-out hover:scale-105 text-zinc-800'><Link to='/create-quiz'>Create a quiz </Link></button> 
      </div>
      
    </div>
  );
}

export default Home;
