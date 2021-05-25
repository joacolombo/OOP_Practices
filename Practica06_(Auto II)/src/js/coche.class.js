class Coche{
    ejeX = 0;
    ejeY = 0;
    
    
    moveRight(){
        console.log("DERECHA");
        this.ejeX = this.ejeX + 5;

        if(this.ejeX > 90){
            this.ejeX = this.ejeX - 5;
        }

        console.log(this.ejeX, this.ejeY);
        
        return this.ejeX;
    }

    moveLeft(){
        console.log("IZQUIERDA");
        this.ejeX = this.ejeX - 5;

        if(this.ejeX < 0){
            this.ejeX = this.ejeX + 5;
        }

        console.log(this.ejeX, this.ejeY);

        return this.ejeX;
    }

    moveUp(){
        console.log("ARRIBA");
        this.ejeY = this.ejeY + 5;

        if(this.ejeY > 0){
            this.ejeY = this.ejeY - 5;
        }

        console.log(this.ejeX, this.ejeY);

        return this.ejeY;
    }

    moveDown(){
        console.log("ABAJO");
        this.ejeY = this.ejeY - 5;

        if(this.ejeY < -80){
            this.ejeY = this.ejeY + 5;
        }
    
        console.log(this.ejeX, this.ejeY);

        return this.ejeY
    }
}