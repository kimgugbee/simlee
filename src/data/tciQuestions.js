// 21문항 (차원별 3문항), A = 그렇다(+1), B = 아니다(0)
export const tciQuestions = [
  // NS - 자극추구
  {
    id: 1, dimension: "NS",
    text: "새로운 경험을 할 때 설레고 흥분된다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 2, dimension: "NS",
    text: "지루하고 반복적인 상황이 되면 금방 변화를 원한다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 3, dimension: "NS",
    text: "좋은 아이디어가 떠오르면 바로 시도해보고 싶다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },

  // HA - 위험회피
  {
    id: 4, dimension: "HA",
    text: "새로운 상황에서 걱정이 되고 신중하게 행동한다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 5, dimension: "HA",
    text: "위험해 보이는 일은 피하거나 최소화하려 한다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 6, dimension: "HA",
    text: "미래에 불확실한 상황이 생기면 많이 걱정된다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },

  // RD - 사회적 민감성
  {
    id: 7, dimension: "RD",
    text: "다른 사람이 나를 칭찬하거나 인정해주면 매우 기쁘다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 8, dimension: "RD",
    text: "가까운 사람이 힘들어할 때 나도 같이 마음이 아프다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 9, dimension: "RD",
    text: "다른 사람들이 나를 어떻게 생각하는지 많이 신경 쓰인다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },

  // PS - 인내력
  {
    id: 10, dimension: "PS",
    text: "한번 시작한 일은 어렵더라도 끝까지 마무리한다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 11, dimension: "PS",
    text: "목표를 세우면 달성할 때까지 포기하지 않는다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 12, dimension: "PS",
    text: "지금 당장 보상이 없어도 장기 목표를 위해 참을 수 있다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },

  // SD - 자율성
  {
    id: 13, dimension: "SD",
    text: "내 삶에서 내가 진정 원하는 것이 무엇인지 잘 알고 있다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 14, dimension: "SD",
    text: "어떤 상황에서도 내 행동에 스스로 책임을 진다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 15, dimension: "SD",
    text: "내 약점을 인정하고 개선하려는 노력을 꾸준히 한다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },

  // CO - 연대감
  {
    id: 16, dimension: "CO",
    text: "다른 사람의 입장에서 생각하려고 노력한다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 17, dimension: "CO",
    text: "다른 사람을 도울 때 진심으로 만족감을 느낀다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 18, dimension: "CO",
    text: "사람들을 공정하고 배려 있게 대하려고 한다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },

  // ST - 자기초월
  {
    id: 19, dimension: "ST",
    text: "자연이나 세상과 깊이 연결된 느낌을 받을 때가 있다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 20, dimension: "ST",
    text: "나 자신을 넘어 더 큰 무언가의 일부라는 느낌이 든다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
  {
    id: 21, dimension: "ST",
    text: "영적인 것이나 초월적 경험에 열린 마음을 갖고 있다",
    a: { text: "그렇다" }, b: { text: "아니다" },
  },
];
