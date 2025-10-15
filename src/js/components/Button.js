class Button {
    constructor({ text, onClick, type = 'primary' }) {
        this.text = text;
        this.onClick = onClick;
        this.type = type;
    }

    render() {
        const buttonElement = document.createElement('button');
        buttonElement.classList.add('button', `button--${this.type}`);
        buttonElement.textContent = this.text;
        buttonElement.addEventListener('click', this.onClick);
        return buttonElement;
    }
}

export default Button;