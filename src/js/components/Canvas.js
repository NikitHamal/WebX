class Canvas {
    render() {
        const canvasElement = document.createElement('div');
        canvasElement.classList.add('canvas');
        canvasElement.innerHTML = '<p>Canvas</p>';
        return canvasElement;
    }
}

export default Canvas;