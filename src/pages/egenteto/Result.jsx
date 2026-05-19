import { useParams, useNavigate } from "react-router-dom";
import { egentetoTypes } from "../../data/egentetoTypes";
import CoupangBanner from "../../components/CoupangBanner";
import "./styles.css";

export default function EgentetoResult() {
  const { type } = useParams();
  const navigate = useNavigate();
  const data = egentetoTypes[decodeURIComponent(type)];

  if (!data) {
    return (
      <div className="result-error">
        <p>알 수 없는 유형입니다.</p>
        <button onClick={() => navigate("/egenteto")}>돌아가기</button>
      </div>
    );
  }

  const compatible = egentetoTypes[data.compatible[0]];

  function handleShare() {
    const text = `나의 에겐테토 유형은 ${data.name} ${data.title}!\n${data.description}\n\n나도 검사해보기: ${window.location.origin}/egenteto`;
    if (navigator.share) {
      navigator.share({ title: "에겐테토 검사 결과", text });
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
        <div className="tst-result-badge">에겐테토 결과</div>
        <div className="tst-result-type">{data.name}</div>
        <div className="tst-result-title">{data.title}</div>
        <div className="tst-result-hormone">
          🧬 {data.hormone} 우세 · {data.gender}성
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
              <li key={s} className="tst-tag tst-tag-strength">
                ✅ {s}
              </li>
            ))}
          </ul>
        </section>

        <section className="tst-section">
          <h2>약점</h2>
          <ul className="tst-tag-list">
            {data.weaknesses.map((w) => (
              <li key={w} className="tst-tag tst-tag-weakness">
                ⚠️ {w}
              </li>
            ))}
          </ul>
        </section>

        {compatible && (
          <section className="tst-section">
            <h2>궁합이 잘 맞는 유형</h2>
            <div
              className="compatible-card-single"
              style={{ borderColor: compatible.color }}
            >
              <span className="compatible-big-emoji">{compatible.emoji}</span>
              <span
                className="compatible-big-name"
                style={{ color: compatible.color }}
              >
                {compatible.name}
              </span>
              <span className="compatible-big-title">{compatible.title}</span>
            </div>
          </section>
        )}

        <section className="tst-section">
          <h2>유명인</h2>
          <div className="famous-list">
            {data.famous.map((f) => (
              <span key={f} className="famous-tag">
                👤 {f}
              </span>
            ))}
          </div>
        </section>

        <CoupangBanner />

        <div className="tst-result-actions">
          <button className="btn-share-result" onClick={handleShare}>
            🔗 결과 공유
          </button>
          <button
            className="btn-retry-result"
            onClick={() => navigate("/egenteto/quiz")}
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
