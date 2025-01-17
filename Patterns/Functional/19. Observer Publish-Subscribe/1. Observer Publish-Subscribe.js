// Subject (Publisher)
function createStockPriceSubject() {
    let observers = []; // List of observer functions

    return {
        // Method to subscribe observers
        subscribe(observer) {
            observers.push(observer);
        },
        // Method to unsubscribe observers
        unsubscribe(observer) {
            observers = observers.filter((obs) => obs !== observer);
        },
        // Method to notify observers of a state change
        notify(price) {
            observers.forEach((observer) => observer(price));
        },
    };
}

// Example Observers (Subscribers)
const broker = (price) => console.log(`Broker received stock price update: $${price}`);
const trader = (price) => console.log(`Trader received stock price update: $${price}`);
const investor = (price) => console.log(`Investor received stock price update: $${price}`);

// Usage
const stockPrice = createStockPriceSubject();

// Subscribing observers
stockPrice.subscribe(broker);
stockPrice.subscribe(trader);
stockPrice.subscribe(investor);

// Publishing updates
stockPrice.notify(100); // Notify all observers with price $100
stockPrice.notify(105); // Notify all observers with price $105

// Unsubscribing an observer
stockPrice.unsubscribe(trader);

// Publishing another update
stockPrice.notify(110); // Notify remaining observers with price $110
