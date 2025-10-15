import Button from './Button.js';
import TextBlock from './TextBlock.js';

class Canvas {
    constructor(onElementSelect) {
        this.elements = [];
        this.onElementSelect = onElementSelect;
        this.addNewElement = this.addNewElement.bind(this);
    }

    render() {
        const canvasElement = document.createElement('div');
        canvasElement.classList.add('canvas');
        canvasElement.innerHTML = '<p>Canvas</p>'; // Placeholder text

        canvasElement.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        canvasElement.addEventListener('drop', (event) => {
            event.preventDefault();
            const operation = event.dataTransfer.getData('text/plain');

            if (operation === 'button' || operation === 'text-block') {
                this.addNewElement(canvasElement, operation);
            } else if (operation === 'move') {
                const elementId = event.dataTransfer.getData('elementId');
                const elementToMove = document.getElementById(elementId);
                canvasElement.appendChild(elementToMove);
            }
        });

        return canvasElement;
    }

    addNewElement(canvasElement, elementType) {
        let newComponent;
        if (elementType === 'button') {
            newComponent = new Button({
                text: 'New Button',
                onClick: () => console.log('New button clicked'),
            });
        } else if (elementType === 'text-block') {
            newComponent = new TextBlock();
        }

        if (newComponent) {
            const element = newComponent.render();
            element.id = `el-${Date.now()}`;
            element.setAttribute('draggable', 'true');

            element.addEventListener('dragstart', (event) => {
                event.dataTransfer.setData('text/plain', 'move');
                event.dataTransfer.setData('elementId', element.id);
            });

            element.addEventListener('click', () => {
                this.onElementSelect(element);
            });

            if (canvasElement.querySelector('p')) {
                canvasElement.innerHTML = '';
            }
            canvasElement.appendChild(element);
            this.elements.push(newComponent);
        }

        return canvasElement;
    }
}

export default Canvas;