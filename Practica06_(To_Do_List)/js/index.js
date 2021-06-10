const txtToDo = document.querySelector("#txtToDo");
const listToDo = document.querySelector("#toDoList");
const listFinishToDo = document.querySelector("#toDoFinish");

const createToDo = new ListToDo(listToDo);

initEventListenerSpans();
EventListener();

function EventListener() {
  document.getElementById("Lista").onsubmit = GetActividades;
}

function GetActividades(event) {
  //Prevenir la accion por default que tienen los elementos
  event.preventDefault();
  if (txtToDo.value.trim() == "") {
    return;
  }

  createToDo.AddActividadDom(listToDo, "get", txtToDo.value);
  let spanList = document.querySelectorAll(`span[pendiente="true"]`);
  spanList[spanList.length - 1].addEventListener("click", removeActividad);
}

function initEventListenerSpans() {
  let spanLists = document.querySelectorAll("span");

  for (let index = 0; index < spanLists.length; index++) {
    spanLists[index].addEventListener("click", removeActividad);
  }

  console.log(spanLists);
}

function removeActividad(event) {
  console.log(event);
  if (event.target.nodeName != "SPAN") return;

  let liDeleted = event.target.parentElement.parentElement;

  createToDo.AddActividadDom(
    listFinishToDo,
    "deleted",
    liDeleted.textContent.substring(0, liDeleted.textContent.length - 1)
  );

  listToDo.removeChild(liDeleted);
}
