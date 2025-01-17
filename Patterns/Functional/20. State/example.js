// State functions encapsulate behavior for each state
const notStartedState = () => ({
    status: "Not Started",
    next: inProgressState, // Transition to In Progress
});

const inProgressState = () => ({
    status: "In Progress",
    next: completedState, // Transition to Completed
});

const completedState = () => ({
    status: "Completed",
    next: notStartedState, // Back to Not Started (resetting the workflow)
});

// Workflow simulator using the State Pattern
const workflow = (state = notStartedState()) => ({
    getStatus: () => state.status, // Get the current status
    nextStep: () => workflow(state.next()), // Move to the next state
});

// Usage
let currentWorkflow = workflow(); // Initialize the workflow
console.log(currentWorkflow.getStatus()); // Not Started
currentWorkflow = currentWorkflow.nextStep();
console.log(currentWorkflow.getStatus()); // In Progress
currentWorkflow = currentWorkflow.nextStep();
console.log(currentWorkflow.getStatus()); // Completed
currentWorkflow = currentWorkflow.nextStep();
console.log(currentWorkflow.getStatus()); // Not Started
