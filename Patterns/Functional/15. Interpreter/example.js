// Define the grammar (filter operations)
const filters = {
    equals: (key, value) => (item) => item[key] === value,
    greaterThan: (key, value) => (item) => item[key] > value,
    lessThan: (key, value) => (item) => item[key] < value,
    contains: (key, value) => (item) =>
        Array.isArray(item[key]) && item[key].includes(value),
};

// Interpreter function to apply filters
const interpretFilters = (dataset, conditions) =>
    conditions.reduce((result, [operation, key, value]) => {
        const filterFn = filters[operation];
        return filterFn ? result.filter(filterFn(key, value)) : result;
    }, dataset);

// Example dataset
const users = [
    { name: "Alice", age: 25, roles: ["admin", "editor"] },
    { name: "Bob", age: 30, roles: ["viewer"] },
    { name: "Charlie", age: 35, roles: ["admin", "viewer"] },
];

// Define conditions (query)
const query = [
    ["greaterThan", "age", 26],
    ["contains", "roles", "admin"],
];

// Interpret the query and filter the data
const result = interpretFilters(users, query);

console.log(result);
// Output: [{ name: "Charlie", age: 35, roles: ["admin", "viewer"] }]
