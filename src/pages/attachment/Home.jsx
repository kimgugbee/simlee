import { useNavigate } from "react-router-dom";
import { attachmentTypes } from "../../data/attachmentTypes";
import "./styles.css";

const types = Object.values(attachmentTypes);

export default function AttachmentHome() {
  const navigate = useNavigate();

  return (
    <div className="tst-home">
      <div
        className="tst-hero"
        style={{ background: "linear-gradient(135deg, #00b4d8, #0077b6)" }}
      >
        <button className="btn-back-white" onClick={() => navigate("/")}>
          ←
        </button>
        <div className="tst-hero-emoji">💞</div>
        <h1 className="tst-hero-title">성인 애착 유형 검사</h1>
        <p className="tst-hero-subtitle">
          관계에서 나타나는 나의 애착 패턴
          <br />
          불안과 회피 수준으로 알아보기
        </p>
        <div className="tst-hero-info">
          <span>📝 20문항</span>
          <span>⏱ 약 3분</span>
          <span>🎯 4가지 유형</span>
        </div>
        <button
          className="btn-start-test"
          onClick={() => navigate("/attachment/quiz")}
        >
          검사 시작하기
        </button>
      </div>

      <div className="tst-body">
        <p className="section-label">4가지 애착 유형</p>
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
