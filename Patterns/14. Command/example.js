// Command Interface
class Command {
    execute() { }
    undo() { }
}

// Receiver: The object that performs the actions
class Light {
    on() {
        console.log("The light is ON");
    }

    off() {
        console.log("The light is OFF");
    }
}

// Concrete Command for turning the light on
class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.on();
    }

    undo() {
        this.light.off();
    }
}

// Concrete Command for turning the light off
class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }

    execute() {
        this.light.off();
    }

    undo() {
        this.light.on();
    }
}

// Invoker: The object that invokes the command
class RemoteControl {
    constructor() {
        this.command = null;
    }

    setCommand(command) {
        this.command = command;
    }

    pressButton() {
        this.command.execute();
    }

    pressUndo() {
        this.command.undo();
    }
}

// Client: Setting up the command objects and invoker
const light = new Light();
const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(lightOn);
remote.pressButton();  // The light is ON

remote.setCommand(lightOff);
remote.pressButton();  // The light is OFF

remote.pressUndo();    // The light is ON
