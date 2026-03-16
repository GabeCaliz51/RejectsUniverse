import { useState } from 'react';

export default function Trivia() {
    const questions = [
        {
            q: "What is the best way to handle an internet troll?",
            options: ["Ignore them", "Cry about it", "Troll them back harder", "Call the police"],
            correct: 2
        },
        {
            q: "Which word best describes The Rejects?",
            options: ["Polite", "Safe", "Off The Wall", "Quiet"],
            correct: 2
        },
        {
            q: "What year did the world lose its sense of humor?",
            options: ["2012", "2016", "2020", "It never did"],
            correct: 1 // Subjective joke answer
        }
    ];

    const [currentQ, setCurrentQ] = useState(0);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (index) => {
        if (index === questions[currentQ].correct) {
            setScore(score + 1);
        }

        if (currentQ + 1 < questions.length) {
            setCurrentQ(currentQ + 1);
        } else {
            setFinished(true);
        }
    };

    return (
        <div className="container section-padding text-center container-small">
            <h1>DAILY TRIVIA</h1>

            {!finished ? (
                <div className="card mt-2 p-2">
                    <h3 className="text-secondary mb-1">Question {currentQ + 1} of {questions.length}</h3>
                    <h2 style={{ border: 'none', fontSize: '2rem', marginBottom: '2rem' }}>{questions[currentQ].q}</h2>

                    <div className="grid-2-col gap-1">
                        {questions[currentQ].options.map((opt, i) => (
                            <button key={i} onClick={() => handleAnswer(i)}
                                className="btn t-none p-2"
                                style={{ fontSize: '1rem' }}>
                                {opt}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="card mt-2 p-2">
                    <h2 className="text-primary">GAME OVER</h2>
                    <p style={{ fontSize: '1.5rem' }}>You scored {score} out of {questions.length}</p>
                    <p className="mt-1">
                        {score === questions.length ? "YOU ARE A LEGEND!" : "TRY HARDER NEXT TIME."}
                    </p>
                    <button className="btn mt-2" onClick={() => { setFinished(false); setCurrentQ(0); setScore(0) }}>
                        PLAY AGAIN
                    </button>
                </div>
            )}
        </div>
    );
}
