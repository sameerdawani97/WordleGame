import React, { useState, useRef, useEffect, useContext } from 'react';
import './play.css';
import { difficultyContext } from './DifficultyProvider';

// user validation button componenet when inserting input word.
const UserValidation = (props) => {
    const {attempts, setAttempts} = useContext(difficultyContext);
    const {result, setResult}= useContext(difficultyContext);
    const input = props.input;
    const hiddenWord = props.word;
    const checkUserInput = () => {
        console.log(input);
        console.log(hiddenWord);
        if (input.length !== hiddenWord.length) {
          setResult('Word length does not match.');
          return;
        }

        let tempResult = Array(6);
        let secretLetters = {};
        let seenLetters = {};
        let visited = new Set();
        for (let i = 0; i < hiddenWord.length; i++){
            secretLetters[hiddenWord[i]] = (secretLetters[hiddenWord[i]] || 0 + 1);
        }

        for (let i = 0; i < hiddenWord.length; i++){
            if (input[i] === hiddenWord[i]) {
                tempResult[i] = <span key={i} style={{ color: 'black', backgroundColor: 'green', padding: '5px', margin: '2px', borderRadius: '5px' }}>{input[i]}</span>;
                seenLetters[input[i]] = (seenLetters[input[i]] || 0) + 1;
                visited.add(i);
            }
        }

        for (let i = 0; i < hiddenWord.length; i++){
            if (input[i] !== hiddenWord[i] && hiddenWord.includes(input[i]) && (seenLetters[input[i]] || 0) < secretLetters[input[i]]) {
                tempResult[i] = <span key={i} style={{ color: 'black', backgroundColor: 'yellow', padding: '5px', margin: '2px', borderRadius: '5px' }}>{input[i]}</span>;
                seenLetters[input[i]] = (seenLetters[input[i]] || 0) + 1;
                visited.add(i);
            }
        }

        for (let i = 0; i < hiddenWord.length; i++){
            if (!visited.has(i)){
                tempResult[i] = <span key={i} style={{ color: 'black', backgroundColor: 'grey', padding: '5px', margin: '2px', borderRadius: '5px' }}>{input[i]}</span>;
            }
        }
    
        setResult(tempResult);

        // Check if the word is correct
        if (input === hiddenWord) {
            setResult('Congratulations! Would you like to try again?');
        } else {
            setAttempts(attempts - 1);
            if (attempts === 1) {
            setResult(`You're out of attempts. Ans is: ${hiddenWord}.`);
            }
        }

    }
    return(

        <div><button onClick={checkUserInput}>Submit</button><br /></div>
    );

}

export default UserValidation;
