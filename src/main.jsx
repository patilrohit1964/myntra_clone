import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DataOfContext } from './context/ContextApp.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <DataOfContext>
      <Provider store={store}>
        <App />
      </Provider>
    </DataOfContext>
  </BrowserRouter>

)
