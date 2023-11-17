import {React, useContext, useEffect} from "react";
import { difficultyContext } from "./DifficultyProvider";

function ResetButton(){
    const {secretWord, setSecretWord}= useContext(difficultyContext);
    const {attempts, setAttempts} = useContext(difficultyContext);
    const {result, setResult}= useContext(difficultyContext);
    const {letters, setLetters} = useContext(difficultyContext);
    const {selectedDifficulty, setSelectedDifficulty} = useContext(difficultyContext);
    const restart = () => {
        const newSecretWord = generateSecretWord();
        setSecretWord(newSecretWord);
        if (selectedDifficulty === 'normal'){
            setLetters(['', '', '', '', '', '']);
            setAttempts(6);
        }
        if (selectedDifficulty === 'hard'){
            setLetters(['', '', '', '', '', '', '']);
            setAttempts(5);
        }
        setResult('');
    };

        // Function to generate a random word based on difficulty
    const generateSecretWord = () => {
        if (selectedDifficulty === 'normal'){
            const normal = ['little', 'wordle', 'Banana', 'Circle', 'purple', 'Rocket', 'Winter', 'Square', 'Camera', 'Doctor'];
            const randomIndex = Math.floor(Math.random() * normal.length);
            return normal[randomIndex].toUpperCase();
        }
        if (selectedDifficulty === 'hard'){
            const hard = ['Freedom', 'Weather', 'Explore', 'Journey', 'Library', 'Justice', 'Silence', 'Healthy', 'Perfect', 'Control'];
            const randomIndex = Math.floor(Math.random() * hard.length);
            return hard[randomIndex].toUpperCase();
        }
    };

    useEffect(() => {
        restart();
        }, []);

    return (
        <div>
            <button onClick = {restart}>Start Again</button>
        </div>
        
    );
}
export default ResetButton;