class Coche{
    ejeX = 0;
    ejeY = 0;
    auto = document.getElementById("auto");
    
    moveRight(){
        console.log("DERECHA");
        this.ejeX = this.ejeX + 5;

        if(this.ejeX > 90){
            this.ejeX = this.ejeX - 5;
        }

        auto.style.left = this.ejeX + "%";

        console.log(this.ejeX, this.ejeY);
    }

    moveLeft(){
        console.log("IZQUIERDA");
        this.ejeX = this.ejeX - 5;

        if(this.ejeX < 0){
            this.ejeX = this.ejeX + 5;
        }

        auto.style.left = this.ejeX + "%";

        console.log(this.ejeX, this.ejeY);
    }

    moveUp(){
        console.log("ARRIBA");
        this.ejeY = this.ejeY + 5;

        if(this.ejeY > 0){
            this.ejeY = this.ejeY - 5;
        }

        auto.style.top = (-this.ejeY) + "%";

        console.log(this.ejeX, this.ejeY);
    }

    moveDown(){
        console.log("ABAJO");
        this.ejeY = this.ejeY - 5;

        if(this.ejeY < -80){
            this.ejeY = this.ejeY + 5;
        }

        auto.style.top = (-this.ejeY) + "%";
        
        console.log(this.ejeX, this.ejeY);
    }
}