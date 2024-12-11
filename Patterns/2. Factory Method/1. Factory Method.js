class Product {
    constructor(name, price, details) {
        if (!name || !price || !details) {
            throw new Error('All the information is needed');
        }

        this.name = name;
        this.price = price;
        this.details = details;
    }

    getDetails() {
        throw new Error('This method must be overridden');
    }
}

class Books extends Product {
    constructor(name, price, details) {
        super(name, price, details); // Passing the arguments to the parent constructor
    }

    getDetails() {
        return `This is a Book: ${this.name} with details: ${this.details}. Price: ${this.price}.`;
    }
}

class Clothing extends Product {
    constructor(name, price, details) {
        super(name, price, details); // Passing the arguments to the parent constructor
    }

    getDetails() {
        return `This is a Clothing item: ${this.name} with details: ${this.details}. Price: ${this.price}.`;
    }
}

class Electronics extends Product {
    constructor(name, price, details) {
        super(name, price, details); // Passing the arguments to the parent constructor
    }

    getDetails() {
        return `This is an Electronic item: ${this.name} with details: ${this.details}. Price: ${this.price}.`;
    }
}

class ProductFactory {
    static createProduct(type, name, price, details) {
        if (type === 'book') {
            return new Books(name, price, details);
        } else if (type === 'clothing') {
            return new Clothing(name, price, details);
        } else if (type === 'electronic') {
            return new Electronics(name, price, details);
        } else {
            throw new Error('Unknown product type');
        }
    }
}

// Client code
const book = ProductFactory.createProduct('book', 'JavaScript Mastery', 30, 'A comprehensive guide to JavaScript');
console.log(book.getDetails());

const clothing = ProductFactory.createProduct('clothing', 'T-shirt', 15, 'Comfortable cotton T-shirt');
console.log(clothing.getDetails());

const electronics = ProductFactory.createProduct('electronic', 'Laptop', 1000, 'High performance laptop');
console.log(electronics.getDetails());
