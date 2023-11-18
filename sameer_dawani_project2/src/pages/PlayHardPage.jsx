import React, { useState, useRef, useEffect, useContext } from 'react';
import './play.css';
import { difficultyContext } from './DifficultyProvider';
import UserValidation from './userValidation';
import BackButton from './backButton';
import ResetButton from './ResetButton';

//componenet to play hard game.
const PlayNormalPage = () => {

    const {secretWord, setSecretWord}= useContext(difficultyContext);
    const {attempts, setAttempts} = useContext(difficultyContext);
    const {result, setResult}= useContext(difficultyContext);
    const {letters, setLetters} = useContext(difficultyContext);
    const inputRefs = useRef([]);

    const handleInputChange = (index, value) => {
        const newLetters = [...letters];

        if (/[a-zA-Z]/.test(value)) {
        newLetters[index] = value.toUpperCase();
        
        // Move to the next input field automatically
        if (index < letters.length - 1 && value !== '') {
            inputRefs.current[index + 1].focus();
        }
        } else {
        // Handle the case when deleting a letter and go back to the previous input
        newLetters[index] = '';
        if (index > 0) {
            inputRefs.current[index - 1].focus();
        }
        }

        setLetters(newLetters);
    };

    const restart = () => {
        const newSecretWord = generateSecretWord();
        setSecretWord(newSecretWord);
        setLetters(['', '', '', '', '', '', '']);
        setAttempts(5);
        setResult('');
    };

    const generateSecretWord = () => {
        const hard = ['Freedom', 'Weather', 'Explore', 'Journey', 'Library', 'Justice', 'Silence', 'Healthy', 'Perfect', 'Control'];
        const randomIndex = Math.floor(Math.random() * hard.length);
        return hard[randomIndex].toUpperCase();
    };
 
    useEffect(() => {
        restart();
        }, []);

  return (
    <div>
        <h1>Wordle Game</h1>
        <p>Attempts remaining: {attempts}</p>
        <p>{result}</p>
        <div className="otp-input-container">
        {letters.map((letter, index) => (
            <input
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            type="text"
            value={letter}
            maxLength="1"
            onChange={(e) => handleInputChange(index, e.target.value)}
            />
            ))}
        </div>
        {/* <button onClick={checkUserInput}>Submit</button><br /> */}
        <UserValidation input={letters.join('')}  word={secretWord} />
        {/* <button onClick={startNewGame}> Start Again </button> */}
        <ResetButton />
        <BackButton />
           
    </div>
  );
};

export default PlayNormalPage;
