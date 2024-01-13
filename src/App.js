import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties :
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [ 
    {
      text: "Question: What does HTML stand for?",
      options: [
        { id: 0, text: "A. Hyper Text Markup Language", isCorrect: true },
        { id: 1, text: "B. High Tech Markup Language", isCorrect: false },
        { id: 2, text: "C. Hyperlink and Text Markup Language", isCorrect: false },
        { id: 3, text: "D. Home Tool Markup Language", isCorrect: false },
      ],
    },
    {
      text: "Question: Which property is used to change the text color in CSS?",
      options: [
        { id: 0, text: "A. color", isCorrect: true },
        { id: 1, text: "B. text-color", isCorrect: false },
        { id: 2, text: "C. font-color", isCorrect: false },
        { id: 3, text: "D. textColor", isCorrect: false },
      ],
    },
    {
      text: "Question: What is the purpose of the `addEventListener` method in JavaScript?",
      options: [
        { id: 0, text: "A. To add styles to elements", isCorrect: false },
        { id: 1, text: "B. To handle events like clicks or keypresses", isCorrect: true },
        { id: 2, text: "C. To create animations", isCorrect: false },
        { id: 3, text: "D. To define variables", isCorrect: false },
      ],
    },
    {
      text: "Question: Which framework is commonly used for building user interfaces in JavaScript?",
      options: [
        { id: 0, text: "A. Django", isCorrect: false },
        { id: 1, text: "B. Angular", isCorrect: true },
        { id: 2, text: "C. Flask", isCorrect: false },
        { id: 3, text: "D. Laravel", isCorrect: false },
      ],
    },
    {
      text: "Question: What is the purpose of HTTPS in web development?",
      options: [
        { id: 0, text: "A. HyperText Transfer Protocol Secure ensures faster data transfer", isCorrect: false },
        { id: 1, text: "B. HTTP for External and Public Security", isCorrect: false },
        { id: 2, text: "C. HTTP Secure encrypts data transmitted between the browser and the server", isCorrect: true },
        { id: 3, text: "D. HyperText Transfer Protocol for Secure Browsing", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Web Development-Quiz </h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
