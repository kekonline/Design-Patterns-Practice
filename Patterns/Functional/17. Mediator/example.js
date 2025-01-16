// Event Manager (Mediator)
const createEventManager = () => {
    const events = {};

    return {
        // Subscribe to an event
        subscribe: (eventName, callback) => {
            if (!events[eventName]) {
                events[eventName] = [];
            }
            events[eventName].push(callback);
            console.log(`Subscribed to event: ${eventName}`);
        },

        // Unsubscribe from an event
        unsubscribe: (eventName, callback) => {
            if (!events[eventName]) return;
            events[eventName] = events[eventName].filter((cb) => cb !== callback);
            console.log(`Unsubscribed from event: ${eventName}`);
        },

        // Publish an event
        publish: (eventName, data) => {
            if (!events[eventName]) {
                console.log(`No subscribers for event: ${eventName}`);
                return;
            }
            console.log(`Publishing event: ${eventName}`);
            events[eventName].forEach((callback) => callback(data));
        },
    };
};

// Example usage

// Create an event manager
const eventManager = createEventManager();

// Define event handlers
const onUserLogin = (data) => {
    console.log(`User logged in: ${data.username}`);
};

const onUserLogout = () => {
    console.log(`User logged out`);
};

// Subscribe to events
eventManager.subscribe("login", onUserLogin);
eventManager.subscribe("logout", onUserLogout);

// Publish events
eventManager.publish("login", { username: "Alice" }); // Output: User logged in: Alice
eventManager.publish("logout"); // Output: User logged out

// Unsubscribe from an event
eventManager.unsubscribe("login", onUserLogin);

// Attempt to publish "login" event again
eventManager.publish("login", { username: "Bob" }); // Output: No subscribers for event: login
