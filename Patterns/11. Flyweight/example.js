// Flyweight object that shares common data
class TreeType {
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    display() {
        console.log(`Tree Type: ${this.type}, Color: ${this.color}`);
    }
}

// Flyweight Factory that ensures the sharing of tree types
class TreeFactory {
    constructor() {
        this.treeTypes = {};
    }

    getTree(type, color) {
        const key = `${type}-${color}`;
        if (!this.treeTypes[key]) {
            this.treeTypes[key] = new TreeType(type, color);
            console.log(`Creating new tree type: ${type} - ${color}`);
        }
        return this.treeTypes[key];
    }
}

// Context object that holds the specific (non-shared) data
class Tree {
    constructor(x, y, size, treeType) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.treeType = treeType;
    }

    display() {
        this.treeType.display();
        console.log(`Position: (${this.x}, ${this.y}), Size: ${this.size}`);
    }
}

// Usage
const treeFactory = new TreeFactory();

const tree1 = new Tree(10, 20, 'Large', treeFactory.getTree('Oak', 'Green'));
const tree2 = new Tree(30, 40, 'Medium', treeFactory.getTree('Pine', 'Green'));
const tree3 = new Tree(50, 60, 'Small', treeFactory.getTree('Oak', 'Green'));

tree1.display();
tree2.display();
tree3.display();

console.log(tree1.treeType === tree3.treeType);  // Output: true (Shared tree type)
