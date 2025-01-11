const Database = (() => {
    let instance;  // Private variable to store the single instance

    // Private function to initialize the database connection (simulation)
    const createConnection = () => {
        console.log('Database connection created');
        return { connected: true };
    };

    return {
        // Public method to get the instance
        getInstance: () => {
            if (!instance) {
                instance = createConnection();  // Only create once
            }
            return instance;  // Return the same instance every time
        },
    };
})();

// Usage
const db1 = Database.getInstance();
const db2 = Database.getInstance();

console.log(db1 === db2);  // true (both refer to the same instance)
