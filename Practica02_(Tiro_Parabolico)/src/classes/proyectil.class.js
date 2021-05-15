class Proyectil {
    velocidadInicial = 0;
    angulo = 0;

    posicionesLeft = []; 
    posicionesBotton = [];

    constructor(velocidadInicialPm, anguloPm) {
        this.velocidadInicial = velocidadInicialPm;
        this.angulo = anguloPm;

        console.log(`
        Velocidad inicial: ${this.velocidadInicial} m/s
        Angulo: ${this.angulo}º
        `);
    }

    calcularDistanciaX(t){
        let distanciaX = this.velocidadInicial * Math.cos(this.angulo * (Math.PI / 180)) * t;

        return distanciaX;
    }

    calcularDistanciaY(t) {
        let distanciaY = this.velocidadInicial * Math.sin(this.angulo * (Math.PI / 180));
        distanciaY = distanciaY * t - 0.5 * 9.8 * Math.pow(t, 2);

        return distanciaY;
    }

    almacenarRecorrido() {
        let tiempo = 0;

        while(true){
            tiempo += 0.01;
            let left = this.calcularDistanciaX(tiempo);
            let bottom = this.calcularDistanciaY(tiempo);

            if(left < 0 || bottom < 0 || left >= 100 || bottom >= 100) {
                break;
            }

            this.posicionesLeft.push(left);
            this.posicionesBotton.push(bottom);
        }
    }
}

let proyectil = new Proyectil(45, 45);

proyectil.almacenarRecorrido();

let posicionesX = proyectil.posicionesLeft;
let posicionesY = proyectil.posicionesBotton;

console.log(posicionesX);
console.log(posicionesY);

