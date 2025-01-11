class PizzaMaker {
    constructor() {
        this.reset();
    }

    reset() {
        this.pizza = {
            size: "Medium",
            crust: "Thin",
            cheese: "Mozzarella",
            toppings: [],
            sauce: "Tomato",
        };
        return this;
    }

    setSize(size) {
        this.pizza.size = size;
        return this;
    }

    setCrust(crust) {
        this.pizza.crust = crust;
        return this;
    }

    setCheese(cheese) {
        this.pizza.cheese = cheese;
        return this;
    }

    setToppings(toppings) {
        this.pizza.toppings = toppings;
        return this;
    }

    setSauce(sauce) {
        this.pizza.sauce = sauce;
        return this;
    }

    make() {
        const madePizza = this.pizza;
        this.reset();
        return madePizza;
    }
}

// Usage
const maker = new PizzaMaker();

const pepperoniPizza = maker
    .setSize("Large")
    .setCrust("Thick")
    .setToppings(["Pepperoni", "Olives"])
    .setSauce("Tomato")
    .make();

const veggiePizza = maker
    .setSize("Medium")
    .setCrust("Stuffed")
    .setCheese("Vegan")
    .setToppings(["Mushrooms", "Bell Peppers", "Onions"])
    .setSauce("Barbecue")
    .make();

console.log("Pepperoni Pizza:", pepperoniPizza);
console.log("Veggie Pizza:", veggiePizza);
