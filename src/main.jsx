import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DataOfContext } from './context/ContextApp.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataOfContext>
        <App />
      </DataOfContext>
    </BrowserRouter>
  </React.StrictMode>,
)
