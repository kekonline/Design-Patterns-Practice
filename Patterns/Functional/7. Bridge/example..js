// Implementation: Payment Methods
const creditCardPayment = () => ({
    processPayment: (amount) => `Processed payment of $${amount} using Credit Card`,
});

const paypalPayment = () => ({
    processPayment: (amount) => `Processed payment of $${amount} using PayPal`,
});

// Abstraction: Transaction Types
const createTransaction = (transactionFn, paymentMethod) => ({
    execute: (amount) => transactionFn(paymentMethod, amount),
});

// Transaction Functions
const directPayment = (paymentMethod, amount) => paymentMethod.processPayment(amount);

const subscriptionPayment = (paymentMethod, amount) =>
    `Subscription initiated. ${paymentMethod.processPayment(amount)} every month.`;

// Usage
const creditCardDirect = createTransaction(directPayment, creditCardPayment());
console.log(creditCardDirect.execute(100)); // Processed payment of $100 using Credit Card

const paypalSubscription = createTransaction(subscriptionPayment, paypalPayment());
console.log(paypalSubscription.execute(20)); // Subscription initiated. Processed payment of $20 using PayPal every month.
