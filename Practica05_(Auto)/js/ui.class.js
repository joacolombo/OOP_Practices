const coche  = new Coche();
let auto = document.getElementById("auto");

auto.innerHTML = `<img src="/img/cocheRight.png" width=100px>`; 

function move(event){

    if(event.keyCode == "39"){

        coche.moveRight();
        auto.innerHTML = `<img src="/img/cocheRight.png" width=100px>`; 
        auto.style.left = coche.ejeX + "%";

    }else if(event.keyCode == "37"){

        coche.moveLeft();
        auto.innerHTML = `<img src="/img/cocheLeft.png" width=100px>`; 
        auto.style.left = coche.ejeX + "%";

    }else if(event.keyCode == "38"){

        coche.moveUp();
        auto.style.top = (-coche.ejeY) + "%";
        auto.innerHTML = `<img src="/img/cocheUp.png" width=100px>`; 

    }else if(event.keyCode == "40"){

        coche.moveDown();
        auto.innerHTML = `<img src="/img/cocheDown.png" width=100px>`; 
        auto.style.top = (-coche.ejeY) + "%";

    }
}

document.onkeyup = move;
