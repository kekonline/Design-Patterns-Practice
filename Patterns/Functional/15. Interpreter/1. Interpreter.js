// Define the grammar (rules) as functions
const rules = {
    isNotEmpty: (value) => value.trim() !== "",
    isEmail: (value) => /\S+@\S+\.\S+/.test(value),
    isMinLength: (minLength) => (value) => value.length >= minLength,
};

// Define the interpreter
const interpret = (rulesToApply, data) =>
    rulesToApply.every(([rule, arg]) => rules[rule](arg)(data) ?? rules[rule](data));

// Usage
const fieldData = "test@example.com"; // Simulated user input

// Define the rules to be applied
const validationRules = [
    ["isNotEmpty"],
    ["isEmail"],
    ["isMinLength", 5],
];

// Interpret the rules and validate the field
const isValid = interpret(validationRules, fieldData);

console.log(isValid); // true
