// State functions encapsulate behavior for each state
const redState = () => ({
    color: "Red",
    next: greenState, // Transition to green
});

const greenState = () => ({
    color: "Green",
    next: yellowState, // Transition to yellow
});

const yellowState = () => ({
    color: "Yellow",
    next: redState, // Transition back to red
});

// Traffic light simulator using the State Pattern
const trafficLight = (state = redState()) => ({
    getState: () => state.color, // Get the current state
    transition: () => trafficLight(state.next()), // Move to the next state
});

// Usage
let light = trafficLight(); // Initialize the traffic light
console.log(light.getState()); // Red
light = light.transition();
console.log(light.getState()); // Green
light = light.transition();
console.log(light.getState()); // Yellow
light = light.transition();
console.log(light.getState()); // Red
