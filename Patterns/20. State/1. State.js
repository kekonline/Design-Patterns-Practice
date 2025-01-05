// Context Class
class Order {
    constructor() {
        this.state = new CreatedState(this); // Default state
    }

    setState(state) {
        this.state = state;
    }

    proceed() {
        this.state.proceed();
    }

    cancel() {
        this.state.cancel();
    }

    getStateName() {
        return this.state.constructor.name;
    }
}

// State Classes
class CreatedState {
    constructor(order) {
        this.order = order;
    }

    proceed() {
        console.log("Order paid. Moving to Paid state.");
        this.order.setState(new PaidState(this.order));
    }

    cancel() {
        console.log("Order canceled. No further actions allowed.");
        this.order.setState(new CanceledState(this.order));
    }
}

class PaidState {
    constructor(order) {
        this.order = order;
    }

    proceed() {
        console.log("Order shipped. Moving to Shipped state.");
        this.order.setState(new ShippedState(this.order));
    }

    cancel() {
        console.log("Cannot cancel a paid order. Contact support.");
    }
}

class ShippedState {
    constructor(order) {
        this.order = order;
    }

    proceed() {
        console.log("Order delivered. Moving to Completed state.");
        this.order.setState(new CompletedState(this.order));
    }

    cancel() {
        console.log("Cannot cancel a shipped order. Contact support.");
    }
}

class CompletedState {
    constructor(order) {
        this.order = order;
    }

    proceed() {
        console.log("Order already completed. No further actions allowed.");
    }

    cancel() {
        console.log("Cannot cancel a completed order.");
    }
}

class CanceledState {
    constructor(order) {
        this.order = order;
    }

    proceed() {
        console.log("Cannot proceed. The order is canceled.");
    }

    cancel() {
        console.log("The order is already canceled.");
    }
}

// Usage Example
const order = new Order();
console.log(`Current State: ${order.getStateName()}`);

order.proceed(); // Move to PaidState
console.log(`Current State: ${order.getStateName()}`);

order.proceed(); // Move to ShippedState
console.log(`Current State: ${order.getStateName()}`);

order.cancel(); // Attempt to cancel a shipped order
order.proceed(); // Move to CompletedState
console.log(`Current State: ${order.getStateName()}`);
