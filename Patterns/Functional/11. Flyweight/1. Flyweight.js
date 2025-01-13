// Flyweight Factory
const ShapeFactory = (() => {
    const shapes = {};

    return {
        getShape: (color) => {
            if (!shapes[color]) {
                console.log(`Creating new shape with color: ${color}`);
                shapes[color] = { color };
            }
            return shapes[color];
        },
        getShapeCount: () => Object.keys(shapes).length,
    };
})();

// Context: Additional data that is unique per shape
const drawShape = (x, y, color) => {
    const shape = ShapeFactory.getShape(color);
    console.log(`Drawing shape at (${x}, ${y}) with color: ${shape.color}`);
};

// Example usage
drawShape(10, 20, 'red');
drawShape(15, 25, 'blue');
drawShape(30, 40, 'red'); // Reuses the 'red' shape
drawShape(50, 60, 'green');
drawShape(70, 80, 'blue'); // Reuses the 'blue' shape

console.log(`Total unique shapes created: ${ShapeFactory.getShapeCount()}`);
