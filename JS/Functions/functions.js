// 1. Function Declaration
// A named function that can be used before its definition due to hoisting.

function greet(name) {
    return `Hello, ${name}!`;
}


// 2. Function Expression
// A function assigned to a variable.It's not hoisted.

const greet = function (name) {
    return `Hello, ${name}!`;
};


// 3. Arrow Function
// A shorter syntax introduced in ES6.Doesn't bind its own this.

// Single - line(Implicit Return):

const greet = (name) => `Hello, ${name}!`;

// Multi - line:

const greet = (name) => {
    const message = `Hello, ${name}!`;
    return message;
};

// Without Parameters:

const greet = () => 'Hello!';

// With Multiple Parameters:

const add = (a, b) => a + b;


// 4. Anonymous Function
// Functions without a name, often used as callbacks.

setTimeout(function () {
    console.log('Hello after 1 second!');
}, 1000);


// 5. Immediately Invoked Function Expression(IIFE)
// A function that runs immediately after being defined.

(function (name) {
    console.log(`Hello, ${name}!`);
})('Rishi');

// With arrow functions:

(() => {
    console.log('Hello!');
})();


// 6. Generator Function
// Functions that can pause and resume their execution using yield.

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}


// 7. Async Function
// Used to work with promises in an easier way with async / await.

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}


// 8. Constructor Function
// Used to create objects, often with the new keyword.

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Rishi', 40);


// 9. Class Methods
// Functions defined within classes.

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return `Hello, ${this.name}!`;
    }
}


// 10. Method Shorthand(Object Methods)
// Defining methods inside an object without the function keyword.

const person2 = {
    name: 'Rishi',
    greet() {
        return `Hello, ${this.name}!`;
    }
};


// 11. Function with bind, call, or apply
// Functions explicitly bound to a specific this context.

function greet() {
    return `Hello, ${this.name}!`;
}

const person3 = { name: 'Rishi' };
const boundGreet = greet.bind(person3);
