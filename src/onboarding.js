document.addEventListener('DOMContentLoaded', () => {
    // Implement an onboarding wizard for initial setup and basic usage
    const onboardingWizard = document.createElement('div');
    onboardingWizard.id = 'onboarding-wizard';
    onboardingWizard.innerHTML = `
        <h2>Welcome to the Algorithm Builder App</h2>
        <p>Let's get started with a quick setup and tutorial.</p>
        <button id="start-tutorial">Start Tutorial</button>
    `;
    document.body.appendChild(onboardingWizard);

    document.getElementById('start-tutorial').addEventListener('click', () => {
        onboardingWizard.style.display = 'none';
        startTutorial();
    });

    function startTutorial() {
        // Add interactive tutorials and tooltips
        const tutorialSteps = [
            {
                element: '#palette',
                content: 'This is the palette where you can find algorithm components.',
                position: 'right'
            },
            {
                element: '#algorithm-canvas',
                content: 'This is the canvas where you can build your algorithm by dragging and dropping components.',
                position: 'left'
            },
            {
                element: '#generate-code-button',
                content: 'Click this button to generate code from your visual algorithm.',
                position: 'bottom'
            },
            {
                element: '#debug-button',
                content: 'Click this button to debug your algorithm and see real-time feedback.',
                position: 'bottom'
            }
        ];

        let currentStep = 0;

        function showStep(step) {
            const element = document.querySelector(step.element);
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.textContent = step.content;
            document.body.appendChild(tooltip);

            const rect = element.getBoundingClientRect();
            switch (step.position) {
                case 'right':
                    tooltip.style.left = `${rect.right + 10}px`;
                    tooltip.style.top = `${rect.top}px`;
                    break;
                case 'left':
                    tooltip.style.left = `${rect.left - tooltip.offsetWidth - 10}px`;
                    tooltip.style.top = `${rect.top}px`;
                    break;
                case 'bottom':
                    tooltip.style.left = `${rect.left}px`;
                    tooltip.style.top = `${rect.bottom + 10}px`;
                    break;
                case 'top':
                    tooltip.style.left = `${rect.left}px`;
                    tooltip.style.top = `${rect.top - tooltip.offsetHeight - 10}px`;
                    break;
            }

            element.addEventListener('click', () => {
                tooltip.remove();
                currentStep++;
                if (currentStep < tutorialSteps.length) {
                    showStep(tutorialSteps[currentStep]);
                }
            });
        }

        showStep(tutorialSteps[currentStep]);
    }

    // Include pre-built algorithm templates for quick customization
    const templates = [
        {
            name: 'Bubble Sort',
            components: [
                { type: 'loop', properties: { iterations: 'n' } },
                { type: 'conditional', properties: { condition: 'array[i] > array[i + 1]' } },
                { type: 'function', properties: { name: 'swap', parameters: ['array', 'i', 'i + 1'] } }
            ]
        },
        {
            name: 'Binary Search',
            components: [
                { type: 'function', properties: { name: 'binarySearch', parameters: ['array', 'target'] } },
                { type: 'conditional', properties: { condition: 'array[mid] == target' } },
                { type: 'conditional', properties: { condition: 'array[mid] < target' } },
                { type: 'conditional', properties: { condition: 'array[mid] > target' } }
            ]
        }
    ];

    const templateContainer = document.createElement('div');
    templateContainer.id = 'template-container';
    templateContainer.innerHTML = '<h2>Algorithm Templates</h2>';
    document.body.appendChild(templateContainer);

    templates.forEach(template => {
        const templateElement = document.createElement('div');
        templateElement.classList.add('template');
        templateElement.textContent = template.name;
        templateContainer.appendChild(templateElement);

        templateElement.addEventListener('click', () => {
            loadTemplate(template);
        });
    });

    function loadTemplate(template) {
        const canvas = document.getElementById('algorithm-canvas');
        canvas.innerHTML = '';
        template.components.forEach(component => {
            const componentElement = document.createElement('div');
            componentElement.classList.add('component');
            componentElement.dataset.type = component.type;
            componentElement.dataset.properties = JSON.stringify(component.properties);
            componentElement.textContent = component.type;
            canvas.appendChild(componentElement);
        });
    }
});
