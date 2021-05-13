/*alert('Im Working. Im JS. Im Beautiful. Im worth it.');
console.log('Im Working. Im JS. Im Beautiful. Im worth it.');
*/

/*
const a = 221;
let b = a - 5;
console.log(b);
*/

/*
// String
const what = "Nicloas";

// Boolean
const wat = true;

// Nuber
const wat = 666;

// float
const wat = 55.1;
*/

/*
// Array
const something = "Something"
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", something];
console.log(daysOfWeek)
*/

/*
// Object
const nicoInfo = {
    name: "Nico", 
    age: 33,
    gender: "Male", 
    isHandsome: true, 
    favMovies: ["Along the gods", "LOTR", "Oldboy"], 
    favFood: [
        {
            name: "Kimchi",
            fatty: false
        }, 
        {
            name: "Chees burer", 
            fatty: true
        }
    ]
}

console.log(nicoInfo.gender);
nicoInfo.gender = "Female";
console.log(nicoInfo.gender);

console.log(nicoInfo);
*/

/*
function sayHello(name, age) {
    console.log('Hello ' + name + '!');
    return `Hello ${name} you are ${age} years old`;
}

sayHello("nick", 12);
sayHello("del", 23);

greetNicolas = sayHello("Nicolas", 31);
console.log(greetNicolas);
*/

/*
const calculator = {
    plus: function(a, b) {
        return a + b;
    }
}

const plus = calculator.plus(5, 5);
console.log(plus);
*/

/*
//const title = document.getElementById("title");
const title = document.querySelector("#title");

console.log(title);
console.dir(title);
console.dir(document);

title.innerHTML = "Hi! From JS";
title.style.color = "red";
document.title = "I own you now";
*/

/*
const title = document.querySelector("#title");

function handleResize(event) {
    title.style.color = "blue";
}

window.addEventListener("resize", handleResize);
*/

/*
if(10 === 10) {
    console.log("hi");
} else {
    console.log("ho");
}

if(10 === '10') {
    console.log("hi");
} else {
    console.log("ho");
}


if(10 === '10') {
    console.log("hi");
} else if("10" === "10") {
    console.log("lalala");
} else {
    console.log("ho");
}
*/

/*
const age = prompt("How old are you");

if(age > 19) {
    console.log("you can drink");
} else {
    console.log("you cant")
}
*/

/*
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    
    const currentColor = title.style.color;

    if(currentColor == BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }

}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
    //title.addEventListener("mouseenter", handleClick);
}

init();
*/

/*
function handleOffline() {
    console.log("bye bye");
}

function handleOnline() {
    console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
*/



/*
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
*/

/*
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);

    if(hasClass) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}

function init() {
    title.addEventListener("click", handleClick);
}

init();
*/


const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}

init();

