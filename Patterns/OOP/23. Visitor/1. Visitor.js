// Visitor: Defines operations for different UI components
class Renderer {
    visitButton(button) {
        return `<button>${button.label}</button>`;
    }

    visitTextField(textField) {
        return `<input type="text" placeholder="${textField.placeholder}" />`;
    }

    visitImage(image) {
        return `<img src="${image.src}" alt="${image.alt}" />`;
    }
}

class AccessibilityMetadataGenerator {
    visitButton(button) {
        return { role: 'button', label: button.label };
    }

    visitTextField(textField) {
        return { role: 'textbox', placeholder: textField.placeholder };
    }

    visitImage(image) {
        return { role: 'img', alt: image.alt };
    }
}

// Elements: UI Components
class Button {
    constructor(label) {
        this.label = label;
    }

    accept(visitor) {
        return visitor.visitButton(this);
    }
}

class TextField {
    constructor(placeholder) {
        this.placeholder = placeholder;
    }

    accept(visitor) {
        return visitor.visitTextField(this);
    }
}

class Image {
    constructor(src, alt) {
        this.src = src;
        this.alt = alt;
    }

    accept(visitor) {
        return visitor.visitImage(this);
    }
}

// Client Code
const components = [
    new Button('Submit'),
    new TextField('Enter your name'),
    new Image('/logo.png', 'Company Logo'),
];

const renderer = new Renderer();
const metadataGenerator = new AccessibilityMetadataGenerator();

// Render HTML
components.forEach((component) => {
    console.log('HTML:', component.accept(renderer));
});

// Generate Accessibility Metadata
components.forEach((component) => {
    console.log('Accessibility Metadata:', component.accept(metadataGenerator));
});
