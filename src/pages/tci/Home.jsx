import { useNavigate } from "react-router-dom";
import { tciTypes } from "../../data/tciTypes";
import "./styles.css";

const types = Object.values(tciTypes);

export default function TciHome() {
  const navigate = useNavigate();

  return (
    <div className="tst-home">
      <div
        className="tst-hero"
        style={{ background: "linear-gradient(135deg, #FF6B35, #F7971E)" }}
      >
        <button className="btn-back-white" onClick={() => navigate("/")}>
          ←
        </button>
        <div className="tst-hero-emoji">🔬</div>
        <h1 className="tst-hero-title">TCI 기질 검사</h1>
        <p className="tst-hero-subtitle">
          클로닌저의 기질 이론 기반
          <br />
          4가지 기질로 나의 내면 성향 분석하기
        </p>
        <div className="tst-hero-info">
          <span>📝 20문항</span>
          <span>⏱ 약 3분</span>
          <span>🎯 4가지 유형</span>
        </div>
        <button
          className="btn-start-test"
          onClick={() => navigate("/tci/quiz")}
        >
          검사 시작하기
        </button>
      </div>

      <div className="tst-body">
        <p className="section-label">4가지 기질 유형</p>
        <div className="type-preview-grid">
          {types.map((type) => (
            <div
              key={type.name}
              className="type-preview-card"
              style={{ borderColor: type.color }}
            >
              <span className="type-preview-emoji">{type.emoji}</span>
              <span
                className="type-preview-name"
                style={{ color: type.color }}
              >
                {type.name}
              </span>
              <span className="type-preview-title">{type.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
