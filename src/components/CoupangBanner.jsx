const isKakaoTalk = /KAKAOTALK/i.test(navigator.userAgent);

export default function CoupangBanner() {
  if (isKakaoTalk) {
    return (
      <div style={{
        margin: "1.5rem 0 0.5rem",
        padding: "1rem",
        background: "#fffbe6",
        border: "1px solid #ffe58f",
        borderRadius: "12px",
        textAlign: "center",
      }}>
        <p style={{ fontSize: "0.85rem", color: "#555", margin: "0 0 0.75rem" }}>
          카카오톡 브라우저에서는 일부 기능이 제한됩니다
        </p>
        <a
          href={`kakaotalk://web/openExternal?url=${encodeURIComponent(window.location.href)}`}
          style={{
            display: "inline-block",
            padding: "0.6rem 1.5rem",
            background: "#FEE500",
            color: "#3C1E1E",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "0.9rem",
            textDecoration: "none",
          }}
        >
          외부 브라우저로 열기
        </a>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", margin: "1.5rem 0 0.5rem" }}>
      <p style={{ fontSize: "0.72rem", color: "#bbb", marginBottom: "0.5rem" }}>
        이 포스팅은 쿠팡 파트너스 활동의 일환으로 수수료를 제공받습니다
      </p>
      <iframe
        src="https://ads-partners.coupang.com/widgets.html?id=990433&template=carousel&trackingCode=AF2815384&subId=&width=300&height=250&tsource="
        width="300"
        height="250"
        frameBorder="0"
        scrolling="no"
        referrerPolicy="unsafe-url"
        title="쿠팡 추천 상품"
      />
    </div>
  );
}
