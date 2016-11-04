function nuevaTarea(){

  var text= document.getElementById("inputTarea").value;
  document.getElementById("inputTarea").value="";
  var chbox= document.getElementById("boxdos");

  if(text==null || text.length==0){
    alert("Debes escribir en el recuadro");
    return false;
  }

  //crear nodos necesarios
  var crearDiv= document.createElement("div"); // LA TAREAdiv class tarea
  var crearCheck= document.createElement("input"); // checkbox
  var createxto= document.createElement("span"); // el elemento del mensaje
  var insertaTexto= document.createTextNode(text); // el texto del mensaje
  var creatrash= document.createElement("i"); //icono basura
  var creatheart= document.createElement("i"); // icono corazon




  //crear las clases
  crearDiv.classList.add("box", "col-md-12");
  crearCheck.setAttribute("type","checkbox");
  creatrash.classList.add("fa", "fa-trash");
  creatheart.classList.add("fa", "fa-heart");

  //asignar cada nodo con su hijo

  createxto.appendChild(insertaTexto);
  crearDiv.appendChild(crearCheck);
  crearDiv.appendChild(createxto);
  crearDiv.appendChild(creatrash);
  crearDiv.appendChild(creatheart);
  chbox.appendChild(crearDiv);

//crear funciones para movimiento

  crearCheck.addEventListener("click", function(){
    createxto.classList.toggle("raya");
  })

  creatheart.addEventListener("click", function(){
    creatheart.classList.toggle("rojo");
  })

  creatrash.addEventListener("click", function(){
    chbox.removeChild(crearDiv);
  })
}
