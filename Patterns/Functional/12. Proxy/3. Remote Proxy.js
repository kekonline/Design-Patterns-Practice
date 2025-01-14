// Remote service URL
const API_URL = "https://jsonplaceholder.typicode.com/users";

// The proxy function
const createUserServiceProxy = () => {
    // Cache for fetched data
    const cache = new Map();

    return {
        getUser: async (id) => {
            if (cache.has(id)) {
                console.log("Returning cached data for user:", id);
                return cache.get(id);
            }

            console.log("Fetching data from API for user:", id);
            try {
                const response = await fetch(`${API_URL}/${id}`);
                if (!response.ok) throw new Error("Failed to fetch user data");

                const data = await response.json();
                cache.set(id, data); // Cache the result
                return data;
            } catch (error) {
                console.error("Error fetching user data:", error);
                throw error;
            }
        },
    };
};

// Using the proxy
(async () => {
    const userService = createUserServiceProxy();

    try {
        const user1 = await userService.getUser(1);
        console.log("User 1:", user1);

        const user1Cached = await userService.getUser(1); // Cached response
        console.log("User 1 Cached:", user1Cached);

        const user2 = await userService.getUser(2);
        console.log("User 2:", user2);
    } catch (error) {
        console.error("Something went wrong:", error);
    }
})();
