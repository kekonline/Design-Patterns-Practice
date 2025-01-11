// Base class with permissions
class FileSystemEntity {
    constructor(name) {
        this.name = name;
        this.permissions = { read: true, write: true, execute: false }; // Default permissions
    }

    setPermissions(permissions) {
        this.permissions = { ...this.permissions, ...permissions };
    }

    getPermissions() {
        return this.permissions;
    }

    canRead() {
        return this.permissions.read;
    }

    canWrite() {
        return this.permissions.write;
    }

    canExecute() {
        return this.permissions.execute;
    }

    getName() {
        return this.name;
    }
}

// File class with permission handling
class File extends FileSystemEntity {
    constructor(name, size) {
        super(name);
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}

// Directory class with permission propagation
class Directory extends FileSystemEntity {
    constructor(name) {
        super(name);
        this.children = [];
    }

    add(entity) {
        // Inherit permissions if not explicitly set
        if (!entity.permissions || Object.keys(entity.permissions).length === 0) {
            entity.setPermissions(this.getPermissions());
        }
        this.children.push(entity);
    }

    remove(entity) {
        this.children = this.children.filter(child => child !== entity);
    }

    propagatePermissions() {
        this.children.forEach(child => {
            if (child instanceof FileSystemEntity) {
                child.setPermissions(this.getPermissions());
                if (child instanceof Directory) {
                    child.propagatePermissions(); // Recursive propagation
                }
            }
        });
    }

    getSize() {
        return this.children.reduce((total, child) => total + child.getSize(), 0);
    }

    listContents() {
        console.log(`Directory: ${this.name}`);
        this.children.forEach(child => {
            console.log(`  - ${child.getName()} (${child instanceof File ? child.getSize() + " KB" : "Directory"})`);
        });
    }
}

// Usage example
const file1 = new File("file1.txt", 500);
const file2 = new File("file2.txt", 300);
const file3 = new File("file3.txt", 700);

const subDirectory = new Directory("SubDirectory");
subDirectory.add(file2);
subDirectory.add(file3);

const mainDirectory = new Directory("MainDirectory");
mainDirectory.add(file1);
mainDirectory.add(subDirectory);

console.log("Before permission update:");
mainDirectory.listContents();
console.log("Permissions of file3:", file3.getPermissions());

// Update permissions in main directory
mainDirectory.setPermissions({ read: true, write: false, execute: true });
mainDirectory.propagatePermissions();

console.log("\nAfter permission update:");
mainDirectory.listContents();
console.log("Permissions of file3:", file3.getPermissions());
