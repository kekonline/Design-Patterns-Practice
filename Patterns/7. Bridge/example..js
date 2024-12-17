// The Abstraction
class RemoteControl {
    constructor(device) {
        this.device = device; // A reference to the "implementation"
    }

    turnOn() {
        this.device.turnOn();
    }

    turnOff() {
        this.device.turnOff();
    }
}

// Refined Abstraction
class AdvancedRemoteControl extends RemoteControl {
    mute() {
        console.log("Muting the device.");
        this.device.setVolume(0);
    }
}

// The Implementation
class Device {
    turnOn() {
        throw new Error("This method must be implemented by a subclass.");
    }

    turnOff() {
        throw new Error("This method must be implemented by a subclass.");
    }

    setVolume(volume) {
        throw new Error("This method must be implemented by a subclass.");
    }
}

// Concrete Implementations
class TV extends Device {
    turnOn() {
        console.log("Turning on the TV.");
    }

    turnOff() {
        console.log("Turning off the TV.");
    }

    setVolume(volume) {
        console.log(`Setting TV volume to ${volume}.`);
    }
}

class Radio extends Device {
    turnOn() {
        console.log("Turning on the Radio.");
    }

    turnOff() {
        console.log("Turning off the Radio.");
    }

    setVolume(volume) {
        console.log(`Setting Radio volume to ${volume}.`);
    }
}

// Usage
const tv = new TV();
const radio = new Radio();

const remote = new RemoteControl(tv);
remote.turnOn(); // Turning on the TV.
remote.turnOff(); // Turning off the TV.

const advancedRemote = new AdvancedRemoteControl(radio);
advancedRemote.turnOn(); // Turning on the Radio.
advancedRemote.mute(); // Muting the device. Setting Radio volume to 0.
