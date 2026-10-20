const container = document.querySelector(".container");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

window.addEventListener("load", () => {
   formulario.addEventListener("submit", buscarClima);
});

function buscarClima(e) {
   e.preventDefault();

   //Validar
   const ciudad = document.querySelector("#ciudad").value;
   const pais = document.querySelector("#pais").value;

   if (ciudad === "" || pais === "") {
      //Hubo error
      mostrarError("Ambos campos son obligatorios");
      return;
   }
   //Consultar la API
   consultarAPI(ciudad, pais);
}

// Función de error
function mostrarError(mensaje) {
   console.log(mensaje);

   const alerta = document.querySelector(".bg-red-100");
   if (!alerta) {
      //Crear alerta
      const alerta = document.createElement("DIV");
      alerta.classList.add(
         "bg-red-100",
         "border-red-400",
         "text-red-700",
         "px-4",
         "py-3",
         "rounded",
         "max-w-md",
         "mx-auto",
         "mt-6",
         "text-center"
      );

      alerta.innerHTML = `
   <strong class="font-bold">Error!</strong>
   <span class="block">${mensaje}</span>
 `;

      container.appendChild(alerta);

      //Eliminar alerta después de 3 segunso
      setTimeout(() => {
         alerta.remove();
      }, 3000);
   }
}

// funcion para consultar API
function consultarAPI(ciudad, pais) {
   const appID = "52479fe1de98a80fab83fd6317ba4c06";

   const urlGeo = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appID}`;

   //Muestra un spinner
   spinner();

   fetch(urlGeo)
      .then((respuesta) => respuesta.json())
      .then((res) => {
         console.log(res);

         limpiarHTML(); //Limpiar el HTML previo
         if (res.cod === "404") {
            mostrarError("Ciudad no encontrada");
            return;
         }
         //Imprime respuesta en el HTML
         mostrarClima(res);
      });
}

//Función para mostrar los datos
function mostrarClima(res) {
   const {
      name,
      main: {temp, temp_max, temp_min},
   } = res;

   const centigrados = kelvinCenti(temp);
   const minCenti = kelvinCenti(temp_min);
   const maxCenti = kelvinCenti(temp_max);

   //Nombre de la ciudad
   const nombreCiudad = document.createElement("P");
   nombreCiudad.textContent = name;
   nombreCiudad.classList.add("font-bold", "text-4xl");

   const actual = document.createElement("P");
   actual.innerHTML = `${centigrados} &#8451;`;
   actual.classList.add("font-bold", "text-6xl");

   const temMin = document.createElement("P");
   temMin.innerHTML = `Temperatura mínima:${minCenti} &#8451;`;
   temMin.classList.add("text-xl");

   const temMax = document.createElement("P");
   temMax.innerHTML = `Temperatura máxima:${maxCenti} &#8451;`;
   temMax.classList.add("text-xl");

   const resultadoDiv = document.createElement("DIV");
   resultadoDiv.classList.add("text-center", "text-white");
   resultadoDiv.appendChild(nombreCiudad);
   resultadoDiv.appendChild(actual);
   resultadoDiv.appendChild(temMin);
   resultadoDiv.appendChild(temMax);

   resultado.appendChild(resultadoDiv);
}

const kelvinCenti = (grados) => parseInt(grados - 273.15);

//limpiar resultados
function limpiarHTML() {
   while (resultado.firstChild) {
      resultado.removeChild(resultado.firstChild);
   }
}

//Mostrar spinner
function spinner() {
   limpiarHTML();
   const divSpinner = document.createElement("DIV");
   divSpinner.classList.add("sk-circle-fade");

   divSpinner.innerHTML = `
   <div class="sk-circle-fade-dot"></div>
   <div class="sk-circle-fade-dot"></div>
   <div class="sk-circle-fade-dot"></div>
   <div class="sk-circle-fade-dot"></div>
   <div class="sk-circle-fade-dot"></div>
   <div class="sk-circle-fade-dot"></div>
   <div class="sk-circle-fade-dot"></div>
   <div class="sk-circle-fade-dot"></div>
   <div class="sk-circle-fade-dot"></div>
   <div class="sk-circle-fade-dot"></div>
   <div class="sk-circle-fade-dot"></div>
   <div class="sk-circle-fade-dot"></div>
   `;

   resultado.appendChild(divSpinner);
}
