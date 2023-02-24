import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ObjFilterContext } from '../../contexts/ObjFilterContext';

function TriviaApp() {
  const navigate = useNavigate()
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [limit, setLimit] = useState(10);
  const [questions, setQuestions] = useState([]);
  const {setObjFilter} = useContext(ObjFilterContext);

  const getQuestions = async () => {
    const url = `https://the-trivia-api.com/api/questions?categories=${category}&limit=${limit}&difficulty=${difficulty}`;
    const response = await axios.get(url);
    setQuestions(response.data);
    setObjFilter(questions);
    navigate('/play')
  }

  return (
    <div>
      
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
      
    </div>
  );
}

export default TriviaApp;

