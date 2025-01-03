import React, { useState } from 'react';
import { componentsLibrary, createComponent, saveComponent, searchComponents } from '../components';

const Palette = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredComponents, setFilteredComponents] = useState(componentsLibrary);

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        setFilteredComponents(searchComponents(query));
    };

    const handleTouchStart = (event) => {
        const component = event.target;
        component.classList.add('dragging');
    };

    const handleTouchEnd = (event) => {
        const component = event.target;
        component.classList.remove('dragging');
    };

    return (
        <div id="palette">
            <h2>Algorithm Components</h2>
            <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={handleSearch}
            />
            <div id="components">
                {filteredComponents.map((component) => (
                    <div
                        key={component.id}
                        className="component"
                        draggable
                        data-type={component.type}
                        data-properties={JSON.stringify(component.properties)}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    >
                        {component.type}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Palette;
