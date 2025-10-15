class PropertiesPanel {
    constructor(onElementUpdate) {
        this.onElementUpdate = onElementUpdate;
        this.selectedElement = null;
        this.panelElement = document.createElement('div');
        this.panelElement.classList.add('properties-panel');
    }

    update(element) {
        this.selectedElement = element;
        this.render();
    }

    createPropertyInput(label, type, value, propertyName, styleProperty = false) {
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('property-input');

        const labelElement = document.createElement('label');
        labelElement.textContent = label;
        inputContainer.appendChild(labelElement);

        const inputElement = document.createElement('input');
        inputElement.type = type;
        inputElement.value = value;

        inputElement.addEventListener('input', (event) => {
            const newValue = event.target.value;
            this.onElementUpdate(this.selectedElement, propertyName, newValue, styleProperty);
        });

        inputContainer.appendChild(inputElement);
        return inputContainer;
    }

    render() {
        this.panelElement.innerHTML = '<h2>Properties</h2>';

        if (!this.selectedElement) {
            this.panelElement.innerHTML += '<p>Select an element to edit its properties.</p>';
            return this.panelElement;
        }

        // Text Content
        this.panelElement.appendChild(
            this.createPropertyInput('Text', 'text', this.selectedElement.textContent, 'textContent')
        );

        // Color
        this.panelElement.appendChild(
            this.createPropertyInput('Color', 'color', this.selectedElement.style.color, 'color', true)
        );

        // Font Size
        this.panelElement.appendChild(
            this.createPropertyInput('Font Size (px)', 'number', parseInt(this.selectedElement.style.fontSize) || 16, 'fontSize', true)
        );

        // Image Source (only for images)
        if (this.selectedElement.tagName === 'IMG') {
            this.panelElement.appendChild(
                this.createPropertyInput('Image URL', 'text', this.selectedElement.src, 'src')
            );
        }

        // Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('button', 'button--primary');
        deleteButton.style.marginTop = '16px';
        deleteButton.addEventListener('click', () => {
            this.selectedElement.remove();
            this.update(null);
        });
        this.panelElement.appendChild(deleteButton);

        return this.panelElement;
    }
}

export default PropertiesPanel;