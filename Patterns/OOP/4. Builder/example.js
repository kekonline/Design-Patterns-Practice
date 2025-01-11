// Builder Class
class CarBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.car = {};
        return this;
    }

    setMake(make) {
        this.car.make = make;
        return this;
    }

    setModel(model) {
        this.car.model = model;
        return this;
    }

    setEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    setColor(color) {
        this.car.color = color;
        return this;
    }

    setSeats(seats) {
        this.car.seats = seats;
        return this;
    }

    build() {
        const builtCar = this.car;
        this.reset(); // Reset the builder for future use
        return builtCar;
    }
}

// Usage
const builder = new CarBuilder();

const sportsCar = builder
    .setMake("Ferrari")
    .setModel("488 Spider")
    .setEngine("V8")
    .setColor("Red")
    .setSeats(2)
    .build();

const suv = builder
    .setMake("Toyota")
    .setModel("RAV4")
    .setEngine("Hybrid")
    .setColor("White")
    .setSeats(5)
    .build();

console.log("Sports Car:", sportsCar);
console.log("SUV:", suv);
