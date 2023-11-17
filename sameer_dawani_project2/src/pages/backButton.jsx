import React from "react";
import { useNavigate } from 'react-router-dom';

function BackButton(){

    const navigate = useNavigate();
    const handleStartGame = () => {
        navigate(`/`);
    };

    return (
        <div>
            <button onClick = {handleStartGame}>Back</button>
        </div>
        
    );
}
export default BackButton;