import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { attachmentQuestions } from "../../data/attachmentQuestions";
import "./styles.css";

function calculateAttachment(answers) {
  let anxious = 0;
  let avoidant = 0;
  answers.forEach((axis) => {
    if (axis === "A") anxious++;
    else if (axis === "V") avoidant++;
  });
  const highA = anxious >= 6;
  const highV = avoidant >= 6;
  if (!highA && !highV) return "안정형";
  if (highA && !highV) return "불안형";
  if (!highA && highV) return "회피형";
  return "혼란형";
}

export default function AttachmentQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const navigate = useNavigate();

  const question = attachmentQuestions[current];
  const progress = ((current / attachmentQuestions.length) * 100).toFixed(0);

  function handleSelect(idx, axis) {
    setSelectedIdx(idx);
    setTimeout(() => {
      const newAnswers = [...answers, axis];
      if (current + 1 >= attachmentQuestions.length) {
        const result = calculateAttachment(newAnswers);
        navigate(`/attachment/result/${encodeURIComponent(result)}`);
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
            if (current === 0) navigate("/attachment");
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
          {current + 1} / {attachmentQuestions.length}
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #00b4d8, #0077b6)",
          }}
        />
      </div>

      <div className="quiz-card">
        <p className="quiz-number">Q{current + 1}</p>
        <h2 className="quiz-question">{question.text}</h2>

        <div className="quiz-options">
          <button
            className={`option-btn ${selectedIdx === 0 ? "selected" : ""}`}
            style={selectedIdx === 0 ? { borderColor: "#00b4d8", background: "#e0f7fa" } : {}}
            onClick={() => handleSelect(0, question.a.axis)}
            disabled={selectedIdx !== null}
          >
            <span className="option-label">A</span>
            <span className="option-text">{question.a.text}</span>
          </button>

          <button
            className={`option-btn ${selectedIdx === 1 ? "selected" : ""}`}
            style={selectedIdx === 1 ? { borderColor: "#0077b6", background: "#e3f2fd" } : {}}
            onClick={() => handleSelect(1, question.b.axis)}
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
