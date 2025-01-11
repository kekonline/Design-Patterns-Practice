// Base Class: Vehicle
const Vehicle = (type, rentalPrice) => {
    return {
        type,
        rentalPrice,
        startEngine() {
            throw new Error("This method must be implemented in subclass");
        },
    };
};

// Concrete Class: Car
const Car = (rentalPrice) => {
    const base = Vehicle("Car", rentalPrice);
    return {
        ...base, // Spread the properties from the base object
        startEngine() {
            console.log(`Starting the car engine!`);
        },
    };
};

// Concrete Class: Bike
const Bike = (rentalPrice) => {
    const base = Vehicle("Bike", rentalPrice);
    return {
        ...base, // Spread the properties from the base object
        startEngine() {
            console.log(`Starting the bike engine!`);
        },
    };
};

// Concrete Class: Truck
const Truck = (rentalPrice) => {
    const base = Vehicle("Truck", rentalPrice);
    return {
        ...base, // Spread the properties from the base object
        startEngine() {
            console.log(`Starting the truck engine!`);
        },
    };
};

// Factory: VehicleFactory
const VehicleFactory = (vehicleType, rentalPrice) => {
    switch (vehicleType) {
        case 'car':
            return Car(rentalPrice);
        case 'bike':
            return Bike(rentalPrice);
        case 'truck':
            return Truck(rentalPrice);
        default:
            throw new Error('Vehicle type not supported');
    }
};

// Client Code: Using the factory to create different types of vehicles
const car = VehicleFactory('car', 100);
console.log(`${car.type} rental price: $${car.rentalPrice}`);
car.startEngine(); // Starting the car engine!

const bike = VehicleFactory('bike', 50);
console.log(`${bike.type} rental price: $${bike.rentalPrice}`);
bike.startEngine(); // Starting the bike engine!

const truck = VehicleFactory('truck', 200);
console.log(`${truck.type} rental price: $${truck.rentalPrice}`);
truck.startEngine(); // Starting the truck engine!
