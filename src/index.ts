// EJERCICIO validar altura
//Desarrolle un algoritmo que de acuerdo a
//la altura de una persona, decida si puede entrar a
//un juego en un parque de diversiones

//Para poder subirse a la montaña rusa la persona debe medir
//1.30 mts o más

let dato1 = document.getElementById("dato1");

let btnEnviar = document.getElementById("enviar"); //getElementById se marca en html
let rotulo1 = document.getElementById("rotulo1");

rotulo1.innerHTML = "Ingrese su altura"; //para indicarle al usuario

btnEnviar.addEventListener("click", () => {
  //botón
  let altura: number = Number(dato1.value);

  if (altura >= 130) {
    //si la altura es mayor o igual a 1,30
    console.log("Usted puede pasar!"); //respuesta que ve el usuario
  } else {
    //si no
    console.log("Usted no puede pasar ):");
  }
});
