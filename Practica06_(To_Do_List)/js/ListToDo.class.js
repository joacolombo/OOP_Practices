class ListToDo {

    ToDoLS;

    constructor(listToDo) {
        if(typeof ListToDo.instance === "object"){
            return ListToDo.instance;
        }

        this.ToDoLS = new HandleToDoLocalStorage();

        let tareas = this.ToDoLS.validateDataInLS("toDoPendings");
        this.iniciarTareas(listToDo, tareas);

        ListToDo.instance = this;
        return this;
    }

    iniciarTareas(lisToDo, tareas) {
        for (let index = 0; index < tareas.length; index++){
            this.AddActividadDom(lisToDo, null, tareas[index]);
        }
    }

    AddActividadDom(ul, origen, contenido) {
        let listToDo = this.ToDoLS.validateDataInLS("toDoPendings");
        
        if (origen == "get") {
            for (let index = 0; index < listToDo.length; index++) {
                
               if (listToDo[index].toLowerCase().indexOf(contenido.toLowerCase()) != -1) {
                alert("Tarea repetida, ingrese otra");   
                return;
               }
            }  
        }
        
        const li = document.createElement("li");
        li.classList = "list-group-item text-break";
        li.textContent = contenido;
        
        const btnRemove = document.createElement("button");
        btnRemove.classList = "close";

        const span = document.createElement("span");
        span.classList = "badge badge-pill text-danger";
        span.textContent = "X";

        ul.appendChild(li);
        li.appendChild(btnRemove);
        btnRemove.appendChild(span);

        if (origen == "get") {
            span.setAttribute("pendiente", "true");
            this.ToDoLS.SavePendingToDoLocalStorage(contenido);
        } else if(origen == "deleted") {
            this.ToDoLS.DeletedPendingToDoLocalStorage(contenido);
        }
    }
}
