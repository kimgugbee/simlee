import { useParams, useNavigate } from "react-router-dom";
import { mbtiTypes } from "../data/mbtiTypes";
import "./Result.css";

export default function Result() {
  const { type } = useParams();
  const navigate = useNavigate();
  const data = mbtiTypes[type];

  if (!data) {
    return (
      <div className="result-error">
        <p>알 수 없는 유형입니다.</p>
        <button onClick={() => navigate("/mbti")}>홈으로</button>
      </div>
    );
  }

  function handleShare() {
    const text = `나의 MBTI는 ${data.name} ${data.title}!\n${data.description}\n\n나도 검사해보기: ${window.location.origin}`;
    if (navigator.share) {
      navigator.share({ title: "MBTI 검사 결과", text });
    } else {
      navigator.clipboard.writeText(text).then(() => {
        alert("결과가 클립보드에 복사되었습니다!");
      });
    }
  }

  function handleKakaoShare() {
    const text = `나의 MBTI 결과는 ${data.name} ${data.title}! 너도 해봐 👉 ${window.location.href}`;
    navigator.clipboard.writeText(text).then(() => {
      alert("링크가 복사되었습니다! 카카오톡에 붙여넣기 하세요.");
    });
  }

  return (
    <div className="result">
      <div className="result-card" style={{ "--accent": data.color }}>
        <div className="result-badge">결과</div>
        <div className="result-emoji">{data.emoji}</div>
        <div className="result-type" style={{ color: data.color }}>
          {data.name}
        </div>
        <div className="result-title">{data.title}</div>
        <p className="result-desc">{data.description}</p>

        <div className="result-section">
          <h3>강점</h3>
          <div className="tag-list">
            {data.strengths.map((s) => (
              <span key={s} className="tag tag-strength">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="result-section">
          <h3>약점</h3>
          <div className="tag-list">
            {data.weaknesses.map((w) => (
              <span key={w} className="tag tag-weakness">
                {w}
              </span>
            ))}
          </div>
        </div>

        <div className="result-section">
          <h3>궁합이 잘 맞는 유형</h3>
          <div className="tag-list">
            {data.compatible.map((c) => (
              <span
                key={c}
                className="tag tag-compatible"
                onClick={() => navigate(`/mbti/type/${c}`)}
              >
                {c} {mbtiTypes[c]?.title}
              </span>
            ))}
          </div>
        </div>

        <div className="result-section">
          <h3>유명인</h3>
          <p className="result-famous">{data.famous.join(", ")}</p>
        </div>
      </div>

      <div className="result-actions">
        <button className="btn-share" onClick={handleShare}>
          🔗 결과 공유
        </button>
        <button className="btn-kakao" onClick={handleKakaoShare}>
          💬 카카오 공유
        </button>
        <button
          className="btn-detail"
          onClick={() => navigate(`/mbti/type/${data.name}`)}
        >
          상세 정보 보기
        </button>
        <button className="btn-retry" onClick={() => navigate("/mbti/quiz")}>
          다시 검사하기
        </button>
        <button className="btn-home" onClick={() => navigate("/")}>
          홈으로
        </button>
      </div>
    </div>
  );
}
