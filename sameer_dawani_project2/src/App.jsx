import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TitleScreen from './pages/TitleScreen';
import PlayNormalPage from './pages/PlayNormalPage';
import PlayHardPage from './pages/PlayHardPage';
import RulesPage from './pages/RulesPage';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<TitleScreen />} />
        <Route path="/normal" element={<PlayNormalPage />} />
        <Route path="/hard" element={<PlayHardPage />} />
        <Route path="/rules" element={<RulesPage />} />
      </Routes>
    </Router>
  )
}

export default App
