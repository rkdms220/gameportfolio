export const textNodes = [
  {
    id: 1,
    title: "Chapter 1: 모험의 시작",
    text: "당신은 지금 방랑자입니다 동일한 이력서 더미에 압도당하는 자신을 발견합니다. 포기할까 고민하는 순간, 이상한 초자연적인 에너지를 느낍니다. 당신은 그것이 정답을 향한 끌어당김임을 느낍니다.",
    img: "./assets/the-ordinary-world.jpg",
    options: [
      {
        text: "끌어당김을 따라가기.",
        nextText: 2,
      },
      {
        text: "무시하고 동일한 이력서 더미 속으로 가기",
        nextText: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Chapter 2: 여행의 부름",
    text: "당신은 일반적인 이력서 속에서 독특한 포트폴리오를 발견했으며, 이는 포털로 연결되는 링크입니다. 당신은 흥미롭고 매혹적으로 느낍니다.",
    img: "./assets/the-portal.jpg",
    options: [
      {
        text: "새롭고 흥미로운 모험을 떠나기",
        nextText: 3,
      },
      {
        text: "새로운 모험의 길을 버리고 기존의 모집 방법을 고수하기.",
        nextText: 1,
      },
    ],
  },
  {
    id: 3,
    title: "Chapter 3: 부름에 대한 거절",
    text: "당신이 '모험 시작' 버튼 위로 마우스를 가져가려고 하니 불현듯 불안감이 엄습합니다. 기존 규범에서 벗어난 미지의 영역이기 때문입니다.",
    img: "./assets/start-btn.jpg",
    options: [
      {
        text: "두려움과 불확실성을 무릅쓰고 버튼을 누르기.",
        nextText: 4,
      },
      {
        text: "기존의 이력서는 진부하지만 친숙하기에 다시 왔던 길로 돌아가기.",
        nextText: 1,
      },
    ],
  },
  // Existing node
  {
    id: 4,
    title: "Chapter 3: 멘토와의 만남",
    text: "당신은 개발자의 기술과 숙련도 수준에 대한 개요를 제공하는 정교한 AI 가이드를 만나게 됩니다.",
    img: "./assets/AI.jpg",
    options: [
      {
        text: "AI의 말에 귀를 기울이고 모든 정보를 흡수하기.",
        nextText: 41, // New branch starts here
      },
      {
        text: "정중하게 고개를 끄덕이며 여행에 대해 더 관심갖기.",
        nextText: 5,
      },
    ],
  },

  // New nodes
  {
    id: 41,
    title: "Chapter 3.1: 기술 심층 분석",
    text: "AI는 개발자의 기술 세트를 통한 여정으로 안내합니다. HTML/CSS 기초부터 Javascript의 비동기 동작, React의 가상 DOM 및 Node.js의 이벤트 기반 아키텍처에 이르기까지.",
    img: "./assets/skills.jpg",
    options: [
      {
        text: "AI에게 더 자세히 설명하도록 요청하기",
        nextText: 42,
      },
      {
        text: "기술적인 심층 분석은 건너뛰고 스토리를 계속 진행하기.",
        nextText: 5,
      },
    ],
  },
  {
    id: 42,
    title: "Chapter 3.2: 기초를 배우다",
    text: "AI는 기본 사항부터 시작하여 HTML 및 CSS에 대한 개발자의 이해를 강조합니다. 반응형 디자인, 플렉스박스 레이아웃, 시맨틱 HTML 및 CSS 그리드의 아티팩트를 볼 수 있습니다.",
    img: "./assets/html.jpg",
    options: [
      {
        text: "탄탄한 기초를 높이 평가하고 Javascript에 대해 더 많은 것을 요청하기.",
        nextText: 43,
      },
      {
        text: "기술적인 세부 사항을 건너뛰고 여행을 계속 이어나가기.",
        nextText: 5,
      },
    ],
  },
  {
    id: 43,
    title: "Chapter 3.3: 자바스크립트 탐구",
    text: "당신은 개발자의 Javascript 숙련도의 핵심을 알게 될 것입니다. ES6 구문, Promise, async/await 및 기능적 프로그래밍 개념 시연은 개발자의 유능함을 보여줍니다.",
    img: "./assets/js.jpg",
    options: [
      {
        text: "숙달된 기술에 감탄하고 개발자의 React 기술을 살펴보도록 요청하기.",
        nextText: 44,
      },
      {
        text: "모험이 계속되기를 간절히 바라며 여행과 함께 이동하기.",
        nextText: 5,
      },
    ],
  },
  {
    id: 44,
    title: "Chapter 3.4: React 능력 공개",
    text: "AI는 React에 대한 개발자의 전문 지식을 보여줍니다. 복잡한 구성요소, 후크를 사용한 상태 관리, 가상 DOM을 사용한 고성능 렌더링을 볼 수 있습니다.",
    img: "./assets/react.jpg",
    options: [
      {
        text: "Node.js에 대한 백엔드 역량에 대해 문의하기.",
        nextText: 45,
      },
      {
        text: "개발자의 기술의 깊이를 확인한 후 여정을 계속 진행하기.",
        nextText: 4,
      },
    ],
  },
  {
    id: 45,
    title: "Chapter 3.5: 대망의 Node.js 공개",
    text: "여정을 계속 진행하세요. 마지막으로 AI는 개발자의 백엔드 전문 지식을 드러냅니다. Express.js로 구축된 강력한 API, 보안 인증 방식, WebSockets.g를 사용한 실시간 애플리케이션을 통해 개발자 기술의 깊이를 확인할 수 있습니다.",
    img: "./assets/node.jpg",
    options: [
      {
        text: "포괄적인 기술을 인식하고 여정을 계속 이어나가기.",
        nextText: 5,
      },
    ],
  },

  {
    id: 5,
    title: "Chapter 5: 임계점을 넘어",
    text: "HTML, CSS 및 JavaScript에 대한 개발자의 숙련도를 복잡하게 펼치는 레벨을 탐색하면서 모험에 더 깊이 빠져들게 됩니다. 도전 과제는 개발자의 기술의 깊이를 반영합니다.",
    img: "./assets/delve-deeper.jpg",
    options: [
      {
        text: "코드 솔루션의 탁월함을 감상하기.",
        nextText: 6,
      },
      {
        text: "더 깊은 의미는 고려하지 않고 문제를 훑어보기.",
        nextText: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Chapter 6: Tests, Allies, Enemies",
    text: "당신은 복잡한 코딩 문제로 제시되는 시련과 고난에 직면하게 됩니다. 각 솔루션은 다양한 프로젝트와 역할을 통한 개발자의 여정을 묘사하면서 경험의 새로운 측면을 보여줍니다.",
    img: "./assets/allies.jpg",
    options: [
      {
        text: "솔루션을 검토하고 개발자의 문제 해결 능력에 대한 통찰력 얻기",
        nextText: 7,
      },
      {
        text: "모험의 끝을 향해 달려가며 도전을 서두르기.",
        nextText: 7,
      },
    ],
  },
  {
    id: 7,
    title: "Chapter 7: 가장 깊은 동굴로의 접근",
    text: "당신은 지금 React, Node.js 또는 Angular와 같은 최첨단 기술에 대한 개발자의 지식을 암시하는 도전 과제인 모험의 절정에 가까워졌습니다.",
    img: "./assets/cave.jpg",
    options: [
      {
        text: "코드를 이해하고 최신 프레임워크에 대한 개발자의 숙련도를 분석하는 데 시간을 투자하기.",
        nextText: 8,
      },
      {
        text: "세부 사항 감상은 미루고 멈추지 않고 진행하기.",
        nextText: 8,
      },
    ],
  },
  {
    id: 8,
    title: "Chapter 8: 시련",
    text: "모험의 정점에서 당신은 풀 스택 개발에 대한 미묘한 이해가 필요한 복잡한 문제에 직면하게 됩니다. 이 과제에 대한 솔루션은 개발자의 역량을 입증하는 것입니다.",
    img: "./assets/ordeal.jpg",
    options: [
      {
        text: "코드를 심층적으로 검토하기.",
        nextText: 9,
      },
      {
        text: "문제 풀이의 중요성을 이해하지 못한 채 도전을 지나쳐 가기.",
        nextText: 9,
      },
    ],
  },
  {
    id: 9,
    title: "Chapter 9: 보상",
    text: "시련을 해결하면서 개발자의 전문적 업적, 공헌 및 칭찬에 대한 통찰력을 얻을 수 있습니다. 이는 그들의 여정에 대한 증거입니다",
    img: "./assets/reward.jpg",
    options: [
      {
        text: "개발자의 업적을 되돌아보고 그들의 여정을 소중히 여깁니다.",
        nextText: 10,
      },
      {
        text: "보상에 대해 관심 갖지 않고 끝까지 계속하기.",
        nextText: 10,
      },
    ],
  },
  {
    id: 10,
    title: "Chapter 10: 돌아가는 길",
    text: "당신은 마지막에 가까워지면서 모험을 다시 돌아보며 초보자에서 전문가가 되는 개발자의 여정을 보여주는 과정을 다시금 회상합니다.",
    img: "./assets/dream.jpg",
    options: [
      {
        text: "개발자의 성장과 발전을 감상하면서 과제를 다시 살펴보기.",
        nextText: 11,
      },
      {
        text: "여행을 회상하지 말고 서둘러 모험의 결론을 향해 나아가기",
        nextText: 11,
      },
    ],
  },
  {
    id: 11,
    title: "Chapter 11: 부활",
    text: "모험이 끝나면서 개발자의 모든 기술을 요약하는 마지막 도전에 직면하게 되며, 이는 앞으로 놓인 모든 전문적인 도전에 대한 준비가 되어 있음을 나타냅니다.",
    img: "./assets/resurrection.jpg",
    options: [
      {
        text: "개발자의 준비 상태를 인식하면서 최종 과제를 생각해 보기.",
        nextText: 12,
      },
      {
        text: "의미를 고려하지 않고 끝까지 진행하기",
        nextText: 12,
      },
    ],
  },
  {
    id: 12,
    title: "Chapter 12: 화려한 귀환",
    text: "모험을 종료하면서 개발자의 기술, 경험 및 성장 잠재력에 대한 철저한 이해를 얻게 됩니다. 기존의 이력서에서 경험해보지 못한 새로운 느낌입니다.",
    img: "./assets/elixir.jpg",
    options: [
      {
        text: "이 독특한 포트폴리오 접근 방식의 가치를 인식하기.",
        nextText: 13,
      },
      {
        text: "모험을 종료하기.",
        nextText: 1,
      },
    ],
  },
  {
    id: 13,
    title: "Epilogue",
    text: "모험이 끝나고 당신은 이 개발자의 기술을 깊이 이해하게 되었습니다. 다음에는 무엇을 할 건가요?",
    img: "./assets/epilogue.jpg",
    options: [
      {
        text: "잠재적인 가능성을 가진 개발자에게 문의하기.",
        nextText: 14,
        action: "link", // This tells the button what type of action to perform
        linkUrl: "https://www.linkedin.com/in/ademiralijagic", // replace with actual LinkedIn URL
      },
      {
        text: "모험을 종료하고 검색을 계속하기",
        nextText: 1,
      },
    ],
  },
  {
    id: 14,
    title: "새로운 시작",
    text: "당신은 개발자와 함께 새로운 여정을 시작하기로 결정하셨습니다. Congratulations! The end is a new beginning.",
    img: "./assets/The New Beginning.jpg",
    options: [
      {
        text: "성공적인 채용 과정을 축하합니다.",
        nextText: 1,
      },
    ],
  },
];
