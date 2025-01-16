// State manager with memento functionality
const createStateManager = () => {
    let states = []; // Stack of states
    let currentIndex = -1;

    return {
        // Save current state
        save(state) {
            // Remove any "future" states if we're undoing
            states = states.slice(0, currentIndex + 1);
            states.push(state);
            currentIndex++;
        },

        // Undo: Go back to the previous state
        undo() {
            if (currentIndex > 0) {
                currentIndex--;
                return states[currentIndex];
            }
            return null; // No more states to undo
        },

        // Redo: Move forward to the next state
        redo() {
            if (currentIndex < states.length - 1) {
                currentIndex++;
                return states[currentIndex];
            }
            return null; // No more states to redo
        },

        // Get the current state
        getState() {
            return currentIndex >= 0 ? states[currentIndex] : null;
        },
    };
};

// Example usage
const formStateManager = createStateManager();

formStateManager.save({ name: "Alice", email: "alice@example.com" });
formStateManager.save({ name: "Bob", email: "bob@example.com" });

console.log(formStateManager.getState()); // { name: "Bob", email: "bob@example.com" }

console.log(formStateManager.undo()); // { name: "Alice", email: "alice@example.com" }
console.log(formStateManager.redo()); // { name: "Bob", email: "bob@example.com" }

formStateManager.save({ name: "Charlie", email: "charlie@example.com" });
console.log(formStateManager.getState()); // { name: "Charlie", email: "charlie@example.com" }

console.log(formStateManager.undo()); // { name: "Bob", email: "bob@example.com" }
