import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { egentetoQuestions } from "../../data/egentetoQuestions";
import "./styles.css";

function calculateEgenteto(gender, answers) {
  const eCount = answers.filter((a) => a === "E").length;
  const tCount = answers.filter((a) => a === "T").length;
  const dominant = eCount >= tCount ? "에겐" : "테토";
  return `${dominant}${gender}`;
}

export default function EgentetoQuiz() {
  const [step, setStep] = useState("gender");
  const [gender, setGender] = useState(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const question = egentetoQuestions[current];
  const progress = ((current / egentetoQuestions.length) * 100).toFixed(0);

  function handleGenderSelect(g) {
    setGender(g);
    setStep("quiz");
  }

  function handleSelect(type) {
    setSelected(type);
    setTimeout(() => {
      const newAnswers = [...answers, type];
      if (current + 1 >= egentetoQuestions.length) {
        const result = calculateEgenteto(gender, newAnswers);
        navigate(`/egenteto/result/${encodeURIComponent(result)}`);
      } else {
        setCurrent(current + 1);
        setAnswers(newAnswers);
        setSelected(null);
      }
    }, 400);
  }

  if (step === "gender") {
    return (
      <div className="quiz">
        <div className="quiz-header">
          <button
            className="btn-back"
            onClick={() => navigate("/egenteto")}
          >
            ← 홈
          </button>
        </div>
        <div className="gender-select">
          <p className="gender-title">먼저 성별을 선택해주세요</p>
          <div className="gender-options">
            <button
              className="gender-btn"
              style={{ borderColor: "#1E88E5", color: "#1E88E5" }}
              onClick={() => handleGenderSelect("남")}
            >
              <span className="gender-emoji">👨</span>
              <span>남자</span>
            </button>
            <button
              className="gender-btn"
              style={{ borderColor: "#E91E8C", color: "#E91E8C" }}
              onClick={() => handleGenderSelect("여")}
            >
              <span className="gender-emoji">👩</span>
              <span>여자</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="quiz-header">
        <button
          className="btn-back"
          onClick={() => {
            if (current === 0) setStep("gender");
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
          {current + 1} / {egentetoQuestions.length}
        </span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #E91E8C, #9C27B0)",
          }}
        />
      </div>

      <div className="quiz-card">
        <p className="quiz-number">Q{current + 1}</p>
        <h2 className="quiz-question">{question.text}</h2>

        <div className="quiz-options">
          <button
            className={`option-btn ${selected === question.a.type ? "selected" : ""}`}
            style={selected === question.a.type ? { borderColor: "#E91E8C", background: "#fce4ec" } : {}}
            onClick={() => handleSelect(question.a.type)}
            disabled={selected !== null}
          >
            <span className="option-label">A</span>
            <span className="option-text">{question.a.text}</span>
          </button>

          <button
            className={`option-btn ${selected === question.b.type ? "selected" : ""}`}
            style={selected === question.b.type ? { borderColor: "#9C27B0", background: "#f3e5f5" } : {}}
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
