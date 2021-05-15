/*
//Objetos
let robot = {
    color: "Gris",
    capacidad: 1000,
    consumo: 200,
    cargaActual: 50,
    encendido: false,
    posicionX: -102,
    posicionY: -98,
    direccion: 50,
};
*/

//Clases
class Robot {
    color = "";
    capacidad = 0;
    consumo = 0;
    encendido = false;
    posicionX = 0;
    posicionY = 0;
    
    //Constructor: es un metodo que funciona para inicializar los valores de mi objeto en mi clase
    constructor(colorPm, capacidadPm, consumoPm, encendidoPm, posicionXPm,posicionYPm) {
        this.color = colorPm;
        this.capacidad = capacidadPm;
        this.consumo = consumoPm;
        this.encendido = encendidoPm;
        this.posicionX = posicionXPm;
        this.posicionY = posicionYPm;
    }

    mostrarPropiedades(){
        return`
        El robot es de color ${this.color}
        El robot tiene una capacidad de bateria de: ${this.capacidad} mA
        El robot consume: ${this.consumo} mA/h
        El robot esta encendido? ${this.encendido}
        Latitud del robot: ${this.posicionX}
        Longitud del robot: ${this.posicionY}
        `;
    }
}

//Instancia
let robot1 = new Robot("rojo", 100, 100, false, 102, 91);

console.log(robot1.mostrarPropiedades());