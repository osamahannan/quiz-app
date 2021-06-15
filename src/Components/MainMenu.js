import React,{useContext} from 'react';
import '../App.css';
import {QuizContext} from '../Helpers/Contexts';

export default function MainMenu() {
    const { setGameState } = useContext(QuizContext);
    return (
        <div className="Menu">
            <button 
            onClick = {() => {
                setGameState("quiz")
                }}
                >
                Start Quiz
                </button>
        </div>
    )
}

