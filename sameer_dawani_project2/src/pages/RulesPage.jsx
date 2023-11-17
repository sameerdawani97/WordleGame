import React from "react";
import BackButton from "./backButton";
import './rules.css';
function RulesPage(){
    return (
        <div>
            <h1>
                Rules Page
            </h1>
            <h2><u>Normal Game</u></h2>
            <ul>
                <li>For Normal Game, You have to enter six letters to match a word.</li>
                <li>If a letter becomes green, then that letter is in correct place. </li>
                <li>If a letter becomes yellow, it means that letter is in word but at different location.</li>
                <li>If a letter becomes grey, it means that letter is not present in that word.</li>
                <li>Maximum number of attempts to guess the right answer is 6</li>
                
            </ul>
                
            <h2><u>Hard Game</u></h2>
            <ul>
                <li>For Normal Game, You have to enter six letters to match a word.</li>
                <li>If a letter becomes green, then that letter is in correct place. </li>
                <li>If a letter becomes yellow, it means that letter is in word but at different location.</li>
                <li>If a letter becomes grey, it means that letter is not present in that word.</li>
                <li>Maximum number of attempts to guess the right answer is 5</li>
            </ul>
            < BackButton />
        </div>
    );
}

export default RulesPage