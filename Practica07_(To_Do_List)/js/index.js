const txtToDo = document.querySelector("#txtToDo");
const listToDo = document.querySelector("#toDoList");
const listFinishToDo = document.querySelector("#toDoFinish");

const createToDo = new ListToDo();

let indexSpan = 0;

EventListener();

function EventListener() {
    document.getElementById("Lista").onsubmit = GetActividades;
}

function GetActividades(event) {
    //Prevenir la accion por default que tienen los elementos
    event.preventDefault();

    if(txtToDo.value.trim() == ""){
        return;
    }

    createToDo.AddActividadDom(listToDo, null, txtToDo.value);

    
    document.querySelectorAll("span")[indexSpan].addEventListener("click", removeActividad);

    indexSpan ++;
}

function removeActividad(event) {
    console.log(event);
    if(event.target.nodeName != "SPAN") return;

    let liDeleted = event.target.parentElement.parentElement;
    
    createToDo.AddActividadDom(listFinishToDo, null, liDeleted.textContent);

    listToDo.removeChild(liDeleted);
    
    indexSpan--;
}