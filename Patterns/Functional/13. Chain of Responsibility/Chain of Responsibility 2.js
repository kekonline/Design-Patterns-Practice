// Logging Handlers

// Helper function to get the current timestamp
const getTimestamp = () => new Date().toISOString();

// Filter logs by level (e.g., only process logs that are 'warn' or more severe)
const logLevelFilter = (minLevel) => (next) => (logLevel, message) => {
    const levels = ['info', 'warn', 'error'];
    if (levels.indexOf(logLevel) < levels.indexOf(minLevel)) {
        return; // Skip log if it's below the minimum level
    }
    next(logLevel, message); // Pass to the next handler if level is sufficient
};

// Handles info logs
const infoLogger = (next) => (logLevel, message) => {
    if (logLevel === 'info') {
        console.log(`[INFO] ${getTimestamp()}: ${message}`);
        return;
    }
    next(logLevel, message); // Pass to the next logger if not handled
};

// Handles warning logs
const warnLogger = (next) => (logLevel, message) => {
    if (logLevel === 'warn') {
        console.warn(`[WARN] ${getTimestamp()}: ${message}`);
        return;
    }
    next(logLevel, message); // Pass to the next logger if not handled
};

// Handles error logs
const errorLogger = (next) => (logLevel, message) => {
    if (logLevel === 'error') {
        console.error(`[ERROR] ${getTimestamp()}: ${message}`);
        return;
    }
    next(logLevel, message); // Pass to the next logger if not handled
};

// Create a chain of loggers
const createLoggerChain = (...handlers) => {
    return handlers.reduceRight((next, handler) => handler(next), (logLevel, message) => {
        console.log(`Unhandled log level: ${logLevel} - ${message}`);
    });
};

// Create logger chain with level filter (min level 'warn' in this case)
const loggerChain = createLoggerChain(
    logLevelFilter('warn'), // Filter logs below 'warn'
    infoLogger,
    warnLogger,
    errorLogger
);

// Example log messages
loggerChain('info', 'This is an info message');   // Will not be processed due to filter
loggerChain('warn', 'This is a warning message'); // Will be processed
loggerChain('error', 'This is an error message'); // Will be processed
loggerChain('debug', 'This is an unhandled log level'); // Will not be processed due to filter
