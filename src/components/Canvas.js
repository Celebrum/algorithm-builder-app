import React, { useRef, useEffect, useState } from 'react';

const Canvas = () => {
    const canvasRef = useRef(null);
    const [components, setComponents] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [draggedComponent, setDraggedComponent] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);

        components.forEach(component => {
            context.fillStyle = 'lightgray';
            context.fillRect(component.x, component.y, 100, 50);
            context.strokeRect(component.x, component.y, 100, 50);
            context.fillStyle = 'black';
            context.fillText(component.type, component.x + 10, component.y + 25);
        });
    }, [components, zoom, pan]);

    const handleDrop = (event) => {
        event.preventDefault();
        const x = (event.clientX - canvasRef.current.offsetLeft) / zoom - pan.x;
        const y = (event.clientY - canvasRef.current.offsetTop) / zoom - pan.y;
        const newComponent = {
            type: draggedComponent.dataset.type,
            x,
            y
        };
        setComponents([...components, newComponent]);
        setIsDragging(false);
        setDraggedComponent(null);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleWheel = (event) => {
        const delta = event.deltaY > 0 ? 0.9 : 1.1;
        setZoom(zoom * delta);
    };

    const handleMouseDown = (event) => {
        setIsDragging(true);
        setDraggedComponent(event.target);
    };

    const handleMouseMove = (event) => {
        if (isDragging) {
            const x = (event.clientX - canvasRef.current.offsetLeft) / zoom - pan.x;
            const y = (event.clientY - canvasRef.current.offsetTop) / zoom - pan.y;
            setPan({ x, y });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            id="algorithm-canvas"
            ref={canvasRef}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            style={{
                width: '100%',
                height: '600px',
                border: '1px solid #ccc',
                backgroundColor: '#fff',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <canvas
                width={800}
                height={600}
                style={{
                    transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`
                }}
            />
        </div>
    );
};

export default Canvas;
