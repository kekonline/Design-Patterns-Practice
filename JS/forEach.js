1. Traditional Function Syntax
You can pass a normal function to forEach.

    javascript
Copy code
const array = [1, 2, 3, 4];
array.forEach(function (element) {
    console.log(element);
});
2. Arrow Function Syntax
You can use the more concise arrow function syntax to make it shorter.

    javascript
Copy code
const array = [1, 2, 3, 4];
array.forEach((element) => {
    console.log(element);
});
3. Arrow Function with Implicit Return
If your function body consists of only a single expression, you can remove the curly braces and the return keyword for an implicit return.

    javascript
Copy code
const array = [1, 2, 3, 4];
array.forEach(element => console.log(element));  // Shorter syntax
4. Arrow Function with Multiple Parameters
You can also destructure or handle multiple parameters like element, index, and array.

    javascript
Copy code
const array = [1, 2, 3, 4];
array.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});
5. With this Context
If you want to control the this value inside the callback function, you can pass a second argument to forEach.

    javascript
Copy code
const obj = {
    prefix: 'Hello, ',
    names: ['Alice', 'Bob'],
    greet() {
        this.names.forEach(function (name) {
            console.log(this.prefix + name); // "this" refers to obj here
        }, this); // Pass "this" to set the context correctly
    }
};

obj.greet();