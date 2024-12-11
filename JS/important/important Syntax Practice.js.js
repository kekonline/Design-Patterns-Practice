const newArray = array.map(element => element * 2);
const newArray = array.map((element) => {
    return element * 2;
});
const newArray7 = array7.map(element => element * 2).filter(element => element > 5);
const filteredArray = array.filter(element => element > 2);
const filteredArray = array.filter((element) => {
    return element > 2;
});

const sum = array.reduce((accumulator, current) => accumulator + current, 0);
const sum = array.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);

const sortedArray = array.sort((a, b) => a - b);
const sortedArray = array.sort((a, b) => {
    return a - b;
});

const flatMappedArray = array.flatMap(element => [element, element * 2]);
const flatMappedArray = array.flatMap((element) => {
    return [element, element * 2];
});


const nestedArray = [1, 2, [3, 4], [5, 6]];

// Using flat() to flatten the array
const flattenedArray = nestedArray.flat();

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]


const array = [1, 2, 3, 4];

// Using flatMap to first square the elements, then flatten the result
const flatMappedArray = array.flatMap(num => [num, num * 2]);

console.log(flatMappedArray); // Output: [1, 2, 2, 4, 3, 6, 4, 8]


