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
        if (this.selectedElement) {
            this.selectedElement.classList.remove('selected');
        }

        this.selectedElement = element;

        if (this.selectedElement) {
            this.selectedElement.classList.add('selected');
        }

        this.propertiesPanel.update(element);
    }

    handleElementUpdate(element, property, value, isStyle) {
        if (!element) return;

        if (isStyle) {
            // Append 'px' to font size
            const finalValue = property === 'fontSize' ? `${value}px` : value;
            element.style[property] = finalValue;
        } else {
            element[property] = value;
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