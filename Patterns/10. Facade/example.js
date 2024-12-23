class Light {
    turnOn() {
        console.log("Lights are ON.");
    }
    setBrightness(level) {
        console.log(`Lights brightness set to ${level}.`);
    }
}

class Thermostat {
    setTemperature(degrees) {
        console.log(`Thermostat set to ${degrees}°C.`);
    }
}

class MusicPlayer {
    playPlaylist(playlist) {
        console.log(`Playing playlist: ${playlist}.`);
    }
}


class SmartHomeFacade {
    constructor() {
        this.light = new Light();
        this.thermostat = new Thermostat();
        this.musicPlayer = new MusicPlayer();
    }

    setMood() {
        console.log("Setting the mood...");
        this.light.turnOn();
        this.light.setBrightness(50);
        this.thermostat.setTemperature(22);
        this.musicPlayer.playPlaylist("Chill Vibes");
    }
}


const smartHome = new SmartHomeFacade();
smartHome.setMood();
// Outputs:
// Setting the mood...
// Lights are ON.
// Lights brightness set to 50.
// Thermostat set to 22°C.
// Playing playlist: Chill Vibes.
