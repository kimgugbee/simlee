import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tciQuestions, SCALE } from "../../data/tciQuestions";
import "./styles.css";

function calculateTci(answers) {
  const scores = { NS: 0, HA: 0, RD: 0, PS: 0, SD: 0, CO: 0, ST: 0 };
  tciQuestions.forEach((q, i) => {
    if (answers[i] != null) scores[q.dimension] += answers[i];
  });
  return scores;
}

export default function TciQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const question = tciQuestions[current];
  const progress = ((current / tciQuestions.length) * 100).toFixed(0);

  function handleSelect(value) {
    setSelected(value);
    setTimeout(() => {
      const newAnswers = [...answers, value];
      if (current + 1 >= tciQuestions.length) {
        const scores = calculateTci(newAnswers);
        sessionStorage.setItem("tciResult", JSON.stringify(scores));
        navigate("/tci/result");
      } else {
        setCurrent(current + 1);
        setAnswers(newAnswers);
        setSelected(null);
      }
    }, 350);
  }

  return (
    <div className="quiz tci-quiz">
      <div className="quiz-header">
        <button
          className="btn-back"
          onClick={() => {
            if (current === 0) navigate("/tci");
            else {
              setCurrent(current - 1);
              setAnswers(answers.slice(0, -1));
              setSelected(null);
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
        <p className="quiz-number">
          Q{current + 1}
          <span className="tci-dim-badge">{question.dimension}</span>
        </p>
        <h2 className="quiz-question">{question.text}</h2>

        <div className="tci-scale">
          <div className="tci-scale-labels">
            <span>전혀 아니다</span>
            <span>매우 그렇다</span>
          </div>
          <div className="tci-scale-buttons">
            {SCALE.map(({ value }) => (
              <button
                key={value}
                className={`tci-scale-btn ${selected === value ? "tci-selected" : ""}`}
                style={
                  selected === value
                    ? {
                        background: `hsl(${20 + value * 18}, 85%, 55%)`,
                        borderColor: `hsl(${20 + value * 18}, 85%, 55%)`,
                        color: "white",
                        transform: "scale(1.15)",
                      }
                    : {}
                }
                onClick={() => handleSelect(value)}
                disabled={selected !== null}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
