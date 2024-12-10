// 1. Traditional Function Syntax
// You can use a regular function to iterate through the array and transform each element.

const array1 = [1, 2, 3, 4];
const newArray1 = array1.map(function (element) {
    return element * 2;  // Transforming the element
});

console.log(newArray1);  // [2, 4, 6, 8]


// 2. Arrow Function Syntax
// You can use an arrow function for a more concise syntax.

const array2 = [1, 2, 3, 4];

const newArray2 = array2.map((element) => {
    return element * 2;  // Transforming the element
});

console.log(newArray2);  // [2, 4, 6, 8]


// 3. Arrow Function with Implicit Return
// If your transformation consists of just one expression, you can omit the curly braces and the return keyword for a shorter, more concise version.

const array3 = [1, 2, 3, 4];

const newArray3 = array3.map(element => element * 2);  // Shorter syntax with implicit return

console.log(newArray3);  // [2, 4, 6, 8]


// 4. Using Multiple Parameters
// The map() method accepts up to three arguments for the callback: the current element, the index of the current element, and the original array.You can use all of these parameters as needed.

const array4 = [1, 2, 3, 4];

const newArray4 = array4.map((element, index, array) => {
    return `Element at index ${index}: ${element}`;
});

console.log(newArray4);  // ["Element at index 0: 1", "Element at index 1: 2", ...]


// 5. With Object Destructuring
// If you're working with an array of objects, you can use object destructuring inside the map() callback to make your code cleaner.

const users5 = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
];

const names5 = users5.map(({ name5 }) => name5);  // Destructuring objects

console.log(names5);  // ['Alice', 'Bob']


// 6. Returning Objects from map()
// You can also return objects from map() for more complex transformations.

const user6s = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
];

const userInfo = users6.map(({ name, age }) => ({
    userName: name,
    userAge: age,
}));

console.log(userInfo);  // [{userName: 'Alice', userAge: 25}, {userName: 'Bob', userAge: 30}]


// 7. Chaining map() with Other Methods
// You can chain map() with other array methods like filter(), reduce(), etc., for more complex operations.

const array7 = [1, 2, 3, 4];

const newArray7 = array7.map(element => element * 2).filter(element => element > 5);

console.log(newArray7);  // [6, 8]