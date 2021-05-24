const coche  = new Coche();
let x = 0;
let y = 0;

function move(event){

    if(event.keyCode == "39"){
        coche.moveRight();    
    }else if(event.keyCode == "37"){
        coche.moveLeft();
    }else if(event.keyCode == "38"){
        coche.moveUp();
    }else if(event.keyCode == "40"){
        coche.moveDown();
    }
}

document.onkeyup = move;
