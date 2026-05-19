import { useNavigate } from "react-router-dom";
import { egentetoTypes } from "../../data/egentetoTypes";
import "./styles.css";

const types = Object.values(egentetoTypes);

export default function EgentetoHome() {
  const navigate = useNavigate();

  return (
    <div className="tst-home">
      <div
        className="tst-hero"
        style={{ background: "linear-gradient(135deg, #E91E8C, #9C27B0)" }}
      >
        <button className="btn-back-white" onClick={() => navigate("/")}>
          ←
        </button>
        <div className="tst-hero-emoji">🧬</div>
        <h1 className="tst-hero-title">에겐테토 검사</h1>
        <p className="tst-hero-subtitle">
          에스트로겐 vs 테스토스테론
          <br />
          나의 호르몬 성격 유형은?
        </p>
        <div className="tst-hero-info">
          <span>📝 20문항</span>
          <span>⏱ 약 3분</span>
          <span>🎯 4가지 유형</span>
        </div>
        <button
          className="btn-start-test"
          onClick={() => navigate("/egenteto/quiz")}
        >
          검사 시작하기
        </button>
      </div>

      <div className="tst-body">
        <p className="section-label">4가지 유형</p>
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
