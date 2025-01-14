// Resource: A function that performs a sensitive operation
const sensitiveOperation = () => {
    return "Sensitive data accessed!";
};

// Proxy function: Adds access control
const protectionProxy = (operation, userRole) => {
    return (...args) => {
        if (userRole !== "admin") {
            return "Access Denied: You do not have sufficient privileges.";
        }
        return operation(...args);
    };
};

// Usage example
const userProxy = protectionProxy(sensitiveOperation, "user");
const adminProxy = protectionProxy(sensitiveOperation, "admin");

console.log(userProxy()); // Access Denied: You do not have sufficient privileges.
console.log(adminProxy()); // Sensitive data accessed!
