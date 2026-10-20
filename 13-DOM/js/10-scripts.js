const enlace = document.createElement("A");
//Agregando el texto
enlace.textContent = "Nuevo enlace";

// Agregando el href
enlace.href = "/nuevo-enlace";
enlace.target = "_blank";

enlace.setAttribute("data-enlace", "nuevo-enlace");

enlace.classList.add("newClass");

enlace.onclick = miFunction;

function miFunction() {
   console.log("Esto es una función de prueba");
}

const navegacion = document.querySelector(".navegacion");
// console.log(navegacion.children);

navegacion.insertBefore(enlace, navegacion.children[2]);

//Crear un card de forma dinámica
const parrafo1 = document.createElement("P");
parrafo1.textContent = "Concierto";
parrafo1.classList.add("categoria", "concierto");

const parrafo2 = document.createElement("P");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");

const parrafo3 = document.createElement("P");
parrafo3.textContent = "$800 por persona";
parrafo3.classList.add("precio");

//Crear Div con clase info
const info = document.createElement("DIV");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear imagen
const img = document.createElement("IMG");
img.src = "img/hacer2.jpg";
img.alt = "Texto alternativo";

//Crear Card
const card = document.createElement("DIV");
card.classList.add("card");

//Asignar la imagen
card.appendChild(img);

//Asignar info
card.appendChild(info);

//Insertar en el HTML
const contenedor = document.querySelector(".hacer .contenedor-cards");
contenedor.appendChild(card);
