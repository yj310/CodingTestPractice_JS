const form = document.querySelector(".js-form"), 
    input = form.querySelector("input"), 
    greeting = document.querySelector(".js-greetings");

const User_LS = "currentUser", 
    SHOWING_CN = "showing";

function paintGreeting(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(User_LS);
    if(currentUser === null) {
        // she is not

    } else {
        // she is
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();