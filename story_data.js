const STORY_DATA = {
    start: {
        id: "start",
        title: "슈뢰딩거의 아침",
        content: "눈을 떴을 때, 당신은 두 가지 상태에 동시에 존재하고 있습니다.\n\n하나는 정적이고 평화로운 침대 위, 다른 하나는 붕괴해가는 화성 기지의 금속 바닥 위입니다. 관측자가 문을 열기 전까지, 당신의 현실은 결정되지 않았습니다.",
        superpositions: [
            {
                condition: "random",
                text: "당신은 기지창 밖으로 붉은 먼지 폭풍을 봅니다. 모든 것이 고요합니다. 화성 기지는 안전합니다.",
                next: "mars_safe"
            },
            {
                condition: "random",
                text: "경보음이 고막을 찢습니다. 기압이 급격히 떨어지고 있습니다. 기지는 붕괴 중입니다.",
                next: "mars_crisis"
            }
        ],
        actions: [
            { text: "현실을 확정하기", type: "collapse" }
        ]
    },
    mars_safe: {
        id: "mars_safe",
        title: "안정적 궤도",
        content: "먼지 폭풍은 지나갔습니다. 당신은 따뜻한 커피 한 잔을 쥐고 터미널 앞에 앉습니다. 지구로부터의 신호는 여전히 차단되어 있지만, 이곳은 안전합니다.",
        actions: [
            { text: "지구 신호 검색하기", next: "search_earth" },
            { text: "기지 점검하기", next: "check_base" }
        ]
    },
    mars_crisis: {
        id: "mars_crisis",
        title: "사건의 지평선",
        content: "산소 농도 8%. 당신은 비상 탈출구로 몸을 던집니다. 뒤편에서 기지의 거대한 모듈이 소리 없이 우주로 뜯겨 나갑니다.",
        actions: [
            { text: "통신 장비 확보하기", next: "search_earth" },
            { text: "탈출선으로 달리기", next: "escape_pod" }
        ]
    }
};
