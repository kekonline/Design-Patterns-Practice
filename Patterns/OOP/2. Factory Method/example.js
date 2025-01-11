// Abstract Vehicle class
class Vehicle {
    getType() {
        throw new Error('This method must be overridden');
    }
}

// Concrete Car class
class Car extends Vehicle {
    getType() {
        return 'This is a Car';
    }
}

// Concrete Bike class
class Bike extends Vehicle {
    getType() {
        return 'This is a Bike';
    }
}

// VehicleFactory class
class VehicleFactory {
    static createVehicle(type) {
        if (type === 'car') {
            return new Car();
        } else if (type === 'bike') {
            return new Bike();
        } else {
            throw new Error('Unknown vehicle type');
        }
    }
}

// Client code
const car = VehicleFactory.createVehicle('car');
console.log(car.getType()); // Output: This is a Car

const bike = VehicleFactory.createVehicle('bike');
console.log(bike.getType()); // Output: This is a Bike
