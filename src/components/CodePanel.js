import React, { useState, useEffect } from 'react';

const CodePanel = ({ components }) => {
    const [code, setCode] = useState('');
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        generateCode();
    }, [components]);

    const generateCode = () => {
        let generatedCode = '';
        components.forEach(component => {
            const { type, properties } = component;
            generatedCode += generateCodeForComponent(type, properties);
        });
        setCode(generatedCode);
        provideFeedback(generatedCode);
    };

    const generateCodeForComponent = (type, properties) => {
        // Placeholder function for generating code based on component type and properties
        return `// Code for ${type} with properties ${JSON.stringify(properties)}\n`;
    };

    const provideFeedback = (generatedCode) => {
        // Placeholder function for providing feedback on generated code
        setFeedback(`Feedback for generated code:\n${generatedCode}`);
    };

    const saveCode = () => {
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'algorithm.js';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div id="code-panel">
            <h2>Generated Code</h2>
            <pre>{code}</pre>
            <h3>Feedback</h3>
            <pre>{feedback}</pre>
            <button onClick={saveCode}>Save Code</button>
        </div>
    );
};

export default CodePanel;
