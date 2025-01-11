class UserService {
    // This class represents the remote service (could be a server)
    getUserData(userId) {
        return new Promise((resolve, reject) => {
            console.log('Fetching user data from remote server...');
            setTimeout(() => {
                // Simulate fetching data from a remote server
                if (userId === 1) {
                    resolve({ id: 1, name: 'John Doe', email: 'john@example.com' });
                } else {
                    reject('User not found');
                }
            }, 2000); // Simulate network delay
        });
    }
}

class UserServiceProxy {
    // This class represents the proxy for the remote service
    constructor() {
        this.userService = new UserService();
        this.cache = {}; // Cache the results to avoid fetching data multiple times
    }

    getUserData(userId) {
        if (this.cache[userId]) {
            console.log('Returning cached user data...');
            return Promise.resolve(this.cache[userId]); // Return cached data
        }

        console.log('Fetching data from remote service...');
        return this.userService.getUserData(userId)
            .then((data) => {
                this.cache[userId] = data; // Cache the result
                return data;
            })
            .catch((error) => {
                console.error(error);
                throw error;
            });
    }
}

// Usage:
const userProxy = new UserServiceProxy();

// First call (fetches data remotely)
userProxy.getUserData(1).then(data => {
    console.log('User Data:', data);
}).catch(err => {
    console.log(err);
});

// Second call (returns cached data)
setTimeout(() => {
    userProxy.getUserData(1).then(data => {
        console.log('User Data (cached):', data);
    }).catch(err => {
        console.log(err);
    });
}, 3000); // Wait a bit before making another call
