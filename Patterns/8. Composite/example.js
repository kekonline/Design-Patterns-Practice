// Component: Defines the common interface
class FileSystemEntity {
    getName() {
        throw new Error("This method must be implemented in a subclass.");
    }

    getSize() {
        throw new Error("This method must be implemented in a subclass.");
    }

    add() {
        throw new Error("Cannot add to this entity.");
    }

    remove() {
        throw new Error("Cannot remove from this entity.");
    }
}

// Leaf: Represents individual objects (e.g., files)
class File extends FileSystemEntity {
    constructor(name, size) {
        super();
        this.name = name;
        this.size = size;
    }

    getName() {
        return this.name;
    }

    getSize() {
        return this.size;
    }
}

// Composite: Represents collections (e.g., directories)
class Directory extends FileSystemEntity {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }

    getName() {
        return this.name;
    }

    getSize() {
        return this.children.reduce((total, child) => total + child.getSize(), 0);
    }

    add(entity) {
        this.children.push(entity);
    }

    remove(entity) {
        this.children = this.children.filter(child => child !== entity);
    }

    listContents() {
        console.log(`Directory: ${this.name}`);
        this.children.forEach(child => {
            console.log(`  - ${child.getName()} (${child.getSize()} KB)`);
        });
    }
}

// Usage
const file1 = new File("file1.txt", 500);
const file2 = new File("file2.txt", 300);
const file3 = new File("file3.txt", 700);

const subDirectory = new Directory("SubDirectory");
subDirectory.add(file2);
subDirectory.add(file3);

const mainDirectory = new Directory("MainDirectory");
mainDirectory.add(file1);
mainDirectory.add(subDirectory);

mainDirectory.listContents();
console.log("Total size:", mainDirectory.getSize(), "KB");
