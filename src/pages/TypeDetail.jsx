import { useParams, useNavigate } from "react-router-dom";
import { mbtiTypes } from "../data/mbtiTypes";
import "./TypeDetail.css";

export default function TypeDetail() {
  const { type } = useParams();
  const navigate = useNavigate();
  const data = mbtiTypes[type];

  if (!data) {
    return (
      <div className="detail-error">
        <p>알 수 없는 유형입니다.</p>
        <button onClick={() => navigate("/mbti")}>홈으로</button>
      </div>
    );
  }

  return (
    <div className="detail">
      <div className="detail-header" style={{ background: data.color }}>
        <button className="btn-back-white" onClick={() => navigate(-1)}>
          ←
        </button>
        <div className="detail-hero-emoji">{data.emoji}</div>
        <h1 className="detail-hero-type">{data.name}</h1>
        <p className="detail-hero-title">{data.title}</p>
      </div>

      <div className="detail-body">
        <section className="detail-section">
          <h2>소개</h2>
          <p>{data.description}</p>
        </section>

        <section className="detail-section">
          <h2>강점</h2>
          <ul>
            {data.strengths.map((s) => (
              <li key={s} className="strength-item">
                <span>✅</span> {s}
              </li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>약점</h2>
          <ul>
            {data.weaknesses.map((w) => (
              <li key={w} className="weakness-item">
                <span>⚠️</span> {w}
              </li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>궁합이 잘 맞는 유형</h2>
          <div className="compatible-list">
            {data.compatible.map((c) => {
              const ct = mbtiTypes[c];
              return (
                <div
                  key={c}
                  className="compatible-card"
                  style={{ borderColor: ct?.color }}
                  onClick={() => navigate(`/mbti/type/${c}`)}
                >
                  <span className="compatible-emoji">{ct?.emoji}</span>
                  <span className="compatible-name" style={{ color: ct?.color }}>
                    {c}
                  </span>
                  <span className="compatible-title">{ct?.title}</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="detail-section">
          <h2>유명인</h2>
          <div className="famous-list">
            {data.famous.map((f) => (
              <span key={f} className="famous-tag">
                👤 {f}
              </span>
            ))}
          </div>
        </section>

        <div className="detail-actions">
          <button className="btn-start-quiz" onClick={() => navigate("/mbti/quiz")}>
            검사 시작하기
          </button>
          <button className="btn-all-types" onClick={() => navigate("/mbti")}>
            모든 유형 보기
          </button>
        </div>
      </div>
    </div>
  );
}
