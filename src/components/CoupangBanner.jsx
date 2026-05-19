export default function CoupangBanner() {
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
