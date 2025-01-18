// Discount strategies
const percentageDiscount = (price, quantity, discountPercentage) =>
    price * quantity * (1 - discountPercentage / 100);

const flatDiscount = (price, quantity, discountAmount) =>
    Math.max(0, price * quantity - discountAmount);

const bogoDiscount = (price, quantity) =>
    price * Math.ceil(quantity / 2); // Half the price for every two items

// Context: Pricing system
function calculatePrice(price, quantity, strategy, ...strategyArgs) {
    return strategy(price, quantity, ...strategyArgs);
}

// Usage example
const originalPrice = 100;
const quantity = 3;

// Test different strategies
console.log("Percentage Discount (20%):", calculatePrice(originalPrice, quantity, percentageDiscount, 20));
console.log("Flat Discount ($50):", calculatePrice(originalPrice, quantity, flatDiscount, 50));
console.log("BOGO Discount:", calculatePrice(originalPrice, quantity, bogoDiscount));
