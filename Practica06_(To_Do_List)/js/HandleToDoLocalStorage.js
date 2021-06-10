class HandleToDoLocalStorage {
    SavePendingToDoLocalStorage(toDo) {
        let tareasGuardadas = this.validateDataInLS("toDoPendings");
        tareasGuardadas.push(toDo);
        localStorage.setItem("toDoPendings", JSON.stringify(tareasGuardadas));
    }

    validateDataInLS(keyLS) {
        let tareas = localStorage.getItem(keyLS);

        if(tareas == null) {
            return [];
        }else{
            return JSON.parse(tareas);
        }
    }

    DeletedPendingToDoLocalStorage(toDo) {
        let tareasGuardadas = this.validateDataInLS("toDoPendings");

        if(tareasGuardadas.length == 0){
            return;
        }

        for(let index = 0; index < tareasGuardadas.length; index++) {
            if(toDo == tareasGuardadas[index]){
                tareasGuardadas.splice(index, 1);
            }
        }

        localStorage.setItem("toDoPendings", JSON.stringify(tareasGuardadas));
    }
}

//JSON.stringify([1,2,3]) = "[1,2,3]"
//JSON.parse("[1,2,3]") = [1,2,3]