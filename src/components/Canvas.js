import React, { useRef, useEffect, useState } from 'react';

const Canvas = () => {
    const canvasRef = useRef(null);
    const [components, setComponents] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [draggedComponent, setDraggedComponent] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [previewElement, setPreviewElement] = useState(null);
    const [dropIndicator, setDropIndicator] = useState(null);
    const [debounceTimeout, setDebounceTimeout] = useState(null);

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
        const x = Math.round((event.clientX - canvasRef.current.offsetLeft) / 10) * 10;
        const y = Math.round((event.clientY - canvasRef.current.offsetTop) / 10) * 10;
        const newComponent = {
            type: draggedComponent.dataset.type,
            x,
            y
        };
        setComponents([...components, newComponent]);
        setIsDragging(false);
        setDraggedComponent(null);
        hideDropIndicator();
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        showDropIndicator(event);
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

    const showPreview = (event) => {
        if (!previewElement) {
            const preview = document.createElement('div');
            preview.id = 'drag-preview';
            document.body.appendChild(preview);
            setPreviewElement(preview);
        }
        previewElement.style.left = `${event.clientX}px`;
        previewElement.style.top = `${event.clientY}px`;
    };

    const hidePreview = () => {
        if (previewElement) {
            previewElement.remove();
            setPreviewElement(null);
        }
    };

    const showDropIndicator = (event) => {
        if (!dropIndicator) {
            const indicator = document.createElement('div');
            indicator.id = 'drop-indicator';
            document.body.appendChild(indicator);
            setDropIndicator(indicator);
        }
        dropIndicator.style.left = `${event.clientX}px`;
        dropIndicator.style.top = `${event.clientY}px`;
    };

    const hideDropIndicator = () => {
        if (dropIndicator) {
            dropIndicator.remove();
            setDropIndicator(null);
        }
    };

    const debounce = (func, wait) => {
        return function(...args) {
            clearTimeout(debounceTimeout);
            setDebounceTimeout(setTimeout(() => func.apply(this, args), wait));
        };
    };

    const handleTouchStart = (event) => {
        setIsDragging(true);
        setDraggedComponent(event.target);
        showPreview(event.touches[0]);
    };

    const handleTouchEnd = (event) => {
        setIsDragging(false);
        setDraggedComponent(null);
        hidePreview();
    };

    const handleTouchMove = (event) => {
        event.preventDefault();
        showDropIndicator(event.touches[0]);
    };

    const handleTouchDrop = (event) => {
        event.preventDefault();
        const x = Math.round((event.changedTouches[0].clientX - canvasRef.current.offsetLeft) / 10) * 10;
        const y = Math.round((event.changedTouches[0].clientY - canvasRef.current.offsetTop) / 10) * 10;
        const newComponent = {
            type: draggedComponent.dataset.type,
            x,
            y
        };
        setComponents([...components, newComponent]);
        hideDropIndicator();
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
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onTouchDrop={handleTouchDrop}
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
