// Step 1: Define the base prototype
const shapePrototype = {
    draw() {
        console.log(
            `Drawing: Shape size: ${this.shapeSize}, color: ${this.color}, borderWidth: ${this.borderWidth}.`
        );
    },
    clone() {
        return Object.create(this);
    },
    getArea() {
        console.log("Area calculation is not defined for this shape.");
        return null; // Default for shapes without a specific area formula
    },
};

// Step 2: Create a Circle prototype
const circlePrototype = shapePrototype.clone();
circlePrototype.getArea = function () {
    if (!this.radius) {
        console.log("Radius is not defined for this circle.");
        return null;
    }
    return Math.PI * this.radius * this.radius;
};

// Step 3: Create a Rectangle prototype
const rectanglePrototype = shapePrototype.clone();
rectanglePrototype.getArea = function () {
    if (!this.width || !this.height) {
        console.log("Width and height are not defined for this rectangle.");
        return null;
    }
    return this.width * this.height;
};

// Step 4: Create and customize a Circle
const circle = circlePrototype.clone();
circle.shapeSize = "medium";
circle.color = "blue";
circle.borderWidth = 2;
circle.radius = 5;

circle.draw(); // Output: Drawing: Shape size: medium, color: blue, borderWidth: 2.
console.log(`Circle Area: ${circle.getArea()}`); // Output: Circle Area: 78.53981633974483

// Step 5: Create and customize a Rectangle
const rectangle = rectanglePrototype.clone();
rectangle.shapeSize = "large";
rectangle.color = "green";
rectangle.borderWidth = 3;
rectangle.width = 10;
rectangle.height = 4;

rectangle.draw(); // Output: Drawing: Shape size: large, color: green, borderWidth: 3.
console.log(`Rectangle Area: ${rectangle.getArea()}`); // Output: Rectangle Area: 40
