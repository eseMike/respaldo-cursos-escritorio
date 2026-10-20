let DB;

document.addEventListener("DOMContentLoaded", () => {
   crmDB();

   setTimeout(() => {
      crearCliente();
   }, 5000);
});

function crmDB() {
   //Crear una base de datos versión 1.0
   let crmDB = window.indexedDB.open("crm", 1.0);

   //Si hay un error
   crmDB.onerror = function () {
      console.log("Hubo un error al tratar de crear la base de datos");
   };

   //Si fue exitosa la creación
   crmDB.onsuccess = function () {
      console.log("Base de datos creada");

      DB = crmDB.result;
   };

   //Declaramos objectStore para las configuraciones
   crmDB.onupgradeneeded = function (e) {
      const db = e.target.result;

      const objectStore = db.createObjectStore("crm", {
         keyPath: "crm",
         autoIncrement: true,
      });

      //Definir columntas
      objectStore.createIndex("nombre", "nombre", {unique: false});
      objectStore.createIndex("email", "email", {unique: true});
      objectStore.createIndex("telefono", "telefono", {unique: false});

      console.log("Columnas creadas");
   };
}

function crearCliente() {
   // Pauta para crear transacciones

   let transaction = DB.transaction(["crm"], "readwrite");

   transaction.oncomplete = function () {
      console.log("Transacción completada");
   };

   transaction.onerror = function () {
      console.log("Hubo un error");
   };

   const objectStore = transaction.objectStore("crm");

   const nuevoCliente = {
      telefono: 55555555,
      nombre: "Mike",
      email: "correo@correo.com",
   };

   const peticion = objectStore.add(nuevoCliente);
   console.log(peticion);
}
