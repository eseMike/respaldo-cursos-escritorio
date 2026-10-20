(function () {
   let DB;

   const formulario = document.querySelector("#formulario");

   document.addEventListener("DOMContentLoaded", () => {
      conectarDB();

      formulario.addEventListener("submit", validarCliente);
   });

   function validarCliente(e) {
      e.preventDefault();

      console.log("Validando...");

      //Leer los inputs
      const nombre = document.querySelector("#nombre").value;
      const email = document.querySelector("#email").value;
      const telefono = document.querySelector("#telefono").value;
      const empresa = document.querySelector("#empresa").value;

      if (nombre === "" || email === "" || telefono === "" || empresa === "") {
         imprimirAlerta("Todos los campos son obligatorios", "error");
         return;
      }

      //Crear un objeto con la información
      const client = {
         nombre,
         email,
         telefono,
         empresa,
      };

      client.id = Date.now();
      crearNuevoCliente(client);
   }

   function crearNuevoCliente(client) {
      const transaction = DB.transaction(["crm"], "readwrite");

      const objectStore = transaction.objectStore("crm");

      objectStore.add(client);

      transaction.onerror = () => {
         console.log("Hubo un error");

         imprimirAlerta("Hubo un error", "error");
      };

      transaction.oncomplete = () => {
         //  console.log("Cliente agregado");

         imprimirAlerta("El cliente se agregó correctamente");

         setTimeout(() => {
            window.location.href = "index.html";
         }, 3000);
      };
   }
})();
