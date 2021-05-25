const coche  = new Coche();
let auto = document.getElementById("auto");

function move(event){

    if(event.keyCode == "39"){

        coche.moveRight();
        auto.innerHTML = `<img src="/src/img/coche.png" width=100px>`; 
        auto.style.left = coche.ejeX + "%";
        
        

    }else if(event.keyCode == "37"){

        coche.moveLeft();
        auto.innerHTML = `<img src="/src/img/cocheLeft.png" width=100px>`; 
        auto.style.left = coche.ejeX + "%";

        

    }else if(event.keyCode == "38"){

        coche.moveUp();
        auto.style.top = (-coche.ejeY) + "%";
        auto.innerHTML = `<img src="/src/img/cocheUp.png" width=100px>`; 

    }else if(event.keyCode == "40"){

        coche.moveDown();
        auto.innerHTML = `<img src="/src/img/cocheDown.png" width=100px>`; 
        auto.style.top = (-coche.ejeY) + "%";
        

    }
}

document.onkeyup = move;
