class FileLogger {
    logToFile(message) {
        console.log(`Logging to file: ${message}`);
    }
}

class DatabaseLogger {
    logToDatabase(message) {
        console.log(`Logging to database: ${message}`);
    }
}

class APILogger {
    sendToAPI(message) {
        console.log(`Sending log to external API: ${message}`);
    }
}

class LoggerFacade {
    constructor() {
        this.fileLogger = new FileLogger();
        this.databaseLogger = new DatabaseLogger();
        this.apiLogger = new APILogger();
    }

    logError(message) {
        this.fileLogger.logToFile(message);
        this.databaseLogger.logToDatabase(message);
        this.apiLogger.sendToAPI(message);
    }

    logInfo(message) {
        this.fileLogger.logToFile(message);
        this.databaseLogger.logToDatabase(message);
    }

    logWarning(message) {
        this.fileLogger.logToFile(message);
        this.apiLogger.sendToAPI(message);
    }
}

// Client code is now simplified
const logger = new LoggerFacade();

// Logging an error (to file, database, and external API)
logger.logError("A critical error occurred!");

// Logging an info message (to file and database)
logger.logInfo("User logged in.");

// Logging a warning (to file and external API)
logger.logWarning("Disk space is running low.");

