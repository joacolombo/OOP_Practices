const drawProyectil = document.getElementById("drawProyectil");

drawProyectil.addEventListener("click", dibujarSpan);

function dibujarSpan(){
    const proyectil = new Proyectil(90, 50)
    proyectil.almacenarRecorrido();
    let posicionesX = proyectil.posicionesLeft;
    let posicionesY = proyectil.posicionesBotton;

    for(let i=0; i<posicionesY.length; i++){
        const span = document.createElement("span");

        span.style.left = `${posicionesX[i]}%`;
        span.style.bottom = `${posicionesY[i]}%`;

        document.getElementById("contenedor").appendChild(span);
    }
}