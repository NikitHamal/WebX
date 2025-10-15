class Card {
    constructor({ title, content }) {
        this.title = title;
        this.content = content;
    }

    render() {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const titleElement = document.createElement('h3');
        titleElement.textContent = this.title;
        cardElement.appendChild(titleElement);

        const contentElement = document.createElement('div');
        contentElement.innerHTML = this.content;
        cardElement.appendChild(contentElement);

        return cardElement;
    }
}

export default Card;