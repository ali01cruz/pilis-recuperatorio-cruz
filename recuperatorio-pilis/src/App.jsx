import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from "./components/Login";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
