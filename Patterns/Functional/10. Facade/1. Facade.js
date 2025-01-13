// Subsystems (Complex Logic)
const PayPalAPI = {
    processPayment: (amount) => {
        console.log(`Processing PayPal payment of $${amount}...`);
    },
};

const StripeAPI = {
    processPayment: (amount) => {
        console.log(`Processing Stripe payment of $${amount}...`);
    },
};

const Database = {
    saveTransaction: (transaction) => {
        console.log("Transaction saved:", transaction);
    },
};

// Facade
const PaymentProcessor = {
    processPayment: function (method, amount) {
        switch (method) {
            case "PayPal":
                PayPalAPI.processPayment(amount);
                break;
            case "Stripe":
                StripeAPI.processPayment(amount);
                break;
            default:
                console.log("Unsupported payment method.");
                return;
        }

        Database.saveTransaction({ method, amount, date: new Date().toISOString() });
        console.log(`Payment of $${amount} completed successfully.`);
    },
};

// Usage
PaymentProcessor.processPayment("PayPal", 100); // Uses PayPal and saves the transaction
PaymentProcessor.processPayment("Stripe", 200); // Uses Stripe and saves the transaction
PaymentProcessor.processPayment("Cash", 50);    // Unsupported method
