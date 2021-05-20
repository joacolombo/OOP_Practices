class Votacion{
    aFavor = 0;
    enContra = 0;
    abstencion = 0;

    increaseVote(getBtn){

        //Similar a un if
        switch(getBtn){
            case "btnFavor": 
                this.aFavor++;
                break;
            case "btnContra":
                this.enContra++;
                break;
            case "btnAbstencion":
                this.abstencion++;
                break;
        }

        console.log(this.aFavor, this.enContra, this.abstencion);
    }
}