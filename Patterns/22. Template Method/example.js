// Abstract class
class Beverage {
    prepareRecipe() {
        this.boilWater();
        this.brew();
        this.pourInCup();
        this.addCondiments();
    }

    boilWater() {
        console.log("Boiling water");
    }

    pourInCup() {
        console.log("Pouring into cup");
    }

    // Abstract methods to be implemented by subclasses
    brew() {
        throw new Error("brew() must be implemented");
    }

    addCondiments() {
        throw new Error("addCondiments() must be implemented");
    }
}

// Concrete subclass: Tea
class Tea extends Beverage {
    brew() {
        console.log("Steeping the tea");
    }

    addCondiments() {
        console.log("Adding lemon");
    }
}

// Concrete subclass: Coffee
class Coffee extends Beverage {
    brew() {
        console.log("Dripping coffee through filter");
    }

    addCondiments() {
        console.log("Adding sugar and milk");
    }
}

// Usage
const tea = new Tea();
console.log("Making tea:");
tea.prepareRecipe();

console.log("\nMaking coffee:");
const coffee = new Coffee();
coffee.prepareRecipe();
