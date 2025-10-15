class Palette {
    render() {
        const paletteElement = document.createElement('div');
        paletteElement.classList.add('palette');
        paletteElement.innerHTML = '<h2>Elements</h2>';

        const draggableButton = this.createDraggableElement('Button', 'button');
        const draggableTextBlock = this.createDraggableElement('Text', 'text-block');

        paletteElement.appendChild(draggableButton);
        paletteElement.appendChild(draggableTextBlock);

        return paletteElement;
    }

    createDraggableElement(text, elementType) {
        const element = document.createElement('div');
        element.textContent = text;
        element.classList.add('palette-element');
        if (elementType === 'button') {
            element.classList.add('button', 'button--primary');
        }
        element.setAttribute('draggable', 'true');

        element.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', elementType);
        });

        return element;
    }
}

export default Palette;