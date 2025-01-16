// TaskBoard (Mediator)
const createTaskBoard = () => {
    const users = {};
    const tasks = {};

    return {
        // Register a user
        registerUser: (user) => {
            users[user.name] = user;
            console.log(`User "${user.name}" has joined the TaskBoard.`);
        },

        // Add a task
        addTask: (taskId, description) => {
            tasks[taskId] = { description, assignedTo: null, completed: false };
            console.log(`Task "${description}" added with ID: ${taskId}`);
        },

        // Assign task to a user
        assignTask: (taskId, userName) => {
            if (!tasks[taskId]) {
                console.log(`Task with ID "${taskId}" does not exist.`);
                return;
            }
            if (!users[userName]) {
                console.log(`User "${userName}" does not exist.`);
                return;
            }

            tasks[taskId].assignedTo = userName;
            console.log(
                `Task "${tasks[taskId].description}" assigned to ${userName}.`
            );
            users[userName].notify(`You have been assigned the task: "${tasks[taskId].description}".`);
        },

        // Complete a task
        completeTask: (taskId, userName) => {
            if (!tasks[taskId]) {
                console.log(`Task with ID "${taskId}" does not exist.`);
                return;
            }
            if (tasks[taskId].assignedTo !== userName) {
                console.log(`Task is not assigned to ${userName}.`);
                return;
            }

            tasks[taskId].completed = true;
            console.log(`Task "${tasks[taskId].description}" completed by ${userName}.`);
            Object.values(users).forEach((user) => {
                user.notify(
                    `Task "${tasks[taskId].description}" has been completed by ${userName}.`
                );
            });
        },
    };
};

// User (Colleague)
const createUser = (name) => {
    return {
        name,
        notify: (message) => {
            console.log(`${name}: ${message}`);
        },
    };
};

// Example usage
const taskBoard = createTaskBoard();

const alice = createUser("Alice");
const bob = createUser("Bob");

taskBoard.registerUser(alice);
taskBoard.registerUser(bob);

taskBoard.addTask("1", "Fix the login bug");
taskBoard.addTask("2", "Design the dashboard");

taskBoard.assignTask("1", "Alice");
taskBoard.assignTask("2", "Bob");

taskBoard.completeTask("1", "Alice");
taskBoard.completeTask("2", "Bob");
