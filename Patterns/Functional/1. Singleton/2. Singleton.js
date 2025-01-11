const SessionManager = (() => {
    let session = null; // Private variable to hold the session

    // Private function to initialize the session
    const createSession = (user) => {
        console.log(`Session created for ${user}`);
        return { user, loggedIn: true };
    };

    return {
        // Public method to get the instance of the session
        getSession: (user) => {
            if (!session) {
                session = createSession(user);  // Only create session once
            }
            return session;  // Always return the same session instance
        },

        // Method to logout (resets the session)
        logout: () => {
            if (session) {
                console.log(`Session for ${session.user} ended.`);
                session = null;  // Clears the session
            } else {
                console.log('No active session to logout from.');
            }
        },
    };
})();

// Usage

// First login creates the session
const session1 = SessionManager.getSession('John Doe');
console.log(session1);

// Attempting to create a new session will return the same session instance
const session2 = SessionManager.getSession('Jane Doe');
console.log(session1 === session2); // true

// Logging out
SessionManager.logout();

// Now a new session can be created after logout
const session3 = SessionManager.getSession('Alice');
console.log(session3);
