const btnApp = document.getElementById("btnApp");
btnApp.addEventListener("click", prenderApagar);

const foco = new Foco();

function prenderApagar(){
   let src = "";
   
   if(foco.encendido == true){
      console.log("APAGAR");
      src = foco.apagar();
   }else{
      console.log("ENCENDER");
      src = foco.encender();
   }

   let imgFoco = document.getElementById("imagenFoco");
   
   imgFoco.innerHTML = `<img src="${src}">`; 
}