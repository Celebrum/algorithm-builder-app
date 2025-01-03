document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('algorithm-canvas');
    const components = document.getElementById('components');

    let draggedComponent = null;

    // Drag and drop functionality
    components.addEventListener('dragstart', (event) => {
        draggedComponent = event.target;
        event.target.classList.add('dragging');
    });

    components.addEventListener('dragend', (event) => {
        event.target.classList.remove('dragging');
        draggedComponent = null;
    });

    canvas.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    canvas.addEventListener('drop', (event) => {
        event.preventDefault();
        const x = event.clientX - canvas.offsetLeft;
        const y = event.clientY - canvas.offsetTop;
        const newComponent = draggedComponent.cloneNode(true);
        newComponent.style.left = `${x}px`;
        newComponent.style.top = `${y}px`;
        canvas.appendChild(newComponent);
    });

    // Code generation feature
    const generateCodeButton = document.createElement('button');
    generateCodeButton.textContent = 'Generate Code';
    document.body.appendChild(generateCodeButton);

    generateCodeButton.addEventListener('click', () => {
        const components = canvas.querySelectorAll('.component');
        let code = '';

        components.forEach((component) => {
            const type = component.dataset.type;
            const properties = component.dataset.properties;
            code += generateCodeForComponent(type, properties);
        });

        console.log(code);
    });

    function generateCodeForComponent(type, properties) {
        // Placeholder function for generating code based on component type and properties
        return `// Code for ${type} with properties ${properties}\n`;
    }

    // Real-time feedback and debugging environment
    const debugButton = document.createElement('button');
    debugButton.textContent = 'Debug';
    document.body.appendChild(debugButton);

    debugButton.addEventListener('click', () => {
        const components = canvas.querySelectorAll('.component');
        components.forEach((component) => {
            const type = component.dataset.type;
            const properties = component.dataset.properties;
            debugComponent(type, properties);
        });
    });

    function debugComponent(type, properties) {
        // Placeholder function for debugging component based on type and properties
        console.log(`Debugging ${type} with properties ${properties}`);
    }

    // Real-time feedback panel
    const feedbackPanel = document.createElement('div');
    feedbackPanel.id = 'feedback-panel';
    document.body.appendChild(feedbackPanel);

    function updateFeedbackPanel(message) {
        feedbackPanel.textContent = message;
    }

    // Update feedback panel with generated code
    generateCodeButton.addEventListener('click', () => {
        const components = canvas.querySelectorAll('.component');
        let code = '';

        components.forEach((component) => {
            const type = component.dataset.type;
            const properties = component.dataset.properties;
            code += generateCodeForComponent(type, properties);
        });

        updateFeedbackPanel(code);
    });

    // Debugging environment
    const debugPanel = document.createElement('div');
    debugPanel.id = 'debug-panel';
    document.body.appendChild(debugPanel);

    function updateDebugPanel(message) {
        debugPanel.textContent = message;
    }

    debugButton.addEventListener('click', () => {
        const components = canvas.querySelectorAll('.component');
        components.forEach((component) => {
            const type = component.dataset.type;
            const properties = component.dataset.properties;
            updateDebugPanel(`Debugging ${type} with properties ${properties}`);
        });
    });
});
