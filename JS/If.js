// 1. Basic if Statement
// The most common way to use an if statement is to check a condition and execute a block of code if that condition evaluates to true.

if (condition) {
    // Code to execute if condition is true
}


// 2. if-else Statement
// You can use the else keyword to execute a different block of code if the condition is false.

if (condition) {
    // Code to execute if condition is true
} else {
    // Code to execute if condition is false
}


// 3. if-else if-else Statement
// For multiple conditions, you can chain several else if clauses, where each checks a different condition.

if (condition1) {
    // Code to execute if condition1 is true
} else if (condition2) {
    // Code to execute if condition2 is true
} else {
    // Code to execute if none of the conditions are true
}


// 4. Ternary Operator
// A concise alternative to an if-else statement, especially useful for assignments or returning values.

condition ? expressionIfTrue : expressionIfFalse;
// Example:
let result = (age >= 18) ? "Adult" : "Minor";


// 5. Logical && (AND) Operator
// You can use the && operator to run a statement if the condition is true. This works when you don't need an else block.

condition && // Code to execute if condition is true
    // Example:
    isLoggedIn && showWelcomeMessage();


// 6. Logical || (OR) Operator
// Similarly, you can use the || operator to run code if a condition is false. This is often used for default values.

let name = inputName || "Guest"; // If inputName is falsy, "Guest" will be used.


// 7. Switch Statement
// While not technically an if statement, the switch statement can handle multiple conditions based on a single value. It's often used when there are many possible cases to check.

switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
    // Code to execute if no cases match
}


// 8. Optional Chaining with if
// In modern JavaScript, optional chaining (?.) can be used to check for null or undefined before attempting to access properties or methods.

if (user?.profile?.name) {
    // Execute if the user and user.profile objects exist and have a name property
}


// 9. Nullish Coalescing Operator
// The nullish coalescing operator (??) is a logical operator that returns the first non-null or non-undefined value in a sequence of expressions.

let name = inputName ?? "Guest"; // If inputName is falsy, "Guest" will be used.


// 10. Ternary Operator with Nullish Coalescing
// You can combine the nullish coalescing operator with a ternary operator to provide a default value for a variable.

let name = inputName ?? "Guest";


// 11. Ternary Operator with Logical && Operator
// You can combine the logical && operator with a ternary operator to provide a default value for a variable.

let name = inputName && "Guest";


// 12. Ternary Operator with Logical || Operator
// You can combine the logical || operator with a ternary operator to provide a default value for a variable.

let name = inputName || "Guest";


// 13. Ternary Operator with Logical && Operator
// You can combine the logical && operator with a ternary operator to provide a default value for a variable.

let name = inputName && "Guest";


// 14. Ternary Operator with Logical || Operator
// You can combine the logical || operator with a ternary operator to provide a default value for a variable.

let name = inputName || "Guest";


Conditional if with return (Simplified if)
You can also write a simple if block that returns based on a condition, similar to what you mentioned.

    javascript
Copy code
if (condition) return value;
This works when you want to return a value from a function immediately if the condition is true.

    Example:
javascript
Copy code
function checkNumber(x) {
    if (x > 10) return "Greater than 10";
    return "Less than or equal to 10";
}

console.log(checkNumber(15)); // "Greater than 10"
console.log(checkNumber(5));  // "Less than or equal to 10"
With Arrow Functions(Implicit Return & if)
For arrow functions, you can combine an if statement directly with the implicit return for concise logic.

    javascript
Copy code
const checkNumber = (x) => x > 10 ? "Greater than 10" : "Less than or equal to 10";
console.log(checkNumber(15)); // "Greater than 10"
console.log(checkNumber(5));  // "Less than or equal to 10"
In summary:

Ternary operator is ideal for simple conditional logic on a single line.
if return shorthand can be used for more complex conditional returns in functions.