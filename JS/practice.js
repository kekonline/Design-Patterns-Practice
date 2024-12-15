const var1 = () => { };
const var2 = () => a;
const add1 = (a, b) => a + b;
(() => { console.log("Hello") })()
const var3 = async () => { };

var1.forEach((ele) => { console.log("hi") });
var1.forEach(ele => console.log("we"));

var1.map(ele => ele * 2);
var1.map((ele) => { return ele * 2 })

var1.reduce((accumulator, current) => accumulator + current, 0);
var1.reduce((accumulator, current) => {
    return accumulator + current;
}, 0);

var1.sort((a, b) => a - b);
var1.sort((a, b) => {
    return a - b;
});

var1.flatMap(element => [element, element * 2]);
var1.flatMap((element) => {
    return [element, element * 2];
});

isLoggedIn && showWelcomeMessage();
isLoggedIn || showWelcomeMessage();

let name2 = inputName ?? "Guest";
let name5 = inputName || "Guest";

let fetchData = data && fetchDataFromAPI();
let message = user && `Hello, ${user.name}`;