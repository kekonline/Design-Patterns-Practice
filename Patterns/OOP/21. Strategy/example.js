// Step 1: Define a strategy interface (optional in JavaScript)
class PaymentStrategy {
    pay(amount) {
        throw new Error("This method must be overridden!");
    }
}

// Step 2: Create concrete strategy classes
class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} using Credit Card.`);
    }
}

class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} using PayPal.`);
    }
}

class CryptoPayment extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} using Cryptocurrency.`);
    }
}

// Step 3: Create a Context class to use the strategies
class PaymentContext {
    setStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    executePayment(amount) {
        if (!this.paymentStrategy) {
            throw new Error("Payment strategy not set!");
        }
        this.paymentStrategy.pay(amount);
    }
}

// Step 4: Usage
const paymentContext = new PaymentContext();

// Pay with Credit Card
paymentContext.setStrategy(new CreditCardPayment());
paymentContext.executePayment(100);

// Pay with PayPal
paymentContext.setStrategy(new PayPalPayment());
paymentContext.executePayment(200);

// Pay with Cryptocurrency
paymentContext.setStrategy(new CryptoPayment());
paymentContext.executePayment(300);
