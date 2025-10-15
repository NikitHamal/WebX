class PropertiesPanel {
    constructor(onElementUpdate) {
        this.onElementUpdate = onElementUpdate;
        this.selectedElement = null;
        this.panelElement = document.createElement('div');
        this.panelElement.classList.add('properties-panel');
        this.panelElement.innerHTML = '<h2>Properties</h2>';
    }

    update(element) {
        this.selectedElement = element;
        this.renderProperties();
    }

    renderProperties() {
        // Clear previous properties
        this.panelElement.innerHTML = '<h2>Properties</h2>';

        if (!this.selectedElement) {
            this.panelElement.innerHTML += '<p>Select an element to edit its properties.</p>';
            return;
        }

        // Example: Add a text input for the button's text content
        const textLabel = document.createElement('label');
        textLabel.textContent = 'Text: ';
        const textInput = document.createElement('input');
        textInput.type = 'text';
        textInput.value = this.selectedElement.textContent;
        textInput.addEventListener('input', (event) => {
            this.onElementUpdate(this.selectedElement, 'textContent', event.target.value);
        });

        this.panelElement.appendChild(textLabel);
        this.panelElement.appendChild(textInput);

        // Add a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('button', 'button--primary');
        deleteButton.addEventListener('click', () => {
            if (this.selectedElement) {
                this.selectedElement.remove();
                this.update(null); // Clear the properties panel
            }
        });

        this.panelElement.appendChild(deleteButton);
    }

    render() {
        this.renderProperties(); // Initial render
        return this.panelElement;
    }
}

export default PropertiesPanel;