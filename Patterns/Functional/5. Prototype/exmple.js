// Constructor function for creating Product instances
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Adding a method to the prototype of Product
Product.prototype.getDetails = function () {
    return `${this.name} costs $${this.price}`;
};

// Adding another method to the prototype
Product.prototype.applyDiscount = function (discount) {
    this.price = this.price - (this.price * (discount / 100));
};

// Create new instances of Product
const apple = new Product('Apple', 1.2);
const banana = new Product('Banana', 0.8);

// Using prototype methods
console.log(apple.getDetails()); // Apple costs $1.2
apple.applyDiscount(10);
console.log(apple.getDetails()); // Apple costs $1.08

console.log(banana.getDetails()); // Banana costs $0.8
banana.applyDiscount(20);
console.log(banana.getDetails()); // Banana costs $0.64
