// Core Domain: Pure business logic
const createTask = (task) => ({
    id: task.id || Date.now().toString(),
    title: task.title,
    completed: false,
});

const toggleTaskCompletion = (task) => ({
    ...task,
    completed: !task.completed,
});

const listTasks = (tasks) => tasks.map((task) => ({ ...task }));

// Ports: Interfaces to external systems
const InMemoryTaskRepository = () => {
    let tasks = [];

    const save = (task) => {
        tasks.push(task);
        return task;
    };

    const findAll = () => [...tasks];

    const findById = (id) => tasks.find((task) => task.id === id);

    const update = (id, updates) => {
        tasks = tasks.map((task) => (task.id === id ? { ...task, ...updates } : task));
        return tasks.find((task) => task.id === id);
    };

    return { save, findAll, findById, update };
};

// Adapters: Connecting external systems with the domain logic
const TaskService = (repository) => ({
    addTask: (taskData) => repository.save(createTask(taskData)),
    getTasks: () => repository.findAll(),
    toggleTask: (id) => {
        const task = repository.findById(id);
        if (!task) throw new Error("Task not found");
        const updatedTask = toggleTaskCompletion(task);
        return repository.update(id, updatedTask);
    },
});

// Application (Driving Adapter): Consuming the service
const app = (() => {
    const repository = InMemoryTaskRepository();
    const service = TaskService(repository);

    // Add tasks
    service.addTask({ title: "Learn Hexagonal Architecture" });
    service.addTask({ title: "Write clean, functional code" });

    // List tasks
    console.log("All Tasks:", service.getTasks());

    // Toggle task completion
    const [task] = service.getTasks();
    service.toggleTask(task.id);
    console.log("Updated Tasks:", service.getTasks());
})();

