// Step 1: Define a prototype object
const carPrototype = {
    drive() {
        console.log(`${this.make} ${this.model} is driving.`);
    },
    clone() {
        return Object.create(this);
    },
};

// Step 2: Create an object using the prototype
const car1 = carPrototype.clone();
car1.make = "Toyota";
car1.model = "Corolla";
car1.color = "Red";

// Step 3: Use the cloned object
car1.drive(); // Output: Toyota Corolla is driving.

// Step 4: Create another cloned object
const car2 = carPrototype.clone();
car2.make = "Honda";
car2.model = "Civic";
car2.color = "Blue";

car2.drive(); // Output: Honda Civic is driving.
