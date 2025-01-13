// Base component (leaf or composite)
const createMenuItem = (name, price) => ({
    name,
    price,
    render: () => `${name}: $${price}`,
    getTotalPrice: () => price,
});

// Composite component (a group of items)
const createMenu = (name) => {
    const items = [];

    return {
        name,
        addItem: (item) => items.push(item),
        render: () => {
            const itemList = items.map((item) => item.render()).join("\n");
            return `${name} Menu:\n${itemList}`;
        },
        getTotalPrice: () => items.reduce((total, item) => total + item.getTotalPrice(), 0),
    };
};

// Usage
const burger = createMenuItem("Burger", 8.99);
const fries = createMenuItem("Fries", 3.49);
const soda = createMenuItem("Soda", 1.99);

const lunchMenu = createMenu("Lunch");
lunchMenu.addItem(burger);
lunchMenu.addItem(fries);
lunchMenu.addItem(soda);

console.log(lunchMenu.render());
console.log("Total Price:", lunchMenu.getTotalPrice());

// Adding submenus
const dessert = createMenuItem("Dessert", 5.99);
const dessertMenu = createMenu("Desserts");
dessertMenu.addItem(dessert);

const mainMenu = createMenu("Main");
mainMenu.addItem(lunchMenu);
mainMenu.addItem(dessertMenu);

console.log(mainMenu.render());
console.log("Total Price:", mainMenu.getTotalPrice());
