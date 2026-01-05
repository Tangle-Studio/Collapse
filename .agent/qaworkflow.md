# QA Workflow: Multi-Agent Novel Validation (멀티 에이전트 소설 검증 워크플로우)

## [한글 요약 / Korean Summary]
이 문서는 소설의 품질 관리를 위해 4단계의 순차적 검증 과정을 정의합니다. 각 단계는 특정 목적을 가진 에이전트(혹은 논리 블록)가 담당하며, 이전 단계를 통과해야 다음 단계로 진행됩니다.
1. **표절 검사**: 기존 작품과의 유사성을 확인하여 독창성 확보.
2. **재미/진부함 검증**: 서사의 흥미 요소와 클리셰를 분석하여 몰입도 향상.
3. **논리 구조 검사**: 양자역학적 설정의 일관성과 분기점의 논리적 연결성 확인.
4. **언어/문법 검사**: 한글/영문 맞춤법 및 자연스러운 표현 검증.

---

## [Workflow Definition / 영문 상세 내용]

This workflow defines a sequential multi-agent process to ensure the high quality of the "Quantum Narratives" project.

### 1. Agent: The Originality Auditor (표절 검사)
- **Objective**: Ensure the narrative is unique and not infringing on existing copyrights or being overly derivative of popular sci-fi.
- **Action**: Compare narrative fragments against known databases and check for specific phrasing patterns common in web-scraped AI data.

### 2. Agent: The Engagement Specialist (재미/진부함 검증)
- **Objective**: Identify "tired" cliches and enhance the emotional payoff of each scene.
- **Action**: Analyze pacing, tension curves, and character motivations. Flag segments that feel predictable or uninspired.

### 3. Agent: The Quantum Logician (논리적 구조 검사)
- **Objective**: Verify that the quantum mechanics (Superposition, Entanglement) are applied consistently and that all story branches lead to valid states.
- **Action**: Map out the state transitions in `story_data.js` and simulate multiple playthroughs to find dead ends or paradoxes.

### 4. Agent: The Linguistic Polisher (문법 및 문체 검사)
- **Objective**: Ensure flawless grammar and natural flow in both Korean and English.
- **Action**: Perform spell checks, style consistency audits, and verify that the bilingual translations maintain the same emotional tone.

## Execution Trigger
- This workflow must be triggered after any significant update to `story_data.js` or before a new chapter release.
