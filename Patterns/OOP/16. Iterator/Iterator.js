class UserDatabase {
    constructor() {
        // Simulate a large database of users
        this.users = Array.from({ length: 50 }, (_, i) => ({
            id: i + 1,
            name: `User ${i + 1}`,
        }));
    }

    // Simulate fetching paginated data from the database
    fetchUsers(page, limit) {
        const start = (page - 1) * limit;
        const end = page * limit;
        return this.users.slice(start, end);
    }
}

class PaginatedUserIterator {
    constructor(database, limit) {
        this.database = database;
        this.limit = limit;
        this.currentPage = 1;
        this.currentBatch = [];
        this._fetchNextBatch();
    }

    _fetchNextBatch() {
        this.currentBatch = this.database.fetchUsers(this.currentPage, this.limit);
        this.currentPage++;
    }

    next() {
        if (this.currentBatch.length === 0) {
            return null;
        }

        const user = this.currentBatch.shift();

        if (this.currentBatch.length === 0) {
            this._fetchNextBatch();
        }

        return user;
    }

    hasNext() {
        return this.currentBatch.length > 0;
    }
}

// Usage
const userDB = new UserDatabase();
const userIterator = new PaginatedUserIterator(userDB, 10);

console.log("Fetching users...");
while (userIterator.hasNext()) {
    const user = userIterator.next();
    console.log(user);
}
