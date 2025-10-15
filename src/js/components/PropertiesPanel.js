import Card from './Card.js';

class PropertiesPanel {
    render() {
        const propertiesPanelElement = document.createElement('div');
        propertiesPanelElement.classList.add('properties-panel');
        propertiesPanelElement.innerHTML = '<h2>Properties</h2>';

        const card = new Card({
            title: 'Button Properties',
            content: '<p>Some properties here...</p>',
        });

        propertiesPanelElement.appendChild(card.render());

        return propertiesPanelElement;
    }
}

export default PropertiesPanel;