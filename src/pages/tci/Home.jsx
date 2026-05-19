import { useNavigate } from "react-router-dom";
import { tciDimensions } from "../../data/tciDimensions";
import "../egenteto/styles.css";

export default function TciHome() {
  const navigate = useNavigate();

  const byCategory = {
    기질: tciDimensions.filter((d) => d.category === "기질"),
    성격: tciDimensions.filter((d) => d.category === "성격"),
  };

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
        <h1 className="tst-hero-title">TCI 기질 및 성격 검사</h1>
        <p className="tst-hero-subtitle">
          클로닌저의 기질·성격 이론 기반
          <br />
          7가지 차원으로 나의 심리 프로파일 분석
        </p>
        <div className="tst-hero-info">
          <span>📝 21문항</span>
          <span>⏱ 약 3분</span>
          <span>📊 7가지 차원</span>
        </div>
        <button
          className="btn-start-test"
          onClick={() => navigate("/tci/quiz")}
        >
          검사 시작하기
        </button>
      </div>

      <div className="tst-body">
        {Object.entries(byCategory).map(([cat, dims]) => (
          <div key={cat} style={{ marginBottom: "1.2rem" }}>
            <p className="section-label">{cat}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {dims.map((d) => (
                <div
                  key={d.key}
                  style={{
                    background: "white",
                    borderRadius: "12px",
                    padding: "0.85rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 36,
                      borderRadius: 3,
                      background: d.color,
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#222" }}>
                      {d.name}
                      <span style={{ fontWeight: 400, color: "#aaa", fontSize: "0.8rem", marginLeft: "0.4rem" }}>
                        ({d.key})
                      </span>
                    </div>
                    <div style={{ fontSize: "0.78rem", color: "#888", marginTop: "0.1rem" }}>
                      {d.high}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
