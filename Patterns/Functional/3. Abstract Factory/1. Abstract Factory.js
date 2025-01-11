// Abstract Factory
function UIComponentFactory() { }

UIComponentFactory.prototype.createButton = function () { };
UIComponentFactory.prototype.createInputField = function () { };

// Concrete Factories
function WebUIComponentFactory() {
    this.createButton = function () {
        return new WebButton();
    };

    this.createInputField = function () {
        return new WebInputField();
    };
}

function MobileUIComponentFactory() {
    this.createButton = function () {
        return new MobileButton();
    };

    this.createInputField = function () {
        return new MobileInputField();
    };
}

// Product A - Button
function WebButton() {
    this.render = function () {
        console.log("Rendering web button");
    };
}

function MobileButton() {
    this.render = function () {
        console.log("Rendering mobile button");
    };
}

// Product B - InputField
function WebInputField() {
    this.render = function () {
        console.log("Rendering web input field");
    };
}

function MobileInputField() {
    this.render = function () {
        console.log("Rendering mobile input field");
    };
}

// Client code
function Client(factory) {
    this.button = factory.createButton();
    this.inputField = factory.createInputField();

    this.renderUI = function () {
        this.button.render();
        this.inputField.render();
    };
}

// Usage
const webFactory = new WebUIComponentFactory();
const mobileFactory = new MobileUIComponentFactory();

const webClient = new Client(webFactory);
const mobileClient = new Client(mobileFactory);

console.log("Web Client UI:");
webClient.renderUI();

console.log("Mobile Client UI:");
mobileClient.renderUI();
