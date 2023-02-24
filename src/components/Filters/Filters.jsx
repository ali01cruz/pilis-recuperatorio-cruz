import React, { useState } from 'react';
import axios from 'axios';

function TriviaApp() {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [limit, setLimit] = useState(10);
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    const url = `https://the-trivia-api.com/api/questions?categories=${category}&limit=${limit}&difficulty=${difficulty}`;
    const response = await axios.get(url);
    setQuestions(response.data);
  }

  return (
    <div>
      <h1>Trivia App</h1>
      <div>
        <label htmlFor="category-select">Category:</label>
        <select id="category-select" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Any Category</option>
          <option value="geography">Geography</option>
          <option value="history">History</option>
          <option value="science">Science</option>
        </select>
      </div>
      <div>
        <label htmlFor="difficulty-select">Difficulty:</label>
        <select id="difficulty-select" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="">Any Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        <label htmlFor="limit-select">Limit:</label>
        <input type="number" id="limit-select" value={limit} onChange={(e) => setLimit(e.target.value)} />
      </div>
      <button onClick={getQuestions}>Start Trivia</button>
      {questions.length > 0 && (
        <div>
          <h2>Trivia Questions</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>
                {question.question} - {question.difficulty} - {question.category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TriviaApp;

