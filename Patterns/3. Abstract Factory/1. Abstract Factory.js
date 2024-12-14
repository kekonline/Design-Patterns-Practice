// Coding Challenge: Abstract Factory
// Implement an Abstract Factory for a Vehicle Manufacturing System. Your system should support two types of vehicles: Cars and Bikes.

// Create two families: Luxury and Economy.
// Each family should include:
// A Car with a specifications() method.
// A Bike with a specifications() method.
// Write a function that takes a factory as input and outputs the specifications for both a car and a bike from that factory.

class VehicleManufacturingFactory {
    createCar(specifications) {
        throw new Error("Method 'createCar()' must be implemented.");
    }
    createBike(specifications) {
        throw new Error("Method 'createCar()' must be implemented.");
    }
}

class LuxuryManufacturingFactory extends VehicleManufacturingFactory {
    createCar(specifications) {
        return new LuxuryCar(specifications);
    }

    createBike(specifications) {
        return new LuxuryBike(specifications);
    }
}

class EconomyManufacturingFactory extends VehicleManufacturingFactory {
    createCar(specifications) {
        return new EconomyCar(specifications);
    }

    createBike(specifications) {
        return new EconomyBike(specifications);
    }
}

class Car {
    constructor(specifications) {
        this.specifications = specifications
    }
    specifications() {
        throw new Error("Method 'specifications()' must be implemented.");
    }
}

class Bike {
    constructor(specifications) {
        this.specifications = specifications
    }
    specifications() {
        throw new Error("Method 'specifications()' must be implemented.");
    }
}

class LuxuryCar extends Car {
    constructor(specifications) {
        super(specifications)
    }
    specifications() {
        console.log("The Specifications For LuxuryCar Are: ", this.specifications);
    }
}

class LuxuryBike extends Bike {
    constructor(specifications) {
        super(specifications)
    }
    specifications() {
        console.log("The Specifications For LuxuryBike Are: ", this.specifications);
    }
}

class EconomyCar extends Car {
    constructor(specifications) {
        super(specifications)
    }
    specifications() {
        console.log("The Specifications For EconomyCar Are: ", this.specifications);
    }
}

class EconomyBike extends Bike {
    constructor(specifications) {
        super(specifications)
    }
    specifications() {
        console.log("The Specifications For EconomyBike Are: ", this.specifications);
    }
}

function ManufactureVehicle(factory, specifications) {
    const car = factory.createCar(specifications);
    const bike = factory.createBike(specifications);

    car.specifications();
    bike.specifications();
}

const luxuryFactory = new LuxuryManufacturingFactory()
console.log("Luxury Vehicles:")
ManufactureVehicle(luxuryFactory, "LuxSpecs")

const economyFactory = new EconomyManufacturingFactory()
console.log("Economy Vehicles:")
ManufactureVehicle(economyFactory, "EcoSpecs")