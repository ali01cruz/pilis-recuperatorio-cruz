import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation.jsx';
import About from "./routes/About/About.jsx";
import Login from "./routes/Login/Login.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./routes/Home/Home.jsx";
import Play from "./routes/Play/Play.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/play' element={<Play />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
