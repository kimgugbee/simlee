import { useNavigate } from "react-router-dom";
import { mbtiTypes } from "../data/mbtiTypes";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-hero">
        <div className="home-emoji">🧩</div>
        <h1 className="home-title">MBTI 성격 유형 검사</h1>
        <p className="home-subtitle">
          20개의 질문으로 나의 성격 유형을 알아보세요
        </p>
        <div className="home-info">
          <span>📝 20문항</span>
          <span>⏱ 약 3분</span>
          <span>🎯 16가지 유형</span>
        </div>
        <button className="btn-start" onClick={() => navigate("/quiz")}>
          검사 시작하기
        </button>
      </div>

      <div className="home-types">
        <h2>16가지 성격 유형</h2>
        <div className="types-grid">
          {Object.values(mbtiTypes).map((type) => (
            <div
              key={type.name}
              className="type-card"
              style={{ borderColor: type.color }}
              onClick={() => navigate(`/type/${type.name}`)}
            >
              <span className="type-emoji">{type.emoji}</span>
              <span className="type-name" style={{ color: type.color }}>
                {type.name}
              </span>
              <span className="type-title">{type.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
