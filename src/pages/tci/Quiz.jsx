import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tciQuestions } from "../../data/tciQuestions";
import "./styles.css";

function calculateTci(answers) {
  const scores = { NS: 0, HA: 0, RD: 0, P: 0 };
  answers.forEach((dim) => {
    if (dim) scores[dim]++;
  });
  const typeMap = { NS: "탐험가형", HA: "수호자형", RD: "공감형", P: "완주자형" };
  const maxDim = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  return typeMap[maxDim];
}

export default function TciQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const navigate = useNavigate();

  const question = tciQuestions[current];
  const progress = ((current / tciQuestions.length) * 100).toFixed(0);

  function handleSelect(idx, dimension) {
    setSelectedIdx(idx);
    setTimeout(() => {
      const newAnswers = [...answers, dimension];
      if (current + 1 >= tciQuestions.length) {
        const result = calculateTci(newAnswers);
        navigate(`/tci/result/${encodeURIComponent(result)}`);
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
          <button
            className={`option-btn ${selectedIdx === 0 ? "selected" : ""}`}
            style={selectedIdx === 0 ? { borderColor: "#FF6B35", background: "#fff3ed" } : {}}
            onClick={() => handleSelect(0, question.a.dimension)}
            disabled={selectedIdx !== null}
          >
            <span className="option-label">A</span>
            <span className="option-text">{question.a.text}</span>
          </button>

          <button
            className={`option-btn ${selectedIdx === 1 ? "selected" : ""}`}
            style={selectedIdx === 1 ? { borderColor: "#F7971E", background: "#fff8e1" } : {}}
            onClick={() => handleSelect(1, question.b.dimension)}
            disabled={selectedIdx !== null}
          >
            <span className="option-label">B</span>
            <span className="option-text">{question.b.text}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
