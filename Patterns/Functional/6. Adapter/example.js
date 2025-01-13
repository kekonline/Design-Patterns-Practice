{
    level: "info" | "warn" | "error",
        message: string,
            timestamp: string, // ISO format
  }

{
    severity: "INFO" | "WARNING" | "ERROR",
        msg: string,
            time: number, // Unix timestamp
  }


// Third-party logger function
const thirdPartyLogger = (log) => {
    console.log(`[${log.severity}] ${log.msg} at ${new Date(log.time * 1000).toISOString()}`);
};

// Adapter function
const adaptLogMessage = (log) => ({
    severity: log.level.toUpperCase(),
    msg: log.message,
    time: new Date(log.timestamp).getTime() / 1000, // Convert ISO to Unix timestamp
});

// Universal logger
const logMessage = (log, adapter) => {
    const adaptedLog = adapter(log);
    thirdPartyLogger(adaptedLog);
};

// Example usage
const appLog = {
    level: "info",
    message: "User logged in",
    timestamp: "2025-01-12T12:00:00Z",
};

logMessage(appLog, adaptLogMessage);
// [INFO] User logged in at 2025-01-12T12:00:00.000Z
