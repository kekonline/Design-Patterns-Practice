// Base coffee class
class Coffee {
    cost() {
        return 5; // Base cost of a coffee
    }

    description() {
        return "Basic Coffee";
    }
}

// Decorator for adding milk
class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 2; // Adding milk costs $2
    }

    description() {
        return this.coffee.description() + ", Milk";
    }
}

// Decorator for adding sugar
class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }

    cost() {
        return this.coffee.cost() + 1; // Adding sugar costs $1
    }

    description() {
        return this.coffee.description() + ", Sugar";
    }
}

// Usage
let myCoffee = new Coffee();
console.log(myCoffee.description()); // Basic Coffee
console.log(myCoffee.cost()); // 5

myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.description()); // Basic Coffee, Milk
console.log(myCoffee.cost()); // 7

myCoffee = new SugarDecorator(myCoffee);
console.log(myCoffee.description()); // Basic Coffee, Milk, Sugar
console.log(myCoffee.cost()); // 8
