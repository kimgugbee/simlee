import { useNavigate } from "react-router-dom";
import "./MainHome.css";

const tests = [
  {
    id: "mbti",
    name: "MBTI 성격 유형 검사",
    emoji: "🧩",
    description: "16가지 성격 유형으로 나를 이해하기",
    questions: "20문항",
    time: "약 3분",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    path: "/mbti",
  },
  {
    id: "egenteto",
    name: "에겐테토 검사",
    emoji: "🧬",
    description: "나는 에겐남? 테토남? 에겐녀? 테토녀?",
    questions: "20문항",
    time: "약 3분",
    gradient: "linear-gradient(135deg, #E91E8C, #9C27B0)",
    path: "/egenteto",
  },
  {
    id: "tci",
    name: "TCI 기질 검사",
    emoji: "🔬",
    description: "4가지 기질로 나의 내면 성향 분석하기",
    questions: "20문항",
    time: "약 3분",
    gradient: "linear-gradient(135deg, #FF6B35, #F7971E)",
    path: "/tci",
  },
  {
    id: "attachment",
    name: "성인 애착 유형 검사",
    emoji: "💞",
    description: "관계에서 나타나는 나의 애착 패턴 발견하기",
    questions: "20문항",
    time: "약 3분",
    gradient: "linear-gradient(135deg, #00b4d8, #0077b6)",
    path: "/attachment",
  },
];

export default function MainHome() {
  const navigate = useNavigate();

  return (
    <div className="main-home">
      <div className="main-hero">
        <div className="main-hero-icon">🧠</div>
        <h1 className="main-title">심리 검사 센터</h1>
        <p className="main-subtitle">나를 알아가는 여정</p>
      </div>

      <div className="test-list">
        <p className="test-list-label">검사 선택</p>
        {tests.map((test) => (
          <div
            key={test.id}
            className="test-card"
            onClick={() => navigate(test.path)}
          >
            <div
              className="test-card-accent"
              style={{ background: test.gradient }}
            />
            <div className="test-card-body">
              <div className="test-emoji">{test.emoji}</div>
              <div className="test-info">
                <h2 className="test-name">{test.name}</h2>
                <p className="test-desc">{test.description}</p>
                <div className="test-meta">
                  <span>📝 {test.questions}</span>
                  <span>⏱ {test.time}</span>
                </div>
              </div>
              <span className="test-arrow">›</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
