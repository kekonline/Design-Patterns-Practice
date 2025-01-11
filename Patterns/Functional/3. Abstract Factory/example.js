// Abstract Factory
function FurnitureFactory() { }

FurnitureFactory.prototype.createChair = function () { };
FurnitureFactory.prototype.createSofa = function () { };

// Concrete Factories
function ModernFurnitureFactory() {
    this.createChair = function () {
        return new ModernChair();
    };

    this.createSofa = function () {
        return new ModernSofa();
    };
}

function VictorianFurnitureFactory() {
    this.createChair = function () {
        return new VictorianChair();
    };

    this.createSofa = function () {
        return new VictorianSofa();
    };
}

// Product A - Chair
function ModernChair() {
    this.sit = function () {
        console.log("Sitting on a modern chair.");
    };
}

function VictorianChair() {
    this.sit = function () {
        console.log("Sitting on a Victorian chair.");
    };
}

// Product B - Sofa
function ModernSofa() {
    this.lieDown = function () {
        console.log("Lying down on a modern sofa.");
    };
}

function VictorianSofa() {
    this.lieDown = function () {
        console.log("Lying down on a Victorian sofa.");
    };
}

// Client code
function FurnitureClient(factory) {
    this.chair = factory.createChair();
    this.sofa = factory.createSofa();

    this.enjoyFurniture = function () {
        this.chair.sit();
        this.sofa.lieDown();
    };
}

// Usage
const modernFactory = new ModernFurnitureFactory();
const victorianFactory = new VictorianFurnitureFactory();

const modernClient = new FurnitureClient(modernFactory);
const victorianClient = new FurnitureClient(victorianFactory);

console.log("Modern Furniture:");
modernClient.enjoyFurniture();

console.log("Victorian Furniture:");
victorianClient.enjoyFurniture();
