import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation.jsx';
import Login from "./routes/Login/Login.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./routes/Home/Home.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='/Home'  element={<Home/>}/>
          <Route path='/login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
