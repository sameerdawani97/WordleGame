// DifficultyModal.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './DifficultyModal.css'
import {difficultyContext} from './DifficultyProvider';

const DifficultyModal = ({ onClose }) => {
  const navigate = useNavigate();
  const {selectedDifficulty, setSelectedDifficulty, attempts, setAttempts, result, setResult} = useContext(difficultyContext);
  const {letters, setLetters} = useContext(difficultyContext);

  const handleSelectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
    if (difficulty === "normal"){
      setAttempts(6);
      setLetters(['', '', '', '', '', '']);
    }
    if(difficulty === "hard"){
      setAttempts(5);
      setLetters(['', '', '', '', '', '', '']);
    }
  };

  const handleStartGame = () => {
    if (selectedDifficulty) {
      navigate(`/${selectedDifficulty}`);
      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal">
      <label>
        <input
          type="radio"
          value="normal"
          checked={selectedDifficulty === 'normal'}
          onChange={() => handleSelectDifficulty('normal')}
        />
        Normal
      </label>
      <label>
        <input
          type="radio"
          value="hard"
          checked={selectedDifficulty === 'hard'}
          onChange={() => handleSelectDifficulty('hard')}
        />
        Hard
      </label><br />
      <button onClick={handleStartGame}>Start Game</button>&nbsp;
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default DifficultyModal;
