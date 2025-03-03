// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Creo el array listaAmigos y defino variables.
let listaAmigos = [];
const inputAmigo = document.getElementById("amigo");
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// Agrego un nombre  
function agregarAmigo() {
  const nuevoAmigo = inputAmigo.value.trim();
  if (nuevoAmigo === "") {
    alert(" . . . ¡Por favor, ingresa un nombre !");
    return;
  }
  
  if (listaAmigos.some(amigo => amigo.toUpperCase() === nuevoAmigo.toUpperCase())) {
    alert("  Nombre ya ingresado a la lista !!!. Por favor, ingresa otro.");
    return;
  }
  listaAmigos.push(nuevoAmigo); // Actualizo la lista y el HTML
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nuevoAmigo;
  ulListaAmigos.appendChild(nuevoElemento);
  // Limpio el campo de entrada
  inputAmigo.value = ""; 
}

inputAmigo.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    agregarAmigo();
  }
});

 // Sorteo de amigo

 function sortearAmigo(){
    if (listaAmigos.length === 0) {
        alert(" No hay amigo para sortear");
        return;
    }
let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
let resultado = document.getElementById("resultado");
resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

let limpiarLista = document.getElementById("listaAmigos");
limpiarLista.innerHTML ="";
}      

  