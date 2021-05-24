class UI{ 
   textoVotar = "";
   votacion;

   eliminarPantalla1(){
      this.textoVotar = document.getElementById("voteTopic").value;

      let pantalla1 = document.getElementById("pantalla1");

      pantalla1.remove();
   }


   eliminarPantalla2(){
      let pantalla2 = document.getElementById("pantalla2");

      pantalla2.remove();
   }

   eliminarPantalla3(){
      let pantalla3 = document.getElementById("pantalla3");

      pantalla3.remove();
   }

   crearPantalla2(){
      let pantalla2 = document.getElementById("pantalla2");

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

   renovarPantalla1(){

      // CREAR TODO PANTALLA 1 DE NUEVO


      /*
      let pantalla1 = document.getElementById("pantalla4");
      pantalla1.innerHTML = `
      
      <header>
          <h1>Votaciones</h1>
        </header>

        <div class="form-group">
          <label for="">Escriba el texto de la pregunta que sometera a votacion</label>
          <textarea id="voteTopic" class="form-control" aria-describedby="helpId"></textarea>
        </div>

        <button type="button" name="" id="btnAceptar" class="btn btn-outline-primary btn-block">Aceptar</button>
      
      `;
      */
      
      
      let pantalla4 = document.getElementById("pantalla4");

      const header = document.createElement("header");
   
      const h1 = document.createElement("h1");
      h1.innerText = "Votaciones";
   
      const formGroup = document.createElement("div");
      formGroup.setAttribute("class", "form-group");
   
      const label = document.createElement("label")
      label.innerText = "Escriba el texto de la pregunta que sometera a votacion";
   
      const textArea = document.createElement("textarea");
      textArea.setAttribute("class", "form-control");
      textArea.setAttribute("aria-describedby", "helpId");
      textArea.setAttribute("id", "voteTopic");
   
      const button = document.createElement("button");
      button.innerText = "Aceptar";
      button.setAttribute("class", "btn btn-outline-primary btn-block");
      button.setAttribute("id", "btnAceptar");
      
      
      pantalla4.appendChild(header);
      header.appendChild(h1);
      pantalla4.appendChild(formGroup);
      formGroup.appendChild(label);
      formGroup.appendChild(textArea);
      pantalla4.appendChild(button);
      

      let btnAceptar = document.getElementById("btnAceptar");
      btnAceptar.addEventListener("click", eliminarPantallas);
   }

   showVote(){
      const pantalla3 = document.getElementById("pantalla3");

      const div = document.createElement("div");
      div.setAttribute("class", "contenedorResultado")
      div.innerHTML = `
      ${this.textoVotar}
      <br>
      El numero de votos a favor es: ${votacion.aFavor}
      <br>
      El numero de votos en contra es: ${votacion.enContra}
      <br>
      El numero de abstenciones es: ${votacion.abstencion}
      `;
      const btn = document.createElement("button");
      btn.innerText = "Reiniciar";
      btn.setAttribute("class", "btn btn-outline-primary btn-block");
      btn.setAttribute("id", "btnReiniciar");

      pantalla3.appendChild(div);
      pantalla3.appendChild(btn);
      
      let btnReiniciar = document.getElementById("btnReiniciar");
      btnReiniciar.addEventListener("click", renovarPantallas)

   }
}

let btnAceptar = document.getElementById("btnAceptar");
btnAceptar.addEventListener("click", eliminarPantallas);

const votacion = new Votacion();
const ui = new UI();

function eliminarPantallas(){
   ui.eliminarPantalla1();
   ui.crearPantalla2();
   document.addEventListener("click", validarClick);
}

function renovarPantallas(){
   console.log("entre");
   ui.eliminarPantalla3();
   ui.renovarPantalla1();
   pantalla1 = "";
}

function validarClick(event){

   if (event.target.id != "btnFinalizar"){

      votacion.increaseVote(event.target.id);

   }else{

      ui.eliminarPantalla2();
      ui.showVote();

      votacion.aFavor = 0;
      votacion.enContra = 0;
      votacion.abstencion = 0;
   }
}
