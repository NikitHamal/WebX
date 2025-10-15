class Image {
    constructor({ src = 'https://via.placeholder.com/150' } = {}) {
        this.src = src;
    }

    render() {
        const imageElement = document.createElement('img');
        imageElement.src = this.src;
        imageElement.classList.add('image-element');
        return imageElement;
    }
}

export default Image;