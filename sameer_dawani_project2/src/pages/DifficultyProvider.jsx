import { createContext, useState } from "react";
export const difficultyContext = createContext();

// provider for state management.
function DifficultyProvider(props){
    const [selectedDifficulty, setSelectedDifficulty] = useState("normal");
    const [attempts, setAttempts] = useState(6);
    const [result, setResult] = useState('');
    const [letters, setLetters] = useState(['', '', '', '', '', '']);
    const [secretWord, setSecretWord] = useState('');
    return (
        <difficultyContext.Provider value = {{selectedDifficulty, setSelectedDifficulty, attempts, setAttempts, result, setResult, letters, setLetters, secretWord, setSecretWord}}>
            {props.children}
        </difficultyContext.Provider>
    )
}

export default DifficultyProvider