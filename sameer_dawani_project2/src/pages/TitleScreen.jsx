import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './TitleScreen.css';
import DifficultyModal from './DifficultyModal';
import { useState } from 'react';
  

function TitleScreen(){
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const navigateRulesPage = () => {
        navigate(`/rules`); 
    };

    

    return (
        <div>
          <h1>Sameer Wordle Game</h1>
          <button onClick={handleOpenModal}>Play Game</button>

            {isModalOpen && (
            <DifficultyModal onClose={handleCloseModal} />
            )}
            <br />
            <button onClick={navigateRulesPage}>Rules Page</button>
        </div>
      );
}

export default TitleScreen