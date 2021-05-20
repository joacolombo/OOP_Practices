class UI{ 
   textoVotar = "";
   votacion;

   eliminarPantalla1(){
      this.textoVotar = document.getElementById("voteTopic").value;

      let pantalla1 = document.getElementById("pantalla1");

      pantalla1.remove();
   }

   crearPantalla2(){
      const pantalla2 = document.getElementById("pantalla2");

      //Crear div e insertar pregunta
      const divTexto = document.createElement("div");
      divTexto.innerText = this.textoVotar;
      divTexto.setAttribute("class", "contenedorTexto");

      //Boton a favor
      const btnFavor = document.createElement("button");
      btnFavor.innerText = "A favor";
      btnFavor.setAttribute("class", "btn btn-outline-success btn-block");
      btnFavor.setAttribute("id","btnFavor");

      //Boton en contra
      const btnContra = document.createElement("button");
      btnContra.innerText = "En contra";
      btnContra.setAttribute("class", "btn btn-outline-danger btn-block");
      btnContra.setAttribute("id","btnContra");

      //Boton abstencion
      const btnAbstencion = document.createElement("button");
      btnAbstencion.innerText = "Abstencion";
      btnAbstencion.setAttribute("class", "btn btn-outline-warning btn-block");
      btnAbstencion.setAttribute("id","btnAbstencion");

      //Boton finalizar
      const btnFinalizar = document.createElement("button");
      btnFinalizar.innerText = "Finalizar";
      btnFinalizar.setAttribute("class", "btn btn-outline-primary btn-block");
      btnFinalizar.setAttribute("id","btnFinalizar");

      //Ordenar elementos dentro del div
      pantalla2.appendChild(divTexto);
      pantalla2.appendChild(btnFavor);
      pantalla2.appendChild(btnContra);
      pantalla2.appendChild(btnAbstencion);
      pantalla2.appendChild(btnFinalizar);
   }
}

let btnAceptar = document.getElementById("btnAceptar");

btnAceptar.addEventListener("click", eliminarPantallas);

const votacion = new Votacion();

function eliminarPantallas(){
   const ui = new UI();

   ui.eliminarPantalla1();
   ui.crearPantalla2();
   document.addEventListener("click", validarClick);
}

function validarClick(event){
   votacion.increaseVote(event.target.id);
}