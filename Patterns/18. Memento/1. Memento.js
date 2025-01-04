// The Memento class stores the state of the Editor
class Memento {
    constructor(state) {
        this.state = state; // Save the state
    }

    getState() {
        return this.state; // Provide access to the saved state
    }
}

// The Editor class maintains the current state
class Editor {
    constructor() {
        this.state = ""; // Initial state
    }

    type(text) {
        this.state += text; // Append new text
    }

    getState() {
        return this.state; // Current state
    }

    restore(memento) {
        this.state = memento.getState(); // Restore the saved state
    }
}

// The Caretaker manages Mementos (snapshots)
class Caretaker {
    constructor(editor) {
        this.editor = editor;
        this.history = []; // Store snapshots (mementos)
    }

    save() {
        this.history.push(new Memento(this.editor.getState())); // Save current state
    }

    undo() {
        if (this.history.length === 0) return; // No history to undo
        const memento = this.history.pop(); // Get the last saved state
        this.editor.restore(memento); // Restore the state
    }
}

// Example Usage
const editor = new Editor();
const caretaker = new Caretaker(editor);

editor.type("Hello");
caretaker.save(); // Save state: "Hello"

editor.type(", World!");
caretaker.save(); // Save state: "Hello, World!"

console.log("Current State:", editor.getState()); // Output: "Hello, World!"

caretaker.undo(); // Undo to "Hello"
console.log("After Undo:", editor.getState()); // Output: "Hello"

caretaker.undo(); // Undo to initial state
console.log("After Undo:", editor.getState()); // Output: ""
