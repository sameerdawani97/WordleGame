import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DifficultyProvider from './pages/DifficultyProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <DifficultyProvider>
      <App />
    </DifficultyProvider>
  
  </React.StrictMode>,
)
