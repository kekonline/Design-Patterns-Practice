// Base function
const fetchUserData = async (userId) => {
    // Simulate API request
    console.log(`Fetching data for user: ${userId}`);
    return { id: userId, name: "John Doe" };
};

// Decorator for rate-limiting
const withRateLimiting = (fn, limit, timeWindow) => {
    let callCount = 0;
    const resetTime = Date.now() + timeWindow;

    return (...args) => {
        const now = Date.now();

        // Reset the counter if the time window has passed
        if (now > resetTime) {
            callCount = 0;
        }

        if (callCount >= limit) {
            throw new Error("Rate limit exceeded. Please try again later.");
        }

        callCount++;
        return fn(...args);
    };
};

// Applying the decorator
const fetchUserDataWithRateLimit = withRateLimiting(fetchUserData, 3, 60000); // 3 calls per minute

// Example usage
(async () => {
    try {
        await fetchUserDataWithRateLimit(1);
        await fetchUserDataWithRateLimit(2);
        await fetchUserDataWithRateLimit(3);
        // The next call will exceed the limit
        await fetchUserDataWithRateLimit(4);
    } catch (error) {
        console.error(error.message);
    }
})();
