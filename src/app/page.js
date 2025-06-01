"use client";

import { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of India?',
    options: ['Delhi', 'Mumbai', 'Kolkata', 'Chennai'],
    answer: 'Delhi',
  },
  {
    question: '2 + 2 = ?',
    options: ['3', '4', '5', '6'],
    answer: '4',
  },
  {
    question: 'What color is the sky?',
    options: ['Green', 'Blue', 'Red', 'Black'],
    answer: 'Blue',
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🧠 Simple Quiz App</h1>

      {showScore ? (
        <h2>Your score: {score} / {questions.length}</h2>
      ) : (
        <div>
          <h2>{questions[current].question}</h2>
          {questions[current].options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              style={{
                display: 'block',
                margin: '8px 0',
                padding: '10px 20px',
                cursor: 'pointer',
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
