import Button from './Button.js';

class Palette {
    render() {
        const paletteElement = document.createElement('div');
        paletteElement.classList.add('palette');
        paletteElement.innerHTML = '<h2>Elements</h2>';

        const button = new Button({
            text: 'Button',
            onClick: () => console.log('Button clicked'),
        });

        paletteElement.appendChild(button.render());

        return paletteElement;
    }
}

export default Palette;