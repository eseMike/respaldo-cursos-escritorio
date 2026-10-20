//Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciaCarrtitoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

let articulosCarrito = [];

// Event Listeners
cargarEventListeners();
function cargarEventListeners() {
   //Cuando agregas un curso presionando "Agregar Curso"
   listaCursos.addEventListener("click", agregarCurso);

   //Muestra los cursos de localstorage
   document.addEventListener("DOMContentLoaded", () => {
      articulosCarrito = JSON.parse(localStorage.getItem("carrito")) || [];
   });

   //Elimina cursos del carrito
   carrito.addEventListener("click", eliminarCurso);

   //Vaciar carrito
   vaciaCarrtitoBtn.addEventListener("click", () => {
      articulosCarrito = []; //Reseteamos el arreglo
      limpiarHTML(); //Limpiamos todo el HTML
   });
}

// FUNCIONES
//Agregar Cursos al carrito
function agregarCurso(e) {
   e.preventDefault();

   if (e.target.classList.contains("agregar-carrito")) {
      const cursoSeleccionado = e.target.parentElement.parentElement;
      leerDatosCurso(cursoSeleccionado);
   }
}

//eliminar cursos del carrito
function eliminarCurso(e) {
   e.preventDefault();
   if (e.target.classList.contains("borrar-curso")) {
      const cursoID = e.target.getAttribute("data-id");

      //Elimina del arreglo "articulosCarrito" por el data-id
      articulosCarrito = articulosCarrito.filter((curso) => {
         return curso.id !== cursoID;
      });

      console.log(articulosCarrito);
      carritoHTML();
   }
}

//Función que lee el contenido del HTML al que le dimos click y extrae la información del curso
function leerDatosCurso(curso) {
   //    console.log(curso);

   //Creamos un objeto con el contenido del curso actual
   const infoCurso = {
      imagen: curso.querySelector("img").src,
      titulo: curso.querySelector("h4").textContent,
      precio: curso.querySelector(".precio span").textContent,
      id: curso.querySelector("a").getAttribute("data-id"),
      cantidad: 1,
   };

   //Revisa si un elemento ya existe en el carrito
   const existe = articulosCarrito.some((curso) => {
      return curso.id === infoCurso.id;
   });
   if (existe) {
      //Actualizamos la cantidad
      const cursos = articulosCarrito.map((curso) => {
         if (curso.id === infoCurso.id) {
            curso.cantidad++;
            return curso; //Retonra objecto actualizado
         } else {
            return curso; //Retorna objetos que no son duplicados
         }
      });
      articulosCarrito = [...cursos];
   } else {
      //Agregamos curso al carrito
      articulosCarrito = [...articulosCarrito, infoCurso];
   }

   //   Agregamos elementos al array de carrito

   console.log(articulosCarrito);

   carritoHTML();
}

//Muestra el carrito de compras en el HTML
function carritoHTML() {
   //Limpiar el HTML

   limpiarHTML();

   //Recorre el carrito y genera el HTML
   articulosCarrito.forEach((curso) => {
      const { imagen, titulo, precio, cantidad, id } = curso;
      const row = document.createElement("tr");
      row.innerHTML = `
       <td>
           <img src="${imagen}" width="100"> 
       </td>
       
        <td>
            ${titulo}
        </td>

        <td>
            ${precio}
       </td>

       <td>
            ${cantidad}
       </td>

       <td>
            <a href="#" class="borrar-curso" data-id="${id}">X</a>
       </td>
      `;

      //Agrega el HTML del carrito en el tbody
      contenedorCarrito.appendChild(row);
   });

   //Agregar el carrito de compras al storage
   sincronizarStorage();
}

function sincronizarStorage() {
   localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
}

//Elimina los cursos del tbody
function limpiarHTML() {
   //Forma lenta, no recomendada
   //    contenedorCarrito.innerHTML = " ";

   while (contenedorCarrito.firstChild) {
      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
   }
}
