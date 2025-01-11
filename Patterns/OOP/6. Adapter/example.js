// Existing Payment System (Client)
class PayPal {
    constructor() {
        console.log("Using PayPal for payments.");
    }
    sendPayment(amount) {
        console.log(`PayPal processed payment of $${amount}`);
    }
}

// New Payment System (Adaptee)
class Stripe {
    constructor() {
        console.log("Using Stripe for payments.");
    }
    makePayment(amount) {
        console.log(`Stripe processed payment of $${amount}`);
    }
}

// Adapter to bridge PayPal's interface with Stripe's interface
class StripeAdapter {
    constructor() {
        this.stripe = new Stripe(); // Composition: Using the Stripe instance
    }
    sendPayment(amount) {
        this.stripe.makePayment(amount); // Adapting the method call
    }
}

// Client code
function processPayment(paymentProcessor, amount) {
    paymentProcessor.sendPayment(amount);
}

// Using PayPal
const paypal = new PayPal();
processPayment(paypal, 100);

// Using Stripe through the Adapter
const stripeAdapter = new StripeAdapter();
processPayment(stripeAdapter, 200);
