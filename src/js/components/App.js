import Palette from './Palette.js';
import Canvas from './Canvas.js';
import PropertiesPanel from './PropertiesPanel.js';

class App {
    constructor() {
        this.handleElementSelect = this.handleElementSelect.bind(this);
        this.handleElementUpdate = this.handleElementUpdate.bind(this);

        this.canvas = new Canvas(this.handleElementSelect);
        this.propertiesPanel = new PropertiesPanel(this.handleElementUpdate);
        this.palette = new Palette();

        this.selectedElement = null;
    }

    handleElementSelect(element) {
        this.selectedElement = element;
        this.propertiesPanel.update(element);
    }

    handleElementUpdate(element, property, value) {
        // This function will be called by the properties panel
        // For now, let's just log it.
        console.log(`Updating ${property} of element to ${value}`);
        if (element) {
            element.textContent = value; // Example update
        }
    }

    render() {
        const appElement = document.createElement('div');
        appElement.classList.add('app-container');

        appElement.appendChild(this.palette.render());
        appElement.appendChild(this.canvas.render());
        appElement.appendChild(this.propertiesPanel.render());

        return appElement;
    }
}

export default App;