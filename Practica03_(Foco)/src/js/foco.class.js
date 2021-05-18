class Foco {
    encendido;

    constructor() {
        this.encendido = false;
    }

    encender() {
        this.encendido = true;
        return `../img/encendido.jpg`;
    }

    apagar(){
        this.encendido = false;
        return `../img/apagado.jpg`;
    }
}