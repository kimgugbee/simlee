// Each question: A = scores the dimension, B = doesn't score
// Dimensions: NS (자극추구), HA (위험회피), RD (사회적민감성), P (인내력)
export const tciQuestions = [
  // NS (자극 추구) 1~5
  {
    id: 1,
    text: "새로운 것을 경험할 때 나는?",
    a: { text: "설레고 흥분된다", dimension: "NS" },
    b: { text: "익숙한 것이 더 편하다", dimension: null },
  },
  {
    id: 2,
    text: "늘 하던 방식 대신 새로운 방법을 시도하는 것이?",
    a: { text: "재미있고 즐겁다", dimension: "NS" },
    b: { text: "번거롭고 불필요하다", dimension: null },
  },
  {
    id: 3,
    text: "지루하고 반복적인 상황에서 나는?",
    a: { text: "금방 지루해지고 변화를 원한다", dimension: "NS" },
    b: { text: "안정적이라 오히려 편하다", dimension: null },
  },
  {
    id: 4,
    text: "즉흥적인 여행이나 계획 변경에 대해?",
    a: { text: "신나고 좋다", dimension: "NS" },
    b: { text: "준비가 필요해서 부담스럽다", dimension: null },
  },
  {
    id: 5,
    text: "좋은 아이디어가 떠오르면?",
    a: { text: "바로 시도해보고 싶다", dimension: "NS" },
    b: { text: "충분히 검토한 후 실행한다", dimension: null },
  },
  // HA (위험 회피) 6~10
  {
    id: 6,
    text: "새로운 상황에 처했을 때 나는?",
    a: { text: "걱정되고 신중하게 행동한다", dimension: "HA" },
    b: { text: "큰 걱정 없이 일단 해본다", dimension: null },
  },
  {
    id: 7,
    text: "중요한 결정을 앞두고?",
    a: { text: "부정적인 결과를 먼저 생각한다", dimension: "HA" },
    b: { text: "긍정적으로 접근한다", dimension: null },
  },
  {
    id: 8,
    text: "위험해 보이는 일에 대해?",
    a: { text: "피하거나 최소화하려 한다", dimension: "HA" },
    b: { text: "도전해볼 만하다고 생각한다", dimension: null },
  },
  {
    id: 9,
    text: "미래에 대한 불확실성이 있을 때?",
    a: { text: "걱정이 되고 준비를 많이 한다", dimension: "HA" },
    b: { text: "그때그때 대응하면 된다고 생각한다", dimension: null },
  },
  {
    id: 10,
    text: "낯선 사람들 앞에서 발표해야 할 때?",
    a: { text: "긴장되고 실수할까봐 많이 걱정된다", dimension: "HA" },
    b: { text: "긴장은 하지만 그다지 두렵지 않다", dimension: null },
  },
  // RD (사회적 민감성) 11~15
  {
    id: 11,
    text: "다른 사람이 나를 칭찬하거나 인정해줄 때?",
    a: { text: "매우 기쁘고 중요하게 느껴진다", dimension: "RD" },
    b: { text: "좋긴 하지만 크게 영향받지 않는다", dimension: null },
  },
  {
    id: 12,
    text: "친한 사람이 슬퍼하거나 힘들어할 때?",
    a: { text: "나도 같이 마음이 아프다", dimension: "RD" },
    b: { text: "도움을 주고 싶지만 크게 영향받지 않는다", dimension: null },
  },
  {
    id: 13,
    text: "사람들과의 관계에서 나는?",
    a: { text: "친밀한 관계를 매우 중요하게 여긴다", dimension: "RD" },
    b: { text: "관계보다 개인 목표가 더 중요하다", dimension: null },
  },
  {
    id: 14,
    text: "누군가의 부탁을 거절할 때?",
    a: { text: "미안하고 불편한 마음이 든다", dimension: "RD" },
    b: { text: "필요하면 담담하게 거절할 수 있다", dimension: null },
  },
  {
    id: 15,
    text: "다른 사람들이 나를 어떻게 생각하는지가?",
    a: { text: "매우 신경 쓰인다", dimension: "RD" },
    b: { text: "크게 신경 쓰지 않는다", dimension: null },
  },
  // P (인내력) 16~20
  {
    id: 16,
    text: "한번 시작한 일이 힘들어지면?",
    a: { text: "끝까지 마무리하려 한다", dimension: "P" },
    b: { text: "상황에 따라 포기할 수도 있다", dimension: null },
  },
  {
    id: 17,
    text: "목표를 세우면?",
    a: { text: "달성할 때까지 포기하지 않는다", dimension: "P" },
    b: { text: "상황이 바뀌면 목표도 바꿀 수 있다", dimension: null },
  },
  {
    id: 18,
    text: "장기적인 프로젝트나 공부에 대해?",
    a: { text: "꾸준히 조금씩 해나가는 편이다", dimension: "P" },
    b: { text: "흥미가 없어지면 중단하기도 한다", dimension: null },
  },
  {
    id: 19,
    text: "지금 당장 보상이 없어도?",
    a: { text: "장기적인 목표를 위해 참을 수 있다", dimension: "P" },
    b: { text: "즉각적인 보상이 있어야 동기가 생긴다", dimension: null },
  },
  {
    id: 20,
    text: "어렵고 힘든 상황에 처했을 때?",
    a: { text: "버티고 극복하려 한다", dimension: "P" },
    b: { text: "다른 방법을 찾거나 방향을 바꾼다", dimension: null },
  },
];
