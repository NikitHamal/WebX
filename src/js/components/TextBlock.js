class TextBlock {
    constructor({ text = 'Enter text here...' } = {}) {
        this.text = text;
    }

    render() {
        const textElement = document.createElement('div');
        textElement.classList.add('text-block');
        textElement.textContent = this.text;
        textElement.setAttribute('contenteditable', 'true');
        return textElement;
    }
}

export default TextBlock;