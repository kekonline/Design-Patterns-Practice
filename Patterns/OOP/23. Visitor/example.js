// Visitor
class AreaCalculator {
    visitCircle(circle) {
        return Math.PI * circle.radius ** 2;
    }

    visitRectangle(rectangle) {
        return rectangle.width * rectangle.height;
    }
}

// Elements
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    accept(visitor) {
        return visitor.visitCircle(this);
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    accept(visitor) {
        return visitor.visitRectangle(this);
    }
}

// Client Code
const shapes = [
    new Circle(5),
    new Rectangle(10, 20),
];

const areaCalculator = new AreaCalculator();

shapes.forEach((shape) => {
    console.log(`Area: ${shape.accept(areaCalculator)}`);
});
