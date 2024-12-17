class LegacyLogger {
    constructor() {
        console.log("Legacy Logger");
    }
    logMessage(message) {
        console.log(message);
    }

}

class ModernLogger {
    constructor() {
        console.log("New Logger");
    }
    log(level, message) {
        console.log(level, message);
    }

}

class LegacyLoggerAdapter {
    constructor(legacyLogger) {
        this.legacyLogger = legacyLogger;
    }
    log(level, message) {
        this.legacyLogger.logMessage(message);
    }
}

function processLog(loggerProcessor, level, logMessage) {
    loggerProcessor.log(level, logMessage);
}

const modernLogger = new ModernLogger();
const legacyLogger = new LegacyLogger();
const legacyLoggerAdapter = new LegacyLoggerAdapter(legacyLogger);
processLog(modernLogger, "info", "This is an info message");
processLog(legacyLoggerAdapter, "warning", "This is a warning message");