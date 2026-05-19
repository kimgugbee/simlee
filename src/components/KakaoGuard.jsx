import { useEffect } from "react";

const ua = navigator.userAgent;
const isKakao = /KAKAOTALK/i.test(ua);
const isAndroid = /Android/i.test(ua);

export default function KakaoGuard({ children }) {
  useEffect(() => {
    if (!isKakao) return;
    const url = window.location.href;
    if (isAndroid) {
      // Android: intent scheme으로 크롬에서 열기
      const { hostname, pathname, search, hash } = window.location;
      window.location.href = `intent://${hostname}${pathname}${search}${hash}#Intent;scheme=https;package=com.android.chrome;end`;
    } else {
      // iOS: 카카오톡 외부 브라우저 열기
      window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(url)}`;
    }
  }, []);

  if (isKakao) {
    return (
      <div style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        background: "#fff",
        textAlign: "center",
        gap: "1.5rem",
      }}>
        <div style={{ fontSize: "3rem" }}>🧠</div>
        <div>
          <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#222", margin: "0 0 0.5rem" }}>
            외부 브라우저에서 열어주세요
          </p>
          <p style={{ fontSize: "0.9rem", color: "#666", margin: 0, lineHeight: 1.6 }}>
            카카오톡 브라우저에서는<br />일부 기능이 정상 작동하지 않습니다
          </p>
        </div>
        <a
          href={isAndroid
            ? `intent://${window.location.hostname}${window.location.pathname}${window.location.search}${window.location.hash}#Intent;scheme=https;package=com.android.chrome;end`
            : `kakaotalk://web/openExternal?url=${encodeURIComponent(window.location.href)}`
          }
          style={{
            display: "block",
            width: "100%",
            maxWidth: "280px",
            padding: "1rem",
            background: "#FEE500",
            color: "#3C1E1E",
            borderRadius: "12px",
            fontWeight: 800,
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          외부 브라우저로 열기
        </a>
        <p style={{ fontSize: "0.78rem", color: "#aaa", margin: 0, lineHeight: 1.7 }}>
          버튼이 작동하지 않으면<br />
          우측 상단 <strong>⋯</strong> → <strong>다른 브라우저로 열기</strong>
        </p>
      </div>
    );
  }

  return children;
}
