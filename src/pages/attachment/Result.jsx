import { useParams, useNavigate } from "react-router-dom";
import { attachmentTypes } from "../../data/attachmentTypes";
import CoupangBanner from "../../components/CoupangBanner";
import "./styles.css";

export default function AttachmentResult() {
  const { type } = useParams();
  const navigate = useNavigate();
  const data = attachmentTypes[decodeURIComponent(type)];

  if (!data) {
    return (
      <div className="result-error">
        <p>알 수 없는 유형입니다.</p>
        <button onClick={() => navigate("/attachment")}>돌아가기</button>
      </div>
    );
  }

  function handleShare() {
    const text = `나의 성인 애착 유형은 ${data.name} ${data.title}!\n${data.description}\n\n나도 검사해보기: ${window.location.origin}/attachment`;
    if (navigator.share) {
      navigator.share({ title: "성인 애착 유형 검사 결과", text });
    } else {
      navigator.clipboard.writeText(text).then(() => {
        alert("결과가 클립보드에 복사되었습니다!");
      });
    }
  }

  return (
    <div className="tst-result">
      <div className="tst-result-header" style={{ background: data.gradient }}>
        <div className="tst-result-emoji">{data.emoji}</div>
        <div className="tst-result-badge">애착 유형 결과</div>
        <div className="tst-result-type">{data.name}</div>
        <div className="tst-result-title">{data.title}</div>
        <div className="tst-result-hormone">
          불안 {data.anxious} · 회피 {data.avoidant}
        </div>
      </div>

      <div className="tst-result-body">
        <section className="tst-section">
          <h2>소개</h2>
          <p>{data.description}</p>
        </section>

        <section className="tst-section">
          <h2>강점</h2>
          <ul className="tst-tag-list">
            {data.strengths.map((s) => (
              <li key={s} className="tst-tag">
                ✅ {s}
              </li>
            ))}
          </ul>
        </section>

        <section className="tst-section">
          <h2>약점</h2>
          <ul className="tst-tag-list">
            {data.weaknesses.map((w) => (
              <li key={w} className="tst-tag">
                ⚠️ {w}
              </li>
            ))}
          </ul>
        </section>

        <section className="tst-section">
          <h2>나에게 도움이 되는 말</h2>
          <p>{data.advice}</p>
        </section>

        <CoupangBanner />

        <div className="tst-result-actions">
          <button
            className="btn-share-result"
            style={{ background: data.gradient }}
            onClick={handleShare}
          >
            🔗 결과 공유
          </button>
          <button
            className="btn-retry-result"
            onClick={() => navigate("/attachment/quiz")}
          >
            다시 검사하기
          </button>
          <button
            className="btn-home-result"
            onClick={() => navigate("/")}
          >
            홈으로
          </button>
        </div>
      </div>
    </div>
  );
}
