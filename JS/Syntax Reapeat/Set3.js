const var1 = () => { }
const var2 = () => console.log("Hello");
const var3 = async () => { }

var1.forEach((ele) => (console.assert.log("hi")));
var2.map(ele => ele * 2);

isLoggedIn && showWelcomeMessage();
isLoggedIn || showWelcomeMessage();

let name2 = inputName ?? "Guest";
let name5 = inputName || "Guest";

let fetchData = data && fetchDataFromAPI();
let message = user && `Hello, ${user.name}`;