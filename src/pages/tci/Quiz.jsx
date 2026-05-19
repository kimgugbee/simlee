import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tciQuestions } from "../../data/tciQuestions";
import "../egenteto/styles.css";

function calculateTci(answers) {
  const scores = { NS: 0, HA: 0, RD: 0, PS: 0, SD: 0, CO: 0, ST: 0 };
  tciQuestions.forEach((q, i) => {
    if (answers[i] === "A") scores[q.dimension]++;
  });
  return scores;
}

export default function TciQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const navigate = useNavigate();

  const question = tciQuestions[current];
  const progress = ((current / tciQuestions.length) * 100).toFixed(0);

  function handleSelect(idx) {
    setSelectedIdx(idx);
    const value = idx === 0 ? "A" : "B";
    setTimeout(() => {
      const newAnswers = [...answers, value];
      if (current + 1 >= tciQuestions.length) {
        const scores = calculateTci(newAnswers);
        sessionStorage.setItem("tciResult", JSON.stringify(scores));
        navigate("/tci/result");
      } else {
        setCurrent(current + 1);
        setAnswers(newAnswers);
        setSelectedIdx(null);
      }
    }, 400);
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <button
          className="btn-back"
          onClick={() => {
            if (current === 0) navigate("/tci");
            else {
              setCurrent(current - 1);
              setAnswers(answers.slice(0, -1));
              setSelectedIdx(null);
            }
          }}
        >
          ←
        </button>
        <span className="quiz-count">
          {current + 1} / {tciQuestions.length}
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #FF6B35, #F7971E)",
          }}
        />
      </div>

      <div className="quiz-card">
        <p className="quiz-number">Q{current + 1}</p>
        <h2 className="quiz-question">{question.text}</h2>

        <div className="quiz-options">
          {[question.a, question.b].map((opt, idx) => (
            <button
              key={idx}
              className={`option-btn ${selectedIdx === idx ? "selected" : ""}`}
              style={selectedIdx === idx ? { borderColor: "#FF6B35", background: "#fff3ed" } : {}}
              onClick={() => handleSelect(idx)}
              disabled={selectedIdx !== null}
            >
              <span className="option-label">{idx === 0 ? "A" : "B"}</span>
              <span className="option-text">{opt.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
