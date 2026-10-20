//Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
let tweets = [];

// EventListeners
eventListeners();
function eventListeners() {
   //Cuando el usuario agrega un nuevo tweet
   formulario.addEventListener("submit", agregarTweet);

   //Cuando el documento está listo
   document.addEventListener("DOMContentLoaded", () => {
      tweets = JSON.parse(localStorage.getItem("tweets")) || [];
      console.log(tweets);
      crearHTML();
   });
}

// Funciones
function agregarTweet(e) {
   e.preventDefault();

   //Text area donde el usuario escribe
   const tweet = document.querySelector("#tweet").value;

   //Validación para no guardar tweets vacíos
   if (tweet === "") {
      mostrarError("Un mensaje no puede ir vacío");

      return; //Evita que se ejecuten lienas de código vacías
   }

   const tweetObj = {
      id: Date.now(),
      tweet,
   };

   //Añadir al arreglo los tweets
   tweets = [...tweets, tweetObj];

   crearHTML();

   //Reiniciar el formulario
   formulario.reset();
}

//Mostrar mensaje de error
function mostrarError(error) {
   const mensajeError = document.createElement("P");
   mensajeError.textContent = error;
   mensajeError.classList.add("error");

   //insertar mensaje en el contenido
   const contenido = document.querySelector("#contenido");
   contenido.appendChild(mensajeError);

   //Elimina la alerta después de 2 segundos
   setTimeout(() => {
      mensajeError.remove();
   }, 2000);
}

//Muestra listado de los tweets
function crearHTML() {
   limpiarHTML();

   if (tweets.length > 0) {
      tweets.forEach((tweet) => {
         //Agrega un botón de eliminar
         const btnEliminar = document.createElement("A");
         btnEliminar.classList.add("borrar-tweet");
         btnEliminar.innerText = "X";

         //Añadir la función de eliminar
         btnEliminar.onclick = () => {
            borrarTweet(tweet.id);
         };

         //Creamos el HTML
         const li = document.createElement("LI");

         //Añadimos el texto
         li.innerText = tweet.tweet;

         //Asignamos el botón al padre
         li.appendChild(btnEliminar);

         //  Agregar en el HTML
         listaTweets.appendChild(li);
      });
   }

   sincronizarStorage();
}

//Agrega los tweets actuales a LocalStorage
function sincronizarStorage() {
   localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Borrar tweet
function borrarTweet(id) {
   tweets = tweets.filter((tweet) => tweet.id !== id);
   crearHTML();
}

//Limpiar HTML
function limpiarHTML() {
   while (listaTweets.firstChild) {
      listaTweets.removeChild(listaTweets.firstChild);
   }
}
