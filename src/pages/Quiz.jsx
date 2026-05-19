import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import "./Quiz.css";

function calculateMbti(answers) {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  answers.forEach((type) => {
    scores[type]++;
  });
  return (
    (scores.E >= scores.I ? "E" : "I") +
    (scores.S >= scores.N ? "S" : "N") +
    (scores.T >= scores.F ? "T" : "F") +
    (scores.J >= scores.P ? "J" : "P")
  );
}

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const question = questions[current];
  const progress = ((current / questions.length) * 100).toFixed(0);

  function handleSelect(type) {
    setSelected(type);
    setTimeout(() => {
      const newAnswers = [...answers, type];
      if (current + 1 >= questions.length) {
        const result = calculateMbti(newAnswers);
        navigate(`/result/${result}`);
      } else {
        setCurrent(current + 1);
        setAnswers(newAnswers);
        setSelected(null);
      }
    }, 400);
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <button className="btn-back" onClick={() => navigate("/")}>
          ← 홈
        </button>
        <span className="quiz-count">
          {current + 1} / {questions.length}
        </span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="quiz-card">
        <p className="quiz-number">Q{current + 1}</p>
        <h2 className="quiz-question">{question.text}</h2>

        <div className="quiz-options">
          <button
            className={`option-btn ${selected === question.a.type ? "selected" : ""}`}
            onClick={() => handleSelect(question.a.type)}
            disabled={selected !== null}
          >
            <span className="option-label">A</span>
            <span className="option-text">{question.a.text}</span>
          </button>

          <button
            className={`option-btn ${selected === question.b.type ? "selected" : ""}`}
            onClick={() => handleSelect(question.b.type)}
            disabled={selected !== null}
          >
            <span className="option-label">B</span>
            <span className="option-text">{question.b.text}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
