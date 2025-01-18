// Template method: Authentication workflow
function userAuthenticationWorkflow(preCheck, authenticate, postAction) {
    return async (userInput) => {
        try {
            // Step 1: Pre-authentication checks
            preCheck(userInput);

            // Step 2: Authentication process
            const user = await authenticate(userInput);

            // Step 3: Post-authentication actions
            postAction(user);
        } catch (error) {
            console.error('Authentication failed:', error.message);
        }
    };
}

// Specific implementations
const passwordAuthWorkflow = userAuthenticationWorkflow(
    (input) => {
        // Pre-check: Validate username and password fields
        if (!input.username || !input.password) {
            throw new Error('Missing username or password');
        }
    },
    async (input) => {
        // Authenticate: Mock user validation
        if (input.username === 'user' && input.password === 'password') {
            return { id: 1, username: input.username }; // Mock user object
        }
        throw new Error('Invalid credentials');
    },
    (user) => {
        // Post-action: Log successful login
        console.log(`User ${user.username} authenticated successfully.`);
    }
);

// Usage
(async () => {
    await passwordAuthWorkflow({ username: 'user', password: 'password' });
})();
