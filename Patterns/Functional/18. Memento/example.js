// Memento-based canvas state manager
const createCanvasStateManager = () => {
    let states = []; // List of all saved states
    let currentIndex = -1;

    return {
        // Save the current state
        save(state) {
            // Discard any "future" states if we're undoing
            states = states.slice(0, currentIndex + 1);
            states.push(state);
            currentIndex++;
        },

        // Undo: Return to the previous state
        undo() {
            if (currentIndex > 0) {
                currentIndex--;
                return states[currentIndex];
            }
            return null; // No states left to undo
        },

        // Redo: Return to the next state
        redo() {
            if (currentIndex < states.length - 1) {
                currentIndex++;
                return states[currentIndex];
            }
            return null; // No states left to redo
        },

        // Get the current state
        getState() {
            return currentIndex >= 0 ? states[currentIndex] : [];
        },
    };
};

// Example usage
const canvasStateManager = createCanvasStateManager();

// Initial canvas state: empty
canvasStateManager.save([]);

// Add shapes
canvasStateManager.save([...canvasStateManager.getState(), { type: "circle", x: 10, y: 20, radius: 15 }]);
canvasStateManager.save([...canvasStateManager.getState(), { type: "rectangle", x: 5, y: 5, width: 20, height: 10 }]);

console.log(canvasStateManager.getState());
// [{ type: "circle", x: 10, y: 20, radius: 15 }, { type: "rectangle", x: 5, y: 5, width: 20, height: 10 }]

// Undo the last action
console.log(canvasStateManager.undo());
// [{ type: "circle", x: 10, y: 20, radius: 15 }]

// Redo the last undone action
console.log(canvasStateManager.redo());
// [{ type: "circle", x: 10, y: 20, radius: 15 }, { type: "rectangle", x: 5, y: 5, width: 20, height: 10 }]

// Add another shape
canvasStateManager.save([...canvasStateManager.getState(), { type: "square", x: 15, y: 15, side: 10 }]);

console.log(canvasStateManager.getState());
// [
//   { type: "circle", x: 10, y: 20, radius: 15 },
//   { type: "rectangle", x: 5, y: 5, width: 20, height: 10 },
//   { type: "square", x: 15, y: 15, side: 10 }
// ]
