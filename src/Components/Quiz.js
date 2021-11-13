import React, { useState, useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from "../Helpers/QuestionBank";


function Quiz() {
    const { score, setScore, setGameState } = useContext(QuizContext);

    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    // let initialTime = 10;
    // let timeCounter = document.getElementsByClassName(".counter");

    // const timer = () => {
    //     console.log(initialTime);
    //     timeCounter.innerHtml = `<h1>${initialTime}</h1>`;
    //     if (initialTime === 0) {
    //         window.clearInterval(countDown);
    //     }
    //     initialTime = initialTime - 1;
    // }

    // const countDown = setInterval(timer, 1000);

    const nextQuestion = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setCurrQuestion(currQuestion + 1);
    };

    const finishQuiz = () => {
        if (Questions[currQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("endscreen");
    };

    const prevQuestion = () => {
        setCurrQuestion(currQuestion - 1);
    }

    return (
        <div className="Quiz">
            <h1 className="counter"></h1>
            <h1>{Questions[currQuestion].prompt}</h1>
            <div className="options">
                <button className="option-btn" onClick={() => {
                    setOptionChosen("A");
                }}>
                    {Questions[currQuestion].optionA}
                </button>
                <button className="option-btn" onClick={() => {
                    setOptionChosen("B");
                }}>{Questions[currQuestion].optionB}
                </button>
                <button className="option-btn" onClick={() => {
                    setOptionChosen("C");

                }}>{Questions[currQuestion].optionC}
                </button>
                <button className="option-btn" onClick={() => {
                    setOptionChosen("D");
                }}>{Questions[currQuestion].optionD}
                </button>
            </div>

            <div className="nextprev">
                {currQuestion > 0 ? (
                    <button onClick={prevQuestion} className="prev">&lt;-- Prev </button>
                ) : ""}

                {currQuestion === Questions.length - 1 ? (
                    <button onClick={finishQuiz} className="finish">Finish</button>
                ) : (
                    <button onClick={nextQuestion} className="next">Next --&gt;</button>
                )}
            </div>

            <div className="navbtn">
                <button onClick={() => setCurrQuestion(0)}>1</button>
                <button onClick={() => setCurrQuestion(1)}>2</button>
                <button onClick={() => setCurrQuestion(2)}>3</button>
                <button onClick={() => setCurrQuestion(3)}>4</button>
                <button onClick={() => setCurrQuestion(4)}>5</button>
                <button onClick={() => setCurrQuestion(5)}>6</button>
                <button onClick={() => setCurrQuestion(6)}>7</button>
                <button onClick={() => setCurrQuestion(7)}>8</button>
                <button onClick={() => setCurrQuestion(8)}>9</button>
                <button onClick={() => setCurrQuestion(9)}>10</button>
            </div>

        </div>
    );
}

export default Quiz
