const obtenerNombre = (info) => ({
   mostrarNombre() {
      console.log(`Nombre ${info.nombre}`);
   },
});

const guardarEmail = (info) => ({
   agregarEmail(email) {
      console.log(`Guardando email en: ${info.email}`);
      info.email = email;
   },
});

function Cliente(nombre, email, empresa) {
   let info = {
      nombre,
      email,
      empresa,
   };

   return Object.assign(info, obtenerNombre(info), guardarEmail(info));
}

function Empleado(nombre, email, puesto) {
   let info = {
      nombre,
      email,
      puesto,
   };

   return Object.assign(info, obtenerNombre(info), guardarEmail(info));
}

const cliente = Cliente("Mike", "null", "ForApp Creativo");
cliente.mostrarNombre();

const empleado = Empleado("Carlos", "null", "Diseñador");
empleado.mostrarNombre();
