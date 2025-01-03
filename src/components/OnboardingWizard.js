import React, { useState } from 'react';

const OnboardingWizard = () => {
    const [currentStep, setCurrentStep] = useState(0);

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

    const showStep = (step) => {
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
            default:
                break;
        }

        element.addEventListener('click', () => {
            tooltip.remove();
            setCurrentStep(currentStep + 1);
            if (currentStep < tutorialSteps.length - 1) {
                showStep(tutorialSteps[currentStep + 1]);
            }
        });
    };

    const startTutorial = () => {
        showStep(tutorialSteps[currentStep]);
    };

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

    const loadTemplate = (template) => {
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
    };

    return (
        <div id="onboarding-wizard">
            <h2>Welcome to the Algorithm Builder App</h2>
            <p>Let's get started with a quick setup and tutorial.</p>
            <button onClick={startTutorial}>Start Tutorial</button>
            <div id="template-container">
                <h2>Algorithm Templates</h2>
                {templates.map(template => (
                    <div
                        key={template.name}
                        className="template"
                        onClick={() => loadTemplate(template)}
                    >
                        {template.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OnboardingWizard;
