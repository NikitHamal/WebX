import Palette from './Palette.js';
import Canvas from './Canvas.js';
import PropertiesPanel from './PropertiesPanel.js';

class App {
    constructor() {
        this.palette = new Palette();
        this.canvas = new Canvas();
        this.propertiesPanel = new PropertiesPanel();
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