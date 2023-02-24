import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { HashRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <App />
      </UserProvider>
    </HashRouter>

  </React.StrictMode>,
)
