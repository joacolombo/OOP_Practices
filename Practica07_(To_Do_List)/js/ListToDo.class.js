class ListToDo {

    constructor() {
        if(typeof ListToDo.instance === "object"){
            return ListToDo.instance;
        }

        ListToDo.instance = this;
        return this;
    }

    AddActividadDom(ul, origen, contenido) {
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
    }
}
