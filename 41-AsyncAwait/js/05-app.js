const url = "https://picsum.photos/list";
document.addEventListener("DOMContentLoaded", obtenerDatosAsync);

// petición fetch con promise
function obtenerDatos() {
   fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => console.log(resultado))
      .catch((error) => console.log(error));
}

//Petición fetch con async await
async function obtenerDatosAsync() {
   try {
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);
   } catch (error) {
      console.log(error);
   }
}
