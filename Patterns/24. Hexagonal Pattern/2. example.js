// authService.js
class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository; // Port
    }

    async authenticate(email, password) {
        const user = await this.userRepository.findByEmail(email);
        if (!user || user.password !== password) {
            throw new Error("Invalid credentials");
        }
        return `Welcome, ${user.name}!`;
    }
}

export default AuthService;

// userRepositoryPort.js
class UserRepositoryPort {
    findByEmail(email) {
        throw new Error("Method 'findByEmail' must be implemented");
    }
}

export default UserRepositoryPort;


// mongoUserRepository.js
import UserRepositoryPort from './userRepositoryPort.js';

class MongoUserRepository extends UserRepositoryPort {
    constructor(mongoClient) {
        super();
        this.collection = mongoClient.db("app").collection("users");
    }

    async findByEmail(email) {
        return this.collection.findOne({ email });
    }
}

export default MongoUserRepository;

// app.js
import AuthService from './authService.js';
import MongoUserRepository from './mongoUserRepository.js';
import { MongoClient } from 'mongodb';

async function main() {
    const mongoClient = new MongoClient("mongodb://localhost:27017");
    await mongoClient.connect();

    const userRepository = new MongoUserRepository(mongoClient); // Adapter
    const authService = new AuthService(userRepository); // Core with Port

    try {
        const message = await authService.authenticate("user@example.com", "password123");
        console.log(message);
    } catch (error) {
        console.error(error.message);
    } finally {
        await mongoClient.close();
    }
}

main();
