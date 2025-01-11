class EventEmitter {
    constructor() {
        this.events = {}; // Object to store all event listeners
    }

    // Subscribe to an event
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = []; // Initialize an array if no listeners exist for this event
        }
        this.events[event].push(listener); // Add the listener to the event
    }

    // Publish an event and notify all subscribers
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args)); // Notify all listeners
        }
    }

    // Unsubscribe from an event
    off(event, listener) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(l => l !== listener); // Remove the listener
        }
    }
}

// Usage
const emitter = new EventEmitter();

const logListener = (message) => {
    console.log(`Log: ${message}`);
};

// Subscribe to an event
emitter.on('log', logListener);

// Emit the event
emitter.emit('log', 'This is a test log message');

// Unsubscribe from the event
emitter.off('log', logListener);

// Emit the event again (nothing will happen because the listener has been removed)
emitter.emit('log', 'This will not be logged');
