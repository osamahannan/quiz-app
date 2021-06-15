import React, { useContext } from 'react';
import '../App.css';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/QuestionBank';
import "../Helpers/QuestionBank";

function EndScreen() {

    const { score, setScore, setGameState } = useContext(QuizContext);

    const restartQuiz = () => {
        setScore(0);
        setGameState("menu");
    };

    return (

        <div className="EndScreen">
            <h1>Quiz Finished</h1>
            <h3> Your Score: {score} / {Questions.length}</h3>
            <button onClick = {restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen
