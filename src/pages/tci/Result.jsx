import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tciDimensions } from "../../data/tciDimensions";
import CoupangBanner from "../../components/CoupangBanner";
import "./styles.css";

const MAX = 3; // 차원별 최대 점수

export default function TciResult() {
  const navigate = useNavigate();
  const [scores] = useState(() => {
    try {
      return JSON.parse(sessionStorage.getItem("tciResult") || "null");
    } catch {
      return null;
    }
  });

  if (!scores) {
    return (
      <div className="result-error" style={{ textAlign: "center", padding: "3rem" }}>
        <p>결과를 불러올 수 없습니다.</p>
        <button onClick={() => navigate("/tci/quiz")}>검사 다시 하기</button>
      </div>
    );
  }

  const scSD = scores.SD ?? 0;
  const scCO = scores.CO ?? 0;
  const scSC = scSD + scCO;
  const maxSC = MAX * 2;

  function pct(score, max = MAX) {
    return Math.round((score / max) * 100);
  }

  function levelLabel(p) {
    if (p >= 75) return "높음";
    if (p >= 40) return "보통";
    return "낮음";
  }

  const categories = [
    { label: "기질", dims: tciDimensions.filter((d) => d.category === "기질") },
    { label: "성격", dims: tciDimensions.filter((d) => d.category === "성격") },
  ];

  return (
    <div className="tst-result" style={{ maxWidth: 600, margin: "0 auto" }}>
      <div
        className="tst-result-header"
        style={{ background: "linear-gradient(135deg, #FF6B35, #F7971E)" }}
      >
        <div className="tst-result-emoji">🔬</div>
        <div className="tst-result-badge">TCI 기질 및 성격 검사</div>
        <div className="tst-result-type" style={{ fontSize: "1.6rem" }}>나의 TCI 프로파일</div>
      </div>

      <div className="tst-result-body">
        {categories.map(({ label, dims }) => (
          <section key={label} className="tst-section">
            <h2>{label}</h2>
            <div className="tci-profile">
              {dims.map((d) => {
                const score = scores[d.key] ?? 0;
                const p = pct(score);
                return (
                  <div key={d.key} className="tci-row">
                    <div className="tci-row-header">
                      <span className="tci-dim-name">{d.name}</span>
                      <span className="tci-dim-key">({d.key})</span>
                      <span className="tci-dim-level" style={{ color: d.color }}>
                        {levelLabel(p)}
                      </span>
                    </div>
                    <div className="tci-bar-wrap">
                      <div className="tci-bar-bg">
                        <div
                          className="tci-bar-fill"
                          style={{ width: `${p}%`, background: d.color }}
                        />
                      </div>
                      <span className="tci-pct">{p}%</span>
                    </div>
                    <p className="tci-desc">
                      {p >= 50 ? d.high : d.low}
                    </p>
                  </div>
                );
              })}

              {/* SD + CO 복합 지표 (성격 카테고리에서만) */}
              {label === "성격" && (
                <div className="tci-row tci-row-combined">
                  <div className="tci-row-header">
                    <span className="tci-dim-name">자율성+연대감</span>
                    <span className="tci-dim-key">(SC)</span>
                    <span className="tci-dim-level" style={{ color: "#555" }}>
                      {levelLabel(pct(scSC, maxSC))}
                    </span>
                  </div>
                  <div className="tci-bar-wrap">
                    <div className="tci-bar-bg">
                      <div
                        className="tci-bar-fill"
                        style={{
                          width: `${pct(scSC, maxSC)}%`,
                          background: "linear-gradient(90deg, #9B59B6, #E74C3C)",
                        }}
                      />
                    </div>
                    <span className="tci-pct">{pct(scSC, maxSC)}%</span>
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        <CoupangBanner />

        <div className="tst-result-actions">
          <button
            className="btn-share-result"
            style={{ background: "linear-gradient(135deg, #FF6B35, #F7971E)" }}
            onClick={() => {
              const text = `나의 TCI 프로파일\n자극추구 ${pct(scores.NS)}% / 위험회피 ${pct(scores.HA)}% / 사회적민감성 ${pct(scores.RD)}% / 인내력 ${pct(scores.PS)}%\n자율성 ${pct(scores.SD)}% / 연대감 ${pct(scores.CO)}% / 자기초월 ${pct(scores.ST)}%\n\n나도 검사해보기: ${window.location.origin}${window.location.pathname}`;
              if (navigator.share) navigator.share({ title: "TCI 검사 결과", text });
              else navigator.clipboard.writeText(text).then(() => alert("복사되었습니다!"));
            }}
          >
            🔗 결과 공유
          </button>
          <button className="btn-retry-result" onClick={() => navigate("/tci/quiz")}>
            다시 검사하기
          </button>
          <button className="btn-home-result" onClick={() => navigate("/")}>
            홈으로
          </button>
        </div>
      </div>
    </div>
  );
}
