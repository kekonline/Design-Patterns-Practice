// Core Domain: Pure business logic
const createUser = (user) => ({
    id: user.id || Date.now().toString(),
    name: user.name,
    email: user.email,
    roles: user.roles || [],
});

const assignRoleToUser = (user, role) => ({
    ...user,
    roles: [...user.roles, role],
});

const listUserRoles = (user) => [...user.roles];

// Ports: Interfaces for persistence
const InMemoryUserRepository = () => {
    let users = [];

    const save = (user) => {
        users.push(user);
        return user;
    };

    const findAll = () => [...users];

    const findById = (id) => users.find((user) => user.id === id);

    const update = (id, updates) => {
        users = users.map((user) => (user.id === id ? { ...user, ...updates } : user));
        return users.find((user) => user.id === id);
    };

    return { save, findAll, findById, update };
};

// Adapters: Connect the domain logic with external systems
const UserService = (repository) => ({
    addUser: (userData) => repository.save(createUser(userData)),
    assignRole: (userId, role) => {
        const user = repository.findById(userId);
        if (!user) throw new Error("User not found");
        const updatedUser = assignRoleToUser(user, role);
        return repository.update(userId, updatedUser);
    },
    getUserRoles: (userId) => {
        const user = repository.findById(userId);
        if (!user) throw new Error("User not found");
        return listUserRoles(user);
    },
    getAllUsers: () => repository.findAll(),
});

// Application (Driving Adapter)
const app = (() => {
    const repository = InMemoryUserRepository();
    const service = UserService(repository);

    // Add users
    const user1 = service.addUser({ name: "Alice", email: "alice@example.com" });
    const user2 = service.addUser({ name: "Bob", email: "bob@example.com" });

    // Assign roles
    service.assignRole(user1.id, "Admin");
    service.assignRole(user2.id, "Editor");

    // List user roles
    console.log("Roles for Alice:", service.getUserRoles(user1.id));
    console.log("Roles for Bob:", service.getUserRoles(user2.id));

    // List all users
    console.log("All Users:", service.getAllUsers());
})();
