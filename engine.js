class QuantumNarrativeEngine {
    constructor(data) {
        this.data = data;
        this.currentState = null;
        this.observedStates = new Set();
        this.history = [];

        this.storyViewport = document.getElementById('narrative-content');
        this.actionButtons = document.getElementById('action-buttons');
        this.stateIndicator = document.getElementById('quantum-state');
        this.coherenceIndicator = document.getElementById('coherence');
        this.resetBtn = document.getElementById('reset-btn');

        this.init();
    }

    init() {
        this.loadNode('start');
        this.resetBtn.addEventListener('click', () => this.restart());
    }

    loadNode(nodeId) {
        const node = this.data[nodeId];
        if (!node) return;

        this.currentState = node;
        this.renderNode(node);
        this.updateIndicators(node);
    }

    renderNode(node) {
        // Clear previous animations and content
        this.storyViewport.classList.remove('fade-in');
        void this.storyViewport.offsetWidth; // Trigger reflow
        this.storyViewport.classList.add('fade-in');

        let html = `<h1>${node.title}</h1>`;
        html += `<p>${node.content}</p>`;

        this.storyViewport.innerHTML = html;
        this.renderActions(node.actions);
    }

    renderActions(actions) {
        this.actionButtons.innerHTML = '';
        actions.forEach((action, index) => {
            const btn = document.createElement('button');
            btn.innerText = action.text;
            
            // Add pulse effect to the primary/first action
            if (index === 0) btn.classList.add('quantum-pulse');
            
            btn.onclick = () => {
                if (action.type === 'collapse') {
                    this.collapseSuperposition();
                } else if (action.next) {
                    this.loadNode(action.next);
                }
            };
            this.actionButtons.appendChild(btn);
        });
    }

    collapseSuperposition() {
        if (!this.currentState.superpositions) return;

        // Visual "collapse" effect start
        this.storyViewport.classList.add('collapse-effect');
        
        // Add a glitch vibration to the whole container
        document.getElementById('app-container').style.animation = 'noiseMovement 0.1s infinite';

        setTimeout(() => {
            const randomIdx = Math.floor(Math.random() * this.currentState.superpositions.length);
            const selected = this.currentState.superpositions[randomIdx];
            
            this.storyViewport.classList.remove('collapse-effect');
            document.getElementById('app-container').style.animation = '';
            
            const node = {
                title: this.currentState.title,
                content: this.currentState.content + "\n\n" + selected.text,
                actions: [{ text: "계속하기 (관측 완료)", next: selected.next }]
            };
            
            this.updateIndicators(node, "COLLAPSED");
            this.renderNode(node);
        }, 800);
    }

    updateIndicators(node, forceState = null) {
        if (forceState) {
            this.stateIndicator.innerText = `STATE: ${forceState}`;
        } else {
            this.stateIndicator.innerText = node.superpositions ? "STATE: SUPERPOSITION" : "STATE: RESOLVED";
        }

        // Dynamic color shift based on state
        this.stateIndicator.style.color = node.superpositions ? "var(--accent-color)" : "#ff00ff";
    }

    restart() {
        this.loadNode('start');
    }
}

// Initialize engine when window loads
window.addEventListener('load', () => {
    new QuantumNarrativeEngine(STORY_DATA);
});
