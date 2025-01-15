// Command functions
const drawCircle = (canvas, color) => {
    const circle = { shape: "circle", color };
    canvas.push(circle);
    console.log(`Drawn a ${color} circle`);
};

const drawSquare = (canvas, color) => {
    const square = { shape: "square", color };
    canvas.push(square);
    console.log(`Drawn a ${color} square`);
};

const clearCanvas = (canvas) => {
    canvas.length = 0;
    console.log("Canvas cleared");
};

// Command Invoker
const commandInvoker = () => {
    const commandHistory = [];
    let canvas = [];

    return {
        execute: (command, ...args) => {
            command(canvas, ...args);
            commandHistory.push({ command, args });
        },
        undo: () => {
            if (commandHistory.length === 0) {
                console.log("Nothing to undo");
                return;
            }
            commandHistory.pop(); // Remove last command
            canvas = []; // Reset the canvas
            commandHistory.forEach(({ command, args }) =>
                command(canvas, ...args)
            );
            console.log("Undo performed");
        },
        showCanvas: () => console.log("Canvas:", canvas),
    };
};

// Using the Command Invoker
const invoker = commandInvoker();

invoker.execute(drawCircle, "red");
invoker.execute(drawSquare, "blue");
invoker.showCanvas(); // Check canvas state

invoker.undo(); // Undo last command
invoker.showCanvas(); // Check canvas state after undo
