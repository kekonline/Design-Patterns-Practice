// Abstract Factory Interface
class UIFactory {
    createButton() {
        throw new Error("Method 'createButton()' must be implemented.");
    }

    createCheckbox() {
        throw new Error("Method 'createCheckbox()' must be implemented.");
    }
}

// Concrete Factory for Dark Theme
class DarkThemeFactory extends UIFactory {
    createButton() {
        return new DarkButton();
    }

    createCheckbox() {
        return new DarkCheckbox();
    }
}

// Concrete Factory for Light Theme
class LightThemeFactory extends UIFactory {
    createButton() {
        return new LightButton();
    }

    createCheckbox() {
        return new LightCheckbox();
    }
}

// Abstract Products
class Button {
    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
}

class Checkbox {
    render() {
        throw new Error("Method 'render()' must be implemented.");
    }
}

// Concrete Products for Dark Theme
class DarkButton extends Button {
    render() {
        console.log("Rendering Dark Button");
    }
}

class DarkCheckbox extends Checkbox {
    render() {
        console.log("Rendering Dark Checkbox");
    }
}

// Concrete Products for Light Theme
class LightButton extends Button {
    render() {
        console.log("Rendering Light Button");
    }
}

class LightCheckbox extends Checkbox {
    render() {
        console.log("Rendering Light Checkbox");
    }
}

// Client Code
function renderUI(factory) {
    const button = factory.createButton();
    const checkbox = factory.createCheckbox();

    button.render();
    checkbox.render();
}

// Usage
const darkFactory = new DarkThemeFactory();
console.log("Dark Theme UI:");
renderUI(darkFactory);

const lightFactory = new LightThemeFactory();
console.log("\nLight Theme UI:");
renderUI(lightFactory);
