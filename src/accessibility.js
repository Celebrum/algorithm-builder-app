document.addEventListener('DOMContentLoaded', () => {
    // Implement accessibility features using semantic HTML and ARIA attributes
    const components = document.querySelectorAll('.component');
    components.forEach(component => {
        component.setAttribute('role', 'button');
        component.setAttribute('tabindex', '0');
        component.setAttribute('aria-label', `Algorithm component: ${component.dataset.type}`);
    });

    // Add focus management
    const focusableElements = document.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    let firstFocusableElement = focusableElements[0];
    let lastFocusableElement = focusableElements[focusableElements.length - 1];

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
            if (event.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement.focus();
                    event.preventDefault();
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement.focus();
                    event.preventDefault();
                }
            }
        }
    });

    // Add high-contrast color schemes
    const highContrastButton = document.createElement('button');
    highContrastButton.textContent = 'Toggle High Contrast';
    document.body.appendChild(highContrastButton);

    highContrastButton.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });

    // Ensure compatibility with screen readers and other assistive technologies
    const canvas = document.getElementById('algorithm-canvas');
    canvas.setAttribute('role', 'region');
    canvas.setAttribute('aria-label', 'Algorithm canvas area');

    const palette = document.getElementById('palette');
    palette.setAttribute('role', 'region');
    palette.setAttribute('aria-label', 'Algorithm components palette');
});
