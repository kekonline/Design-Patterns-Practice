// Flyweight object that stores shared styles
class ButtonStyle {
    constructor(font, border, color) {
        this.font = font;
        this.border = border;
        this.color = color;
    }

    display() {
        console.log(`Font: ${this.font}, Border: ${this.border}, Color: ${this.color}`);
    }
}

// Flyweight Factory to manage button styles
class ButtonStyleFactory {
    constructor() {
        this.styles = {};
    }

    getButtonStyle(font, border, color) {
        const key = `${font}-${border}-${color}`;
        if (!this.styles[key]) {
            this.styles[key] = new ButtonStyle(font, border, color);
            console.log(`Creating new button style: ${font}, ${border}, ${color}`);
        }
        return this.styles[key];
    }
}

// Context object for Button, which holds specific properties
class Button {
    constructor(label, size, position, style) {
        this.label = label;
        this.size = size;
        this.position = position;
        this.style = style;
    }

    render() {
        console.log(`Rendering Button: ${this.label}`);
        this.style.display();
        console.log(`Size: ${this.size}, Position: (${this.position.x}, ${this.position.y})`);
    }
}

// Usage
const styleFactory = new ButtonStyleFactory();

// Shared styles are reused for similar buttons
const buttonStyle1 = styleFactory.getButtonStyle('Arial', '2px solid black', 'blue');
const buttonStyle2 = styleFactory.getButtonStyle('Arial', '2px solid black', 'blue');
const buttonStyle3 = styleFactory.getButtonStyle('Arial', '2px solid black', 'red');

const button1 = new Button('Submit', 'Medium', { x: 10, y: 20 }, buttonStyle1);
const button2 = new Button('Cancel', 'Large', { x: 30, y: 40 }, buttonStyle2);
const button3 = new Button('Save', 'Small', { x: 50, y: 60 }, buttonStyle3);

button1.render();
button2.render();
button3.render();

// Checking if styles are shared
console.log(buttonStyle1 === buttonStyle2);  // true (shared style)
console.log(buttonStyle1 === buttonStyle3);  // false (different style)
