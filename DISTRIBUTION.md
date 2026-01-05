# Distribution & Anti-Plagiarism Strategy (배포 및 표절 방지 전략)

## [한글 요약 / Korean Summary]
"Quantum Narratives"의 글로벌 배포를 위한 플랫폼 선정과 창작물 보호를 위한 전략을 제안합니다.
- **배포 플랫폼**: Reddit(커뮤니티), itch.io(인디 게임), GitHub(서사 플랫폼) 등을 활용한 다각도 접근.
- **커뮤니티 네이티브 포맷**: 레딧 게시물 간 링크 및 깃허브 디렉토리 구조를 활용한 배포.
- **표절 방지**: 주기적인 AI 기반 표절 검사와 고유한 Narrative Engine 로직 노출 최소화.
- **홍보 전략**: '양자역학적 선택'이라는 독특한 키워드를 중심으로 짧은 데모 영상과 인터렉티브 미리보기를 배포.

---

## [Distribution Plan / 영문 상세 내용]

### 1. Target Platforms
- **Reddit**: Use subreddits like `r/interactivefiction`, `r/visualnovels`, and `r/webgames` for community feedback and initial traffic. Providing a direct link to a hosted web version is key.
- **itch.io**: The primary platform for indie interactive experiences. It allows for "Pay What You Want" models and has a strong community for text-based games.
- **Hosting**: Deploy using **Vercel** or **Netlify** for high performance and global CDN availability.

### 2. Anti-Plagiarism & Content Protection
- **Creative Commons License**: Apply a `CC BY-NC-ND` (Attribution-NonCommercial-NoDerivs) license initially to protect the core narrative.
- **Logic Obfuscation**: While the frontend is transparent, certain "state transition" logic can be kept in a more complex structure to discourage simple copy-pasting.
- **Regular Audits**: Use tools like **Copyscape** or AI originality detectors to monitor for unauthorized re-publications on other web novel platforms.

### 3. Community-Native Format (레딧/커뮤니티 최적화)
- **Reddit-Native CYOA**: 웹 버전으로의 유도뿐만 아니라, 레딧 내부에서 완결되는 '텍스트 레이어'를 제공합니다. 
  - **Link Architecture**: 각 게시물의 끝에 다음 단계로 이어지는 다른 게시물 또는 댓글의 링크를 배치합니다. 이는 사용자가 플랫폼을 이탈하지 않고도 '선택'의 재미를 느끼게 합니다.
  - **Quantum Hybrid**: Reddit에서 선택지를 클릭하면 유입 경로(Referrer)에 따라 다른 결과를 보여주는 웹 페이지로 연결하여 '양자적 붕괴'를 경험하게 합니다.

### 4. GitHub-Native Strategy (깃허브 서사 플랫폼화)
- **GitHub Pages**: `index.html`을 기반으로 한 즉각적인 웹 서비스 배포.
- **Pull Request as Timeline**: 독자가 직접 새로운 '타임라인'이나 '분기'를 PR로 제안하도록 유도하여 참여형 소설로 확장.
- **Issues as Observation**: 특정 스토리 구간의 의문점이나 관측 결과를 Issue로 등록하여, QSM(AI)이 이에 응답하거나 다음 챕터에 반영하게 함.
- **Releases/Tags**: 이야기의 큰 전환점을 '버전'으로 배포하여 사용자가 과거의 현실로 돌아가거나 새로운 도약(Leap)을 하는 경험 제공.

### 5. Dual-Branch Security Strategy (이원화 보안 전략)
소스코드 보안과 독자 경험 분리를 위해 다음과 같이 브랜치를 운용합니다.
- **`develop` (비공개 권장)**: 모든 개발 소스(`src`), 정책(`.agent`), 기술 문서(`SPEC.md`, `ROADMAP.md`)를 포함하는 작업 브랜치.
- **`main` (공개 배포)**: 오직 '소설 독자'를 위한 브랜치. 
  - **포함 항목**: 실행용 파일(`index.html`, `style.css`, `engine.js`, `story_data.js`), 공개용 `README.md`, 독자 매뉴얼(`MANUAL.md`).
  - **제외 항목**: `.agent`, `src`, `SPEC.md`, `ROADMAP.md`, `task.md` 등 개발 관련 모든 내부 데이터.
- **자동화**: `develop`에서 검증이 완료된 스토리만 `main`으로 머지(Merge)하거나, 배포용 빌드 결과물만 푸시하는 워크플로우를 권장합니다.

### 6. Marketing Strategy
- **Interactive Demos**: Release a "Quantum Prologue" as a free, sharable link.
- **Cross-Linking**: Structure Reddit posts as a "Nebula of Stories" where each post links to multiple potential futures, enticing readers to explore the web version for the "Real-time Collapse" effect.
- **Visual Teasers**: Create GIFs/Shorts showing the "collapse" animation and the glassmorphism UI to showcase the premium quality.
