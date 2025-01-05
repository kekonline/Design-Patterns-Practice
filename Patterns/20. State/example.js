// Context Class
class TrafficLight {
    constructor() {
        this.state = new RedLight(this); // Default state
    }

    setState(state) {
        this.state = state;
    }

    change() {
        this.state.change();
    }

    show() {
        this.state.show();
    }
}

// State Classes
class RedLight {
    constructor(light) {
        this.light = light;
    }

    change() {
        console.log("Changing from Red to Green...");
        this.light.setState(new GreenLight(this.light));
    }

    show() {
        console.log("STOP! The light is Red.");
    }
}

class GreenLight {
    constructor(light) {
        this.light = light;
    }

    change() {
        console.log("Changing from Green to Yellow...");
        this.light.setState(new YellowLight(this.light));
    }

    show() {
        console.log("GO! The light is Green.");
    }
}

class YellowLight {
    constructor(light) {
        this.light = light;
    }

    change() {
        console.log("Changing from Yellow to Red...");
        this.light.setState(new RedLight(this.light));
    }

    show() {
        console.log("CAUTION! The light is Yellow.");
    }
}

// Usage
const trafficLight = new TrafficLight();
trafficLight.show(); // "STOP! The light is Red."
trafficLight.change();
trafficLight.show(); // "GO! The light is Green."
trafficLight.change();
trafficLight.show(); // "CAUTION! The light is Yellow."
trafficLight.change();
trafficLight.show(); // "STOP! The light is Red."
