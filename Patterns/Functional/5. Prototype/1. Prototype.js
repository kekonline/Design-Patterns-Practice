// Constructor function for creating a Shape
function Shape(name) {
    this.name = name;
}

// Add a method to the prototype of Shape
Shape.prototype.getName = function () {
    return `This is a ${this.name}.`;
};

// Constructor function for Circle, inheriting from Shape
function Circle(radius) {
    Shape.call(this, 'Circle'); // Call the parent constructor (Shape) to set the name
    this.radius = radius;
}

// Inherit methods from Shape by setting Circle's prototype to an instance of Shape
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Add a specific method for Circle
Circle.prototype.getArea = function () {
    return Math.PI * this.radius * this.radius;
};

// Constructor function for Rectangle, inheriting from Shape
function Rectangle(width, height) {
    Shape.call(this, 'Rectangle'); // Call the parent constructor (Shape) to set the name
    this.width = width;
    this.height = height;
}

// Inherit methods from Shape by setting Rectangle's prototype to an instance of Shape
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

// Add a specific method for Rectangle
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};


// Create instances of Circle and Rectangle
const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);

// Call inherited method from Shape
console.log(circle.getName()); // "This is a Circle."
console.log(rectangle.getName()); // "This is a Rectangle."

// Call specific methods for Circle and Rectangle
console.log(`Circle Area: ${circle.getArea()}`); // Circle Area: 78.53981633974483
console.log(`Rectangle Area: ${rectangle.getArea()}`); // Rectangle Area: 24


