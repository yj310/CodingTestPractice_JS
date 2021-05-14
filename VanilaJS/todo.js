const toDoForm = document.querySelector(".js-toDoForm"), 
    toDoInput = toDoForm.querySelector("input"), 
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';


function paintToDo(text) {  
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");

    delBtn.innerText = "❌";
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);

    toDoList.appendChild(li);

}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
}

function loadToDo() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos === null) {
        
    } else {

    }
}


function init() {
    loadToDo();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();