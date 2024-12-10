// 1. forEach()
// Arrow function syntax:

array.forEach((element) => {
    console.log(element);
});

// Arrow function with implicit return (not applicable, as forEach is used for side effects, not transformation):

array.forEach((element) => console.log(element));


// 2. map()
// Arrow function syntax:

const newArray2 = array.map((element) => {
    return element * 2;
});

// Arrow function with implicit return:

const newArray = array.map((element) => element * 2);


// 3. filter()
// Arrow function syntax:

const filteredArray3 = array.filter((element) => {
    return element > 2;
});

// Arrow function with implicit return:

const filteredArray4 = array.filter((element) => element > 2);


// 4. reduce()
// Arrow function syntax:

const sum1 = array.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);

// Arrow function with implicit return:

const sum2 = array.reduce((accumulator, current) => accumulator + current, 0);


// 5. some()
// Arrow function syntax:

const hasEven1 = array.some((element) => {
    return element % 2 === 0;
});

// Arrow function with implicit return:

const hasEven = array.some((element) => element % 2 === 0);


// 6. every()
// Arrow function syntax:

const allEven1 = array.every((element) => {
    return element % 2 === 0;
});

// Arrow function with implicit return:

const allEven = array.every((element) => element % 2 === 0);


// 7. find()
// Arrow function syntax:

const found1 = array.find((element) => {
    return element === 2;
});

// Arrow function with implicit return:

const found = array.find((element) => element === 2);


// 8. findIndex()
// Arrow function syntax:

const index1 = array.findIndex((element) => {
    return element === 2;
});

// Arrow function with implicit return:

const index = array.findIndex((element) => element === 2);


// 9. sort()
// Arrow function syntax:

const sortedArray1 = array.sort((a, b) => {
    return a - b;
});

// Arrow function with implicit return:

const sortedArray = array.sort((a, b) => a - b);


// 10. includes()
// Arrow function syntax:

const exists1 = array.includes((element) => {
    return element === 2;
});

// Arrow function with implicit return (not applicable, since includes is a method of the array and not a callback function):

const exists = array.includes(2);


// 11. flatMap()
// Arrow function syntax:

const flatMappedArray1 = array.flatMap((element) => {
    return [element, element * 2];
});

// Arrow function with implicit return:

const flatMappedArray = array.flatMap((element) => [element, element * 2]);


// 12. reduceRight()
// Arrow function syntax:

const reversedSum1 = array.reduceRight((accumulator, current) => {
    return accumulator + current;
}, 0);

// Arrow function with implicit return:

const reversedSum = array.reduceRight((accumulator, current) => accumulator + current, 0);
