// 35문항 (차원별 5문항), 5점 척도 (1~5)
export const tciQuestions = [
  // NS - 자극추구
  { id: 1,  dimension: "NS", text: "새로운 경험을 할 때 설레고 흥분된다" },
  { id: 2,  dimension: "NS", text: "지루하고 반복적인 상황이 되면 금방 변화를 원한다" },
  { id: 3,  dimension: "NS", text: "좋은 아이디어가 떠오르면 일단 바로 시도해보고 싶다" },
  { id: 4,  dimension: "NS", text: "익숙한 것보다 새롭고 낯선 것에 더 끌린다" },
  { id: 5,  dimension: "NS", text: "즉흥적으로 행동하거나 결정하는 경우가 많다" },

  // HA - 위험회피
  { id: 6,  dimension: "HA", text: "새로운 상황에서 걱정이 되어 신중하게 행동한다" },
  { id: 7,  dimension: "HA", text: "위험해 보이는 일은 피하거나 최소화하려 한다" },
  { id: 8,  dimension: "HA", text: "미래에 불확실한 상황이 생기면 많이 걱정된다" },
  { id: 9,  dimension: "HA", text: "중요한 결정을 앞두고 부정적인 결과를 먼저 생각한다" },
  { id: 10, dimension: "HA", text: "낯선 사람들 앞에서 주목받는 것이 불안하다" },

  // RD - 사회적 민감성
  { id: 11, dimension: "RD", text: "다른 사람이 나를 칭찬하거나 인정해주면 매우 기쁘다" },
  { id: 12, dimension: "RD", text: "가까운 사람이 힘들어할 때 나도 같이 마음이 아프다" },
  { id: 13, dimension: "RD", text: "다른 사람들이 나를 어떻게 생각하는지 많이 신경 쓰인다" },
  { id: 14, dimension: "RD", text: "누군가의 부탁을 거절하는 것이 불편하고 어렵다" },
  { id: 15, dimension: "RD", text: "사람들과 따뜻하고 친밀한 관계를 맺는 것이 매우 중요하다" },

  // PS - 인내력
  { id: 16, dimension: "PS", text: "한번 시작한 일은 어렵더라도 끝까지 마무리한다" },
  { id: 17, dimension: "PS", text: "목표를 세우면 달성할 때까지 포기하지 않는다" },
  { id: 18, dimension: "PS", text: "지금 당장 보상이 없어도 장기 목표를 위해 참을 수 있다" },
  { id: 19, dimension: "PS", text: "어려운 상황에서도 꾸준히 노력을 이어나간다" },
  { id: 20, dimension: "PS", text: "완수하지 못한 일이 있으면 계속 마음에 걸린다" },

  // SD - 자율성
  { id: 21, dimension: "SD", text: "내 삶에서 내가 진정 원하는 것이 무엇인지 잘 알고 있다" },
  { id: 22, dimension: "SD", text: "어떤 상황에서도 내 행동에 스스로 책임을 진다" },
  { id: 23, dimension: "SD", text: "내 약점을 인정하고 개선하려는 노력을 꾸준히 한다" },
  { id: 24, dimension: "SD", text: "삶의 방향을 스스로 결정하는 능력이 있다고 생각한다" },
  { id: 25, dimension: "SD", text: "어려운 상황에서도 내 가치관과 원칙을 지킨다" },

  // CO - 연대감
  { id: 26, dimension: "CO", text: "다른 사람의 입장에서 생각하려고 노력한다" },
  { id: 27, dimension: "CO", text: "다른 사람을 도울 때 진심으로 만족감을 느낀다" },
  { id: 28, dimension: "CO", text: "사람들을 공정하고 배려 있게 대하려고 한다" },
  { id: 29, dimension: "CO", text: "사회나 공동체에 기여하는 것이 중요하다고 생각한다" },
  { id: 30, dimension: "CO", text: "내가 이익을 얻더라도 다른 사람에게 해가 되는 일은 하지 않는다" },

  // ST - 자기초월
  { id: 31, dimension: "ST", text: "자연이나 세상과 깊이 연결된 느낌을 받을 때가 있다" },
  { id: 32, dimension: "ST", text: "나 자신을 넘어 더 큰 무언가의 일부라는 느낌이 든다" },
  { id: 33, dimension: "ST", text: "영적인 것이나 초월적 경험에 열린 마음을 갖고 있다" },
  { id: 34, dimension: "ST", text: "내 존재의 의미나 삶의 목적에 대해 자주 생각한다" },
  { id: 35, dimension: "ST", text: "특별한 순간에 시간과 공간을 초월한 느낌을 받은 적이 있다" },
];

export const SCALE = [
  { value: 1, label: "전혀\n아니다" },
  { value: 2, label: "아니다" },
  { value: 3, label: "보통\n이다" },
  { value: 4, label: "그렇다" },
  { value: 5, label: "매우\n그렇다" },
];

export const MAX_PER_DIM = 25; // 5문항 × 5점
