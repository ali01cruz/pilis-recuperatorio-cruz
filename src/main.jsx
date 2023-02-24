import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import { HashRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { ObjFilterProvider } from "./contexts/ObjFilterContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
      <HashRouter>
        <ObjFilterProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ObjFilterProvider>
      </HashRouter>
    
  </React.StrictMode>,
)
