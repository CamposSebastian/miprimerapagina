//alert("Hola este es mi Javascript");

//let nombre = "Marta";
//var nombre1 = "Marta";
//const nombre2 = "Marta";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

let contenidoTitulo = "Nombre";

let titulo = document.querySelector (".text")
titulo.innerHTML = contenidoTitulo;

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo == "Nombre"){
    titulo.innerHTML = "Mi web";
}
else {
    console.log("No se cumple");
};



let nombre = "Sebastian";
let ciudad = "Bogota";
let gusto = "pollo a la broster";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido = `Me llamo ${nombre}, vivo en ${ciudad}. Me gusta el ${gusto} y compartir con mi familia. Me encantaria aprender a programar para poder ayudar a las personas a mostrar lo que hacen`;

    return contenido;
};

parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

const form = document.getElementById("form");
const nombre1 = document.getElementById("nombre");
const parrafo1 = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre1.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo1.innerHTML = warnings;
  } else {
    parrafo1.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
